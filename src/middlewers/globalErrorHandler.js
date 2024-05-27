import Envconfig from "../config/config.js";

const globalErrorHandler = (err, req, res, next) => {
    // Check if headers are already sent
    if (res.headersSent) {
        return next(err);
    }

    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        Message: err.message || 'Internal Server Error',
        errorStack: Envconfig.environment === "development" ? err.stack : err.message,
    });
};

export default globalErrorHandler;
