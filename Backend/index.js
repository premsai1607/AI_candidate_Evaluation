import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import candidateRoutes from "./routes/candidateRoutes.js";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ==========================
// Middleware
// ==========================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Debug Middleware
app.use((req, res, next) => {
    console.log(`📨 ${req.method} ${req.originalUrl}`);

    if (req.method === "POST" || req.method === "PUT") {
        console.log("Request Body:", req.body);
    }

    next();
});

// ==========================
// Static Files
// ==========================

// Uploads Folder
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);

// React Build Folder
app.use(express.static(path.join(__dirname, "build")));

// ==========================
// Health Check APIs
// ==========================

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "AI Candidate Evaluation Platform API is running",
        timestamp: new Date().toISOString(),
    });
});

app.get("/api", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to AI Candidate Evaluation Platform API",
    });
});

// ==========================
// API Routes
// ==========================

app.use("/api/candidates", candidateRoutes);

// ==========================
// 404 API Handler
// ==========================

app.use("/api", (req, res) => {
    res.status(404).json({
        success: false,
        message: "API Route Not Found",
    });
});

// ==========================
// React Frontend Support
// ==========================

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ==========================
// Global Error Handler
// ==========================

app.use((err, req, res, next) => {
    console.error("💥 Global Error:", err);

    if (req.path.startsWith("/api")) {
        return res.status(500).json({
            success: false,
            message: err.message || "Internal Server Error",
        });
    }

    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ==========================
// Start Server
// ==========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📁 Current Directory: ${__dirname}`);
});