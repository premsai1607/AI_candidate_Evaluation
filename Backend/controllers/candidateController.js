import { calculateScore, getRecommendation } from '../utils/scoring.js';


let candidates = [];

const generateMockCandidate = (file) => {
    const skillsPool = ['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS', 'TypeScript', 'TailwindCSS', 'Python', 'AWS', 'Docker', 'SQL'];
    const filename = file.originalname.toLowerCase();


    let initialSkills = [];
    if (filename.includes('react')) initialSkills.push('ReactJS');
    if (filename.includes('node')) initialSkills.push('NodeJS');
    if (filename.includes('python')) initialSkills.push('Python');
    if (filename.includes('mongo')) initialSkills.push('MongoDB');
    if (filename.includes('java')) initialSkills.push('JavaScript');
    if (filename.includes('aws')) initialSkills.push('AWS');

    const randomSkills = skillsPool
        .filter(s => !initialSkills.includes(s))
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.max(0, (3 + Math.floor(Math.random() * 3)) - initialSkills.length));

    const skills = [...initialSkills, ...randomSkills];
    const experience = Math.floor(Math.random() * 10) + 1;
    const name = file.originalname.split('.')[0].replace(/[-_]/g, ' ');

    return {
        id: Date.now() + Math.random().toString(36).substr(2, 9),
        name: name.charAt(0).toUpperCase() + name.slice(1),
        skills: skills,
        experience: experience,
        fileName: file.originalname,
        filePath: file.path,
        score: 0,
        status: 'Pending'
    };
};

export const uploadResumes = (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded or invalid file format' });
        }

        const newCandidates = req.files.map(file => {
            const exists = candidates.find(c => c.fileName === file.originalname);
            if (exists) return null;
            return generateMockCandidate(file);
        }).filter(c => c !== null);

        candidates = [...candidates, ...newCandidates];

        res.status(200).json({
            message: `${newCandidates.length} resumes uploaded successfully`,
            candidates: newCandidates
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const analyzeCandidates = (req, res) => {
    const { jobDescription } = req.body;
    if (!jobDescription) {
        return res.status(400).json({ error: 'Job description is required for analysis' });
    }

    candidates = candidates.map(c => {
        const score = calculateScore(c.skills, c.experience, jobDescription);
        return {
            ...c,
            score: score,
            status: getRecommendation(score)
        };
    });

    const rankedCandidates = [...candidates].sort((a, b) => b.score - a.score);

    res.status(200).json({
        message: 'Analysis complete',
        candidates: rankedCandidates
    });
};

export const getCandidates = (req, res) => {
    res.status(200).json(candidates);
};
