# AI-Powered Candidate Evaluation Platform 

A modern, full-stack recruitment tool designed to streamline the hiring process. This platform allows recruiters to upload multiple resumes, input job descriptions, and leverage an AI-driven simulation to rank candidates based on their skills and experience.

---

##  Key Features

-   **Resume Upload System**: Bulk upload resumes with support for PDF, DOC, and DOCX formats.
-   **Intelligent Score Simulation**: Simulated AI parsing that extracts skills from filenames and generates profile data.
-   **JD Matching**: Analyze candidates against specific Job Descriptions using a weighted scoring algorithm.
-   **Dynamic Ranking**: Automatically rank candidates from "Recommended" to "Rejected" based on match percentage.
-   **Professional Dashboard**: Responsive UI with search, status filtering, and detailed candidate modals.
  

---

## Tech Stack

### Frontend
-   **ReactJS (v19)**: Functional components with Hooks.
-   **Tailwind CSS**: Utility-first styling with custom glassmorphism components.
-   **Axios**: Promise-based HTTP client for API communication.
-   **React Router**: SPA navigation and protected routing.

### Backend
-   **Node.js & Express.js**: High-performance RESTful API.
-   **Multer**: Specialized middleware for handling multipart/form-data (file uploads).
-   **CORS**: Cross-Origin Resource Sharing enabled for frontend integration.

---

##  Project Structure

```text
Ai-resume-analsyer/
├── Frontend/           # React + Vite application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Dashboard and Login views
│   │   ├── services/   # API service layer
│   │   └── styles/     # Tailwind and global CSS
├── Backend/            # Node.js + Express server
│   ├── controllers/    # Business logic & scoring
│   ├── routes/         # API endpoint definitions
│   ├── middleware/     # Multer & validation logic
│   ├── utils/          # Scoring algorithms
│   └── uploads/        # Local storage for resumes
└── README.md           # Project documentation
```

---

## Getting Started

### Prerequisites
-   Node.js (v18 or higher)
-   npm or yarn

### 1. Backend Setup
```bash
cd Backend
npm install
# Start the server (runs on http://localhost:5000)
nodemon index.js
```

### 2. Frontend Setup
```bash
cd Frontend
npm install
# Start the development server
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/candidates/upload-resume` | Upload multiple PDF/DOCX files |
| `POST` | `/api/candidates/analyze` | Calculate scores against a Job Description |
| `GET` | `/api/candidates` | Retrieve all processed candidates |
| `GET` | `/api/health` | Check API server status |

---

##  Additional Notes

-   **Database**: This project uses **In-Memory Storage** for demonstration purposes. Data will reset on server restart.
-   **AI Parsing**: Resume content parsing is **simulated**. Skills are derived from filenames and metadata to demonstrate the scoring logic.
-   **Responsiveness**: The dashboard is fully optimized for Mobile, Tablet, and Desktop views.



