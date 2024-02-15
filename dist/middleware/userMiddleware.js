"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jwtUtils_1 = require("../utils/jwtUtils");
const userMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1]; // Assuming the token is sent as a Bearer token
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = (0, jwtUtils_1.decodeJWT)(token);
        // This assigns the decoded user object to the request object
        // so that it can be accessed in other route handlers
        req.user = {
            sub: decoded.sub,
            name: decoded.name,
            roles: decoded.roles,
        };
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
exports.userMiddleware = userMiddleware;
