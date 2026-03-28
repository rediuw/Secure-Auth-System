# Secure Authentication System

## Project Description
This project is a **Secure Authentication System** built for the Selected Topics in Software Engineering course.  
The system includes user registration, login, role-based access control, and secure authentication using **Node.js**, **Express**, **React**, **MongoDB**, and **JWT**. OAuth login integration is optional.  

## Features
- User registration and login
- Role-based access control (Admin/User)
- Secure authentication using JWT tokens
- Protected backend routes
- Basic frontend interface with React
- Optional: OAuth login (Google)

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Optional OAuth:** Google OAuth 2.0



# Authentication API (Backend)

This backend provides basic authentication routes for registering and logging in users.  

Base URL: `http://localhost:5000/api/auth`

---

## Register User

**Endpoint:**
```
POST /register
```

**Request Body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```
**Response (201 Created):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456",
    "role": "user",
    "created_at": "2026-03-28T12:54:43.795Z"
  }
}
```

---

## Login User

**Endpoint:**
```
POST /login
```

**Request Body (JSON):**
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

**Response (200 OK):**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456",
    "role": "user",
    "created_at": "2026-03-28T12:54:43.795Z"
  }
}
