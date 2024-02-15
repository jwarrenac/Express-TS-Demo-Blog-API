import { Comment } from '@prisma/client';
import prisma from '../utils/prismaClientInitializer';

export const getCommentsByPostId = async (postId: number): Promise<Comment[]> => {
  return await prisma.comment.findMany({
    where: { postId },
  });
};

export const createComment = async (postId: number, content: string): Promise<Comment> => {
  return await prisma.comment.create({
    data: { postId, content },
  });
};

export const updateComment = async (commentId: number, content: string): Promise<Comment> => {
  return await prisma.comment.update({
    where: { id: commentId },
    data: { content },
  });
};

export const deleteComment = async (commentId: number): Promise<Comment> => {
  return await prisma.comment.delete({
    where: { id: commentId },
  });
};
