# 🌱 MoodGarden

MoodGarden is a peaceful journaling web app that lets users log their moods, write reflections, and watch their emotional garden grow 🌸. It’s built with a focus on calm UI, mood tracking, and Firebase-powered storage.

---

## 🧠 Why It Was Built

This project was designed as a front-end and cloud integration showcase — connecting creativity, mental wellness, and technical skill. It's part of my personal portfolio and learning journey with React and Firestore.

---

## ⚙️ Tech Stack

**Frontend**  
- React (Vite)  
- Tailwind CSS  
- Custom components for EntryForm and MoodTracker

**Backend**  
- Node.js + Express  
- Firebase Admin SDK  
- Firestore Database

**Deployment**  
- Vercel (Frontend)  
- Render.com or Railway (Backend – or `localhost:3001` during local testing)

---

## 🚀 Features

- Add journal entries with a title, mood, and description  
- Save entries to Firestore with timestamps  
- View all past entries  
- Organized, component-based architecture  
- Styled clean UI with optional future animations

---

## 📦 How to Run It Locally

1. Clone the repo and navigate into both `client` and `server` folders.
2. In `/server`, add your Firebase Admin SDK key as `firebaseKey.json`.
3. Enable Firestore API on your Firebase project.
4. Run server:
   ```bash
   cd server
   npm install
   node index.js
