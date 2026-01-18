// Global error handler middleware
const errorHandler = (err, req, res, next) => {
  // Log error stack for debugging
  console.error('Error Stack:', err.stack);

  // Set default error status and message
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Send error response
  res.status(statusCode).json({
    success: false,
    message: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

export default errorHandler;
