Notes App with JWT Authentication

A modern, responsive, and secure Notes App built with React for the frontend and a backend API using Node.js/Express (or any backend) with JWT authentication. This app allows multiple users to manage their personal notes, with login, registration, search, add, and delete functionalities.

Features

User Authentication: Login and registration with JWT token-based authentication.

Notes Management: Create, read, and delete notes.

Search & Filter: Easily search notes by title or content.

Responsive UI: Attractive glassmorphism design with responsive layout.

Secure Access: Only authenticated users can access their notes.

Logout: Securely log out and redirect to the login page.

Multi-User Support: Each user has their own set of notes.

Technologies Used

Frontend: React, React Router DOM, Axios, CSS (Glassmorphism style)

Backend: Node.js, Express (for the API), JWT for authentication

Database: MongoDB (or any preferred DB)

Others: LocalStorage for storing JWT token

Folder Structure
project/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Notes.jsx
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteItem.jsx
│   │   ├── api/
│   │   │   ├── api.js
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   └── index.css
│
├── backend/
│   ├── server.js (or index.js)
│   ├── routes/
│   │   ├── auth.js
│   │   └── notes.js
│   ├── models/
│   │   ├── User.js
│   │   └── Note.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── package.json
│   └── .env
│
└── README.md

Getting Started
1. Backend Setup

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Create a .env file and add:

PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>


Start the backend server:

npm start


The API should now be running on http://localhost:5000.

2. Frontend Setup

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the React development server:

npm run dev


The app should now be running on http://localhost:5173.

Usage

Register a New User
Go to /register to create a new account.

Login
Go to /login to log in. After successful login, you will be redirected to the notes page.

Add Notes
Use the Add Note form to add a new note.

Search Notes
Use the search input to filter notes by title/content.

Delete Notes
Click the Delete button on a note to remove it.

Logout
Click Logout in the navbar to end your session and return to the login page.


API Endpoints (Backend)
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login and receive JWT token
GET	/api/notes	Get all notes for logged-in user
POST	/api/notes	Add a new note
DELETE	/api/notes/:id	Delete a note by ID


Environment Variables
PORT – Port to run backend server
MONGO_URI – MongoDB connection string
JWT_SECRET – Secret key for signing JWT tokens