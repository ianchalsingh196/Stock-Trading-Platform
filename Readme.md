# 📈 Zerodha Clone - Full Stack Stock Trading Platform

A comprehensive full-stack Zerodha clone application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform features real-time stock monitoring, portfolio tracking, order placement management, interactive charts, and seamless interaction between a landing page and user trading dashboard.

---

## 🌐 Live Demo & Services

* **Landing Page:** [https://stock-trading-platform-4c79.vercel.app](https://stock-trading-platform-4c79.vercel.app/)
* **Dashboard App:** [https://stock-trading-platform-kohl-seven.vercel.app](https://stock-trading-platform-kohl-seven.vercel.app/)
* **Backend API:** [https://stock-trading-platform-w1en.onrender.com](https://stock-trading-platform-w1en.onrender.com)

---

## ✨ Features

- **User Authentication:** Secure signup/login and session management using JWT.
- **Interactive Dashboard:** Real-time stock watchlist, portfolio overview, and orders tracker.
- **Buy / Sell Orders:** Ability to place buy and sell stock orders with dynamic database updates.
- **Interactive Charts:** Financial performance and price tracking using Chart.js / MUI components.
- **Responsive Landing Page:** Fully customizable product showcase page directing users to login/signup and trading dashboard.

---

## 🛠️ Tech Stack & Architecture

### **Frontend (Vercel)**
- **Framework:** React.js, HTML5, CSS3, JavaScript (ES6+)
- **UI Libraries:** Material-UI (MUI), FontAwesome
- **Charts:** Chart.js / React-Chartjs-2
- **Hosting:** Vercel

### **Backend (Render)**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose ORM)
- **Authentication:** JSON Web Tokens (JWT), Bcrypt.js
- **CORS Management:** Configured for production domains
- **Hosting:** Render

---

## 📁 Repository Structure

```text
Stock-Trading-Platform/
├── backend/            # Express Server, Routes, Models & DB Config
├── dashboard/          # React App for Trading Dashboard
└── frontend/           # React App for Landing Page & Authentication

⚙️ Environment Variables Setup
1. Backend (/backend/.env)
PORT=3002
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key

2. Dashboard (/dashboard/.env)
REACT_APP_API_URL=[https://stock-trading-platform-w1en.onrender.com](https://stock-trading-platform-w1en.onrender.com)
CI=false

3. Frontend (/frontend/.env)

REACT_APP_API_URL=[https://stock-trading-platform-w1en.onrender.com](https://stock-trading-platform-w1en.onrender.com)
REACT_APP_DASHBOARD_URL=[https://stock-trading-platform-kohl-seven.vercel.app](https://stock-trading-platform-kohl-seven.vercel.app)
CI=false

🚀 Local Development Setup
Prerequisites
Node.js (v16 or higher)
npm or yarn
MongoDB Atlas Account

Steps to Run Locally
Clone Repository:
git clone [https://github.com/ianchalsingh196/Stock-Trading-Platform.git](https://github.com/ianchalsingh196/Stock-Trading-Platform.git)
cd Stock-Trading-Platform

Backend Setup:
cd backend
npm install
npm 

Dashboard Setup:
cd ../dashboard
npm install
npm start

Frontend Setup:
cd ../frontend
npm install
npm start