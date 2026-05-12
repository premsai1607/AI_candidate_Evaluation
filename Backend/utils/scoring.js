const normalize = (text) => {
    if (!text) return '';
    return text.toLowerCase().replace(/[\s\.\-\/_]/g, '');
};


const skillDefinitions = [
    { name: 'ReactJS', patterns: [/react(js|\s?js)?/i], points: 20 },
    { name: 'NodeJS', patterns: [/node(js|\s?js)?/i], points: 20 },
    { name: 'MongoDB', patterns: [/mongo(db|\s?db)?/i], points: 15 },
    { name: 'ExpressJS', patterns: [/express(js|\s?js)?/i], points: 15 },
    { name: 'TypeScript', patterns: [/typescript|ts/i], points: 10 },
    { name: 'JavaScript', patterns: [/javascript|js/i], points: 10 },
    { name: 'TailwindCSS', patterns: [/tailwind(css)?/i], points: 10 },
    { name: 'Python', patterns: [/python|py/i], points: 5 },
    { name: 'AWS', patterns: [/aws|amazon\s?web\s?services/i], points: 5 },
    { name: 'Docker', patterns: [/docker/i], points: 5 },
    { name: 'SQL', patterns: [/sql|mysql|postgresql/i], points: 10 }
];

export const calculateScore = (candidateSkills, experience, jobDescription) => {
    let score = 0;
    let matchCount = 0;


    const requiredSkills = skillDefinitions.filter(skill => {
        return skill.patterns.some(pattern => pattern.test(jobDescription));
    });


    const targetSkills = requiredSkills.length > 0 ? requiredSkills : skillDefinitions.slice(0, 5);


    const normalizedCandidateSkills = candidateSkills.map(s => normalize(s));

    targetSkills.forEach(req => {

        const hasSkill = normalizedCandidateSkills.some(candSkill => {
            return req.patterns.some(pattern => pattern.test(candSkill)) ||
                normalize(req.name).includes(candSkill) ||
                candSkill.includes(normalize(req.name));
        });

        if (hasSkill) {
            score += req.points;
            matchCount++;
        }
    });


    const exp = parseInt(experience) || 0;

    const expMatch = jobDescription.match(/(\d+)\+?\s?years?/i);
    const requiredExp = expMatch ? parseInt(expMatch[1]) : 3;

    if (exp >= requiredExp) {
        score += 25;
    } else if (exp >= requiredExp - 2) {
        score += 15;
    } else if (exp > 0) {
        score += 5;
    }


    if (targetSkills.length > 0 && matchCount / targetSkills.length >= 0.7) {
        score += 10;
    }

    return Math.min(score, 100);
};

export const getRecommendation = (score) => {
    if (score >= 80) return 'Recommended';
    if (score >= 50) return 'Average Match';
    return 'Rejected';
};
