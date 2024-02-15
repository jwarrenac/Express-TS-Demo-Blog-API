"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config"); // Load environment variables from .env file
const posts_1 = __importDefault(require("./routes/posts"));
const comments_1 = __importDefault(require("./routes/comments"));
const userMiddleware_1 = require("./middleware/userMiddleware");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000
app.use(express_1.default.json()); // Middleware to parse JSON bodies
app.use(userMiddleware_1.userMiddleware);
// Register your routes
app.use('/posts', posts_1.default);
app.use('/comments', comments_1.default);
// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
