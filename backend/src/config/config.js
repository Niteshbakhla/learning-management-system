import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const _config = {
  // Server configuration
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',

  // Database configuration
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/lms',

  // Add more environment variables as needed
  // Example:
  // JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  // JWT_EXPIRE: process.env.JWT_EXPIRE || '7d',
  // API_URL: process.env.API_URL || 'http://localhost:5000',
};

export default Object.freeze(_config);
