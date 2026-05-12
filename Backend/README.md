# AI-Powered Candidate Evaluation - Backend 

The backend engine for the Candidate Evaluation Platform. Built with **Node.js** and **Express**, it handles file processing, candidate data management, and the scoring algorithm.

## Backend Overview

This server provides a RESTful API to manage resumes and perform match analysis. It uses a custom-built scoring engine to evaluate candidates against provided job requirements.

## Tech Stack

-   **Runtime**: Node.js
-   **Framework**: Express.js
-   **File Handling**: Multer
-   **Cross-Origin**: CORS
-   **Data Persistence**: In-Memory (No database required for demo)

##  API Reference

### Candidate Management
-   `POST /api/candidates/upload-resume`
    -   **Body**: `multipart/form-data`
    -   **Field**: `resumes` (Multiple files)
    -   **Returns**: List of newly created candidate objects.
-   `POST /api/candidates/analyze`
    -   **Body**: `{ "jobDescription": "string" }`
    -   **Returns**: Ranked list of candidates with updated scores and status.
-   `GET /api/candidates`
    -   **Returns**: Current list of all candidates in memory.

### System
-   `GET /api/health`
    -   **Returns**: Server status and timestamp.

## Logic & Implementation

### 1. File Upload Handling (Multer)
Located in `middleware/uploadMiddleware.js`, the system:
-   Restricts files to **PDF, DOC, and DOCX**.
-   Enforces a **5MB limit** per file.
-   Stores files locally in the `/uploads` directory.

### 2. AI Scoring Logic (Simulated)
The scoring engine in `utils/scoring.js` calculates a match percentage (0-100) based on:
-   **Skill Matching**: Checks candidate skills against keywords in the Job Description.
-   **Experience Check**: Compares candidate years of experience against the JD requirements.
-   **Normalization**: Handles case-insensitive matching and keyword variations.

### 3. In-Memory Storage
Candidates are stored in a global array within the `candidateController.js`. 
> **Note**: This means all data is volatile and will be cleared when the server is restarted. This is ideal for quick testing and reviewer evaluations.

##  Run Instructions

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Server**:
    ```bash
    nodemon index.js
    ```
    The server will start on `http://localhost:5000`.

##  Environment Variables
Create a `.env` file in the root if you wish to override defaults (Optional):
```env
PORT=5000
NODE_ENV=development
```
