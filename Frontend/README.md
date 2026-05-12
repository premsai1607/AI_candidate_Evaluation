# AI-Powered Candidate Evaluation - Frontend

This is the frontend implementation of the Candidate Evaluation Platform, built with **React** and **Tailwind CSS**. It provides a premium, responsive dashboard for recruiters to manage talent acquisition efficiently.

## Tech Stack

-   **Framework**: React 19 + Vite
-   **Styling**: Tailwind CSS (PostCSS)
-   **Icons**: React Icons
-   **State Management**: React Hooks (useState, useEffect)
-   **HTTP Client**: Axios

## Folder Structure

```text
src/
├── components/
│   ├── CandidateModal.jsx    # Detail view popup
│   ├── CandidateTable.jsx    # Main ranking list
│   ├── JobDescription.jsx    # JD input component
│   ├── JobDescriptionBox.jsx # JD display container
│   ├── Loader.jsx            # Loading states
│   ├── Navbar.jsx            # Top navigation
│   ├── ResumeUpload.jsx      # File upload logic
│   ├── ScoreBadge.jsx        # Visual match indicator
│   └── SearchFilter.jsx      # Table search and filtering
├── data/
│   └── mockCandidates.js     # Client-side mock data
├── pages/
│   ├── Dashboard.jsx         # Primary application view
│   └── Login.jsx             # Authentication interface
├── services/
│   └── api.js                # Axios configuration & services
├── styles/
│   └── index.css             # Tailwind layers & custom tokens
└── App.jsx                   # Routing & Core Layout
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`
Builds the app for production to the `dist` folder.

### `npm run lint`
Runs ESLint to find and fix problems in the codebase.

## Responsive Design
The UI is built with a **Mobile-First** approach:
-   **Desktop**: Multi-column layout for JD input and Uploads.
-   **Tablet**: Condensed table views and stacked controls.
-   **Mobile**: Single-column layout with optimized touch targets and accessible navigation.

## Configuration
The frontend connects to the backend via `src/services/api.js`. 
-   **Local API**: `http://localhost:5000/api`
-   **Production API**: Configured via the `API_BASE_URL` constant.

---
**Note**: This frontend expects the backend server to be running on port 5000 for local development.
