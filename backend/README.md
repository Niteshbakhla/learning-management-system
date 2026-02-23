# Learning Management System (LMS) - Backend

Welcome to the backend documentation for the Learning Management System (LMS). This project provides the API and server-side logic for the LMS platform.

## 🚀 Technologies Used

- **Runtime Environment**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (using [Mongoose](https://mongoosejs.com/))
- **Authentication/Services**: [Firebase Admin](https://firebase.google.com/)
- **Utilities**: `dotenv` (Environment variables), `cors` (Cross-Origin Resource Sharing)

## 📂 Project Structure

The project follows a modular structure to keep code organized and maintainable:

```
backend/
├── config/             # Configuration files
├── src/
│   ├── config/         # App-specific configurations
│   ├── controllers/    # Request handlers (Controller logic)
│   ├── middleware/     # Express middleware (Auth, Validation, etc.)
│   ├── models/         # Database schemas and models
│   ├── routes/         # API Route definitions
│   ├── services/       # Business logic layer
│   └── utils/          # Helper functions and utilities
├── .env                # Environment variables (Sensitive)
├── server.js           # Application entry point
└── app.js              # Express app setup
```

## 🛠️ Getting Started

Follow these steps to set up and run the project locally.

### 1. Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (Local or Cloud instance)

### 2. Installation

Clone the repository and install the dependencies:

```bash
cd backend
npm install
```

### 3. Configuration

Create a `.env` file in the root `backend/` directory and configure the necessary environment variables. Example keys might include:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
FIREBASE_CREDENTIALS=...
```

*(Note: Refer to the project team for the specific required variables)*

### 4. Running the Application

This project includes scripts for development and production-like environments.

- **Development Mode** (with Hot Reloading):
  Use this for development specific tasks. It uses `nodemon` to restart the server on file changes.
  ```bash
  npm start
  ```

- **Standard Run Mode**:
  Runs the server using standard `node`.
  ```bash
  npm run dev
  ```

The server usually starts on `http://localhost:3000` (or the PORT defined in your `.env` file).

## 📡 API Endpoints

The API routes are defined in `src/routes/`. Common endpoints generally include:

- `/api/users`: User management
- `/api/progress`: Tracking tracking
- *(Check `src/routes/index.js` for the full map of registered routes)*

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
