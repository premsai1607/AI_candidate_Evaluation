import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import JobDescription from '../components/JobDescription';
import ResumeUpload from '../components/ResumeUpload';
import CandidateTable from '../components/CandidateTable';
import CandidateModal from '../components/CandidateModal';
import { candidateService } from '../services/api';

const Dashboard = () => {
    const [candidates, setCandidates] = useState([]);
    const [jd, setJd] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [isLoading, setIsLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    // Initial fetch
    useEffect(() => {
        fetchCandidates();
    }, []);

    const fetchCandidates = async () => {
        try {
            const res = await candidateService.getCandidates();
            setCandidates(res.data);
        } catch (err) {
            console.error("Failed to fetch candidates", err);
        }
    };

    const handleUpload = async (files) => {
        setIsUploading(true);
        setError(null);
        const formData = new FormData();
        files.forEach(file => formData.append('resumes', file));

        try {
            const res = await candidateService.uploadResumes(formData);
            setCandidates(prev => [...res.data.candidates, ...prev]);
        } catch (err) {
            setError("Failed to upload resumes. Please try again.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleAnalyze = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await candidateService.analyzeCandidates(jd);
            setCandidates(res.data.candidates);
        } catch (err) {
            setError("Analysis failed. Please check your connection.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
                {/* Dashboard Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Candidate Evaluation</h1>
                    <p className="text-slate-500 mt-1">Upload resumes and match them against your job requirements.</p>
                </div>

                {error && (
                    <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-medium text-red-700">{error}</p>
                        <button onClick={() => setError(null)} className="ml-auto text-red-400 hover:text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    <JobDescription
                        jd={jd}
                        setJd={setJd}
                        onAnalyze={handleAnalyze}
                        isLoading={isLoading}
                    />
                    <ResumeUpload
                        onUpload={handleUpload}
                        isUploading={isUploading}
                    />
                </div>

                {/* Table Controls */}
                <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="relative w-full md:w-96">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="input-field pl-10"
                            placeholder="Search by candidate name or skills..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <span className="text-sm font-semibold text-slate-500 whitespace-nowrap">Filter Status:</span>
                        <select
                            className="input-field py-2"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="All">All Results</option>
                            <option value="Recommended">Recommended</option>
                            <option value="Average Match">Average Match</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                </div>

                {/* Candidates Table */}
                <div className="mb-10">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                            Ranking Results
                            <span className="bg-blue-100 text-blue-600 px-2.5 py-0.5 rounded-full text-xs font-bold">
                                {candidates.length} Total
                            </span>
                        </h2>
                    </div>
                    <CandidateTable
                        candidates={candidates}
                        searchTerm={searchTerm}
                        filterStatus={filterStatus}
                        onView={(candidate) => setSelectedCandidate(candidate)}
                    />
                </div>
            </main>

            <CandidateModal 
                candidate={selectedCandidate} 
                onClose={() => setSelectedCandidate(null)} 
            />
        </div>
    );
};

export default Dashboard;