import express from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postController';
import { getCommentsByPostId, createComment } from '../controllers/commentController';
import { authorize } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

router.get('/:postId/comments', authorize("admin"), getCommentsByPostId);
router.post('/:postId/comments', createComment);

export default router;
