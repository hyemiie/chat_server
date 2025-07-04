# ⚙️ Tier Group Chat App (Backend)

A real-time chat application backend built with **Node.js**, **Express**, and **Socket.IO**.  
This server handles user authentication, room management, message storage, and real-time WebSocket communication.

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
cd chat_server
```
### 2. Install dependencies

```bash
npm install
```


###3. Environment Setup
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
