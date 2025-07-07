# ⚙️ Chattr Group Chat App (Backend)

This is the backend server for the Chattr team chat app. It runs on Node.js, Express, and Socket.IO, and powers the frontend by handling everything from authentication and room management to chat storage and real-time WebSocket communication

---

## ✨ Features

- 🔐 **User Authentication** – JWT-based secure login and registration  
- 💬 **Real-Time Messaging** – WebSocket communication using Socket.IO  
- 🧩 **Room Management** – Create, join, and manage chat rooms  
- 📜 **Message Persistence** – Store and retrieve chat history with MongoDB  
- 🔒 **Password Security** – Bcrypt encryption for user passwords  
- 🌐 **CORS Support** – Cross-origin resource sharing enabled  

---

## 🛠️ Tech Stack

- **Runtime**: Node.js  
- **Framework**: Express.js  
- **Database**: MongoDB (with Mongoose ODM)  
- **WebSocket**: Socket.IO  
- **Authentication**: JWT (JSON Web Tokens)  
- **Environment Config**: dotenv  

---

## 📦 Prerequisites

Make sure the following are installed:

- **Node.js** (v16 or higher)  
- **MongoDB** (v4.4+):  
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud hosting  
- **Git**  
- **npm** or **yarn**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hyemiie/chat_server
```
### 2. Install dependencies

```bash
npm install
```


### 3. Environment Setup
Create a .env file in the root directory with the following contents:
```bash

# MongoDB connection
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/chat-app

# JWT secret key
JWT_SECRET=your-super-secret-jwt-key-here

# Server config
PORT=5000
NODE_ENV=development

```

### 4. Start the server
- Development mode (with auto-restart via nodemon)
```bash
npm run dev
```

- Production mode
```bash
npm start
```

### 5.Check if it's working:
Open your browser and go to `http://localhost:5000`
You should see a message confirming the server is running.



## 🔌 API Endpoints

### Authentication
- POST /register - Register a new user
- POST /login - User login
- GET /getCurrentUser - Get current user info

### Teams
- GET /getAllTeams - Get all available teams
- POST /addTeam - Create a new team
- GET /teamChat - Get team chat messages
- POST /addChat - Send message to team chat
- DELETE /delete - Delete a chat message

### Team Errors/Issues
- GET /teamErrors - Get team error
- POST /addTeamError - Report a team error/issue

### Users
- GET /allUsers - Get all users in the system

---


## 🤝 Connect
This backend API powers the Tier Group Chat application and was built with scalability and reliability in mind. I'm always open to feedback and suggestions.

GitHub: [@hyemiie](https://github.com/hyemiie)  
Frontend Repository: [chat-app-frontend](https://github.com/hyemiie/chatApplication)  
Email: yemiojedapo1@gmail.com

