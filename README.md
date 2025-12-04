🏋️‍♂️ Gym Website – Full Stack Web Application

A modern fitness and membership management platform built using React, TypeScript, Node.js, Express & MongoDB.

🌟 Tech Stack
Frontend

React + TypeScript

Vite

TailwindCSS + Shadcn UI

React Router

Lucide Icons

Context API

Sonner Notifications

Backend

Node.js + Express

MongoDB + Mongoose

JWT Authentication

Multer (File Uploads)

Cloudinary (Image Storage)

REST API Architecture

🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/diplomat2805/Gym-Website.git
cd Gym-Website

2️⃣ Install Frontend Dependencies
npm install

3️⃣ Install Backend Dependencies
cd backend
npm install

4️⃣ Configure Environment Variables (Backend)

Create a file:

backend/.env


Add the following:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

▶️ Running the Project
🔥 Start Backend
cd backend
node server.js


Backend will run at:
👉 http://localhost:5000

🔥 Start Frontend
cd ..
npm run dev


Frontend will run at:
👉 http://localhost:5173

📁 Project Structure
Gym-Website/
 ├── src/                   # Frontend
 │    ├── components/
 │    ├── pages/
 │    ├── context/
 │    ├── data/
 │    ├── styles/
 │
 ├── backend/               # Backend API
 │    ├── controllers/
 │    ├── models/
 │    ├── routes/
 │    ├── middlewares/
 │    ├── config/
 │    └── uploads/
 │
 ├── package.json
 ├── vite.config.ts
 ├── index.html
 └── README.md

🔐 API Base URL

Default:

http://localhost:5000/api

👥 Contribution Guidelines (Team Workflow)
✔ 1. Always pull latest changes
git pull

✔ 2. Create a feature branch
git checkout -b feature/<feature-name>

✔ 3. Commit your work
git add .
git commit -m "Added <feature>"

✔ 4. Push the branch
git push origin feature/<feature-name>

✔ 5. Create a Pull Request

Team will review → merge to main

📝 Notes for the Team

❌ Do NOT upload node_modules

❌ Do NOT upload .env files

✔ Run npm install after every fresh pull

✔ Work only on feature branches

❌ Never commit directly to main

🚀 Deployment Options
Frontend

Vercel

Netlify

Backend

Render

Railway

VPS / AWS / DigitalOcean

Database

MongoDB Atlas


❤️ Thank You!

If you like this project:

⭐ Star the repo
📢 Share and contribute
