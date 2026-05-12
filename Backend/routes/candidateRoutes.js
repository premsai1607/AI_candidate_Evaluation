import express from 'express';
import * as candidateController from '../controllers/candidateController.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// POST /api/candidates/upload-resume
router.post('/upload-resume', upload.array('resumes', 10), candidateController.uploadResumes);

// POST /api/candidates/analyze
router.post('/analyze', candidateController.analyzeCandidates);

// GET /api/candidates
router.get('/', candidateController.getCandidates);

export default router;
