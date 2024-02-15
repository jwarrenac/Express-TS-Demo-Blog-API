// src/controllers/postController.ts
import { Request, Response } from 'express';
import * as postService from '../services/postService';
import { asyncHandler } from '../utils/asyncHandler';

export const getAllPosts = asyncHandler(async (req: Request, res: Response) => {
  const posts = await postService.getAllPosts();
  res.json(posts);
});

export const getPostById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await postService.getPostById(Number(id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

export const createPost = asyncHandler(async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const newPost = await postService.createPost(title, content);
  res.status(201).json(newPost);
});

export const updatePost = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updatedPost = await postService.updatePost(Number(id), title, content);
  res.json(updatedPost);
});

export const deletePost = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  await postService.deletePost(Number(id));
  res.status(204).send();
});
