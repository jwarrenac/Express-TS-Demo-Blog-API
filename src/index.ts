import express from 'express';
import 'dotenv/config'; // Load environment variables from .env file
import postRoutes from './routes/posts';
import commentRoutes from './routes/comments';
import { userMiddleware } from './middleware/userMiddleware';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

app.use(express.json()); // Middleware to parse JSON bodies
app.use(userMiddleware);

// Register your routes
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
