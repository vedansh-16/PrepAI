# PrepAI

### AI-Powered Interview Preparation Platform

PrepAI is a full-stack AI-powered interview preparation platform that analyzes a candidate's resume against a target job description and generates a personalized interview preparation strategy.

It identifies skill gaps, generates technical and behavioral interview questions, creates a preparation roadmap, and can generate an ATS-friendly version of the candidate's resume.

---

## Features

### Resume & Job Analysis
- Upload your resume in PDF format
- Add a target job description
- Provide a short self-description
- AI-powered resume-to-job matching
- Match score based on job requirements

### AI Interview Preparation
- Technical interview questions
- Behavioral interview questions
- Interviewer's intention behind each question
- Suggested approaches and answers
- Personalized skill-gap analysis
- Skill-gap severity classification

### Preparation Roadmap
- Day-wise preparation plan
- Topics to revise
- Coding practice recommendations
- CS fundamentals revision
- Mock interview preparation

### ATS-Friendly Resume
- Generate a job-tailored resume
- Optimize content for ATS parsing
- Generate a professional PDF
- Tailor resume content according to the target job description

### Authentication
- User registration
- Secure password hashing
- User login/logout
- JWT-based authentication
- Protected interview reports

### Interview History
- Save generated interview reports
- View previous reports
- Access reports associated with the logged-in user

---

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- CSS
- JavaScript

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- pdf-parse
- Puppeteer

### AI

- Google Gemini API

---

## Application Architecture

```text
                    PrepAI
                      │
          ┌───────────┴───────────┐
          │                       │
      Frontend                 Backend
      React/Vite            Node.js/Express
          │                       │
          │                 ┌─────┴─────┐
          │                 │           │
          │             MongoDB      Gemini AI
          │
          └────────── HTTP API ─────────┘