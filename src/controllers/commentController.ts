import { Request, Response } from 'express';
import * as commentService from '../services/commentService';
import { asyncHandler } from '../utils/asyncHandler';

export const getCommentsByPostId = asyncHandler(async (req: Request, res: Response) => {
  const { postId } = req.params;
  const comments = await commentService.getCommentsByPostId(Number(postId));
  res.json(comments);
});

export const createComment = asyncHandler(async (req: Request, res: Response) => {
  const { postId } = req.params;
  const { content } = req.body;
  const newComment = await commentService.createComment(Number(postId), content);
  res.status(201).json(newComment);
});

export const updateComment = asyncHandler(async (req: Request, res: Response) => {
  const { commentId } = req.params;
  const { content } = req.body;
  const updatedComment = await commentService.updateComment(Number(commentId), content);
  res.json(updatedComment);
});

export const deleteComment = asyncHandler(async (req: Request, res: Response) => {
  const { commentId } = req.params;
  await commentService.deleteComment(Number(commentId));
  res.status(204).send();
});
