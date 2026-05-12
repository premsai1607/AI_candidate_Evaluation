import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const candidateService = {
    uploadResumes: (formData) => {
        return api.post('/candidates/upload-resume', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    analyzeCandidates: (jobDescription) => {
        return api.post('/candidates/analyze', { jobDescription });
    },
    getCandidates: () => {
        return api.get('/candidates');
    },
};

export default api;