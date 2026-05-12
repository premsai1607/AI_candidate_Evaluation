import React from 'react';

const CandidateModal = ({ candidate, onClose }) => {
    if (!candidate) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl relative z-10 overflow-hidden animate-fade-in">
                <div className="bg-blue-600 p-8 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl border-4 border-white/20 overflow-hidden shadow-lg">
                            <img
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(candidate.name)}&background=white&color=2563eb&size=128`}
                                alt={candidate.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{candidate.name}</h2>
                            <p className="text-blue-100 flex items-center gap-1.5 mt-1 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {candidate.fileName}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">AI Match Score</p>
                            <div className="flex items-end gap-2">
                                <span className={`text-4xl font-black ${candidate.score >= 80 ? 'text-green-600' : (candidate.score >= 50 ? 'text-yellow-600' : 'text-red-600')}`}>
                                    {candidate.score}%
                                </span>
                                <span className="text-sm font-bold text-slate-400 mb-1.5">Accuracy</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Recommendation</p>
                            <div className="mt-1">
                                {candidate.status === 'Recommended' && <span className="badge-recommended">Highly Recommended</span>}
                                {candidate.status === 'Average Match' && <span className="badge-average">Average Match</span>}
                                {candidate.status === 'Rejected' && <span className="badge-rejected">Rejected</span>}
                                {candidate.status === 'Pending' && <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Analysis Required</span>}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Extracted Skills</p>
                            <div className="flex flex-wrap gap-2">
                                {candidate.skills.map((skill, i) => (
                                    <span key={i} className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-semibold">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Professional Experience</p>
                            <p className="text-slate-700 font-bold text-lg">{candidate.experience} Years of Industry Experience</p>
                        </div>
                    </div>

                    <div className="mt-10 flex gap-4">

                        <button
                            onClick={onClose}
                            className="btn-secondary px-8 py-4 rounded-2xl text-slate-600 font-bold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateModal;
