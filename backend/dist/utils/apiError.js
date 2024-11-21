"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = exports.ApiError = void 0;
class ApiError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
exports.ApiError = ApiError;
const handleErrors = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ error: message });
};
exports.handleErrors = handleErrors;
