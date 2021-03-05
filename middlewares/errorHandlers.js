"use strict";

function errorHandler(err, req, res, next) {
    let message = err.message || "Internal Server Error";
    let statusCode = err.respone || 500;

    if (err.name === "Bad Request") {
        message = err.message;
        statusCode = err.status;
    } else if (err.name === "SequelizeValidationError") {
        statusCode = 400;
        message = err.message;
    } else if (err.name === "SequelizeUniqueConstraintError" && err.parent.constraint === 'Users_username_key') {
        message = "Username already exists";
        statusCode = 400;
    } else if (err.name === "SequelizeUniqueConstraintError" && err.parent.constraint === 'Vendors_name_key') {
        message = "Vendor already exists";
        statusCode = 400;
    } else if (err.name === "tagNotAvailable") {
        statusCode = 400;
        message = "Tag not available";
    } else if (err.name === "VendorNotFound") {
        message = "Vendor not found"
        statusCode = 404
    } else if (err.name === "userNotFound") {
        message = "User not found"
        statusCode = 404
    }
    res.status(statusCode).json({ message: message });
}

module.exports = errorHandler;
