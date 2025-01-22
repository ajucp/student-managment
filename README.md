# **Student Management System API**

## **Description**
The **Student Management System API** is a backend application built with Node.js and Express.js, providing features for managing students and their tasks. It includes separate interfaces for the admin and students.

---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (using native MongoDB queries)
- **Authentication**: JSON Web Tokens (JWT)
- **API Documentation**: Postman

---


## Features

### Admin Panel
- Log in using predefined credentials (`admin@admin.com`, `admin`).
- Add students with details such as name, email, department, and password.
- Assign tasks to students with a specific due time.

### Student Interface
- Log in using email and password.
- View assigned tasks with their status (`pending`, `overdue`, `completed`).
- Update task status to `completed`.

---

## Installation

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/ajucp/student-managment.git

 **Navigate to the project folder:**


- **Backend:**
  ```bash
  cd cd student-managment

**Install dependencies:**

```bash
npm install
```

**Configure environment variables:**

- **Backend**: Add `.env`.  

---
**Set up the .env file with the following variables:**

```bash
JWT_SECRET_TOKEN=your_jwt_secret_key_here
```

**Start the servers:**


- **Backend:**
  ```bash
  npm start

**Visit the application:**

Access the app at http://localhost:3000.

**Usage:**

- **Base URL:**
  ```bash
  http://localhost:3000/v1/api

- **Endpoints**
**Admin Panel**

1. **Admin Login:**


**POST /admin/login**

  **Request Body:**
  ```bash
  {
  "email": "admin@admin.com",
  "password": "admin"
}

```
2. **Add Student**


**POST /admin/add-student**

  **Request Body:**
  ```bash
  {
  "name": "John Doe",
  "email": "johndoe@example.com",
  "department": "Computer Science",
  "password": "password123"
}

```

3. **Assign Task:**


**POST /admin/assign-task**

  **Request Body:**
  ```bash
  {
  "studentId": "63f8c5f8f8c5f8f8c5f8c5f8",
  "task": "Complete Assignment",
  "dueDate": "2025-01-25T18:00:00.000Z"
}

```

**Student Interface**

1. **Student Login:**


**POST /student/login**

  **Request Body:**
  ```bash
  {
  "email": "johndoe@example.com",
  "password": "password123"
}


```
2. **View Tasks**


**GET /student/tasks**

 

3. **Update Task Status:**


**PATCH /student/task/status**

  **Request Body:**
  ```bash
  {
  "status": "completed"
}
```

- **Project Structure:**
```bash
  student-managment/
├── controllers/
│   ├── adminC.js
│   ├── studentC.js
├── services/
│   ├── adminS.js
│   ├── studentS.js
├── models/
│   ├── studentM.js
│   ├── taskM.js
├── routes/
│   ├── adminRoutes.js
│   ├── studentRoutes.js
│   ├── authRoutes.js
├── config/
│   ├── db.js
├── middleware/
│   ├── authMiddleware.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── app.js

```