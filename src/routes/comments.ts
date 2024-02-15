import express from 'express';
import {
  updateComment,
  deleteComment,
} from '../controllers/commentController';

const router = express.Router();

router.put('/:commentId', updateComment);
router.delete('/:commentId', deleteComment);

export default router;
