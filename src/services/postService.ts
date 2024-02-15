import { Post, PrismaClient } from '@prisma/client';
import prisma from '../utils/prismaClientInitializer';

export const getAllPosts = async (): Promise<Post[]> => {
  return await prisma.post.findMany();
};

export const getPostById = async (id: number): Promise<Post|null> => {
  return await prisma.post.findUnique({
    where: { id },
  });
};

export const createPost = async (title: string, content: string): Promise<Post>  => {
  return await prisma.post.create({
    data: { title, content },
  });
};

export const updatePost = async (id: number, title: string, content: string): Promise<Post> => {
  return await prisma.post.update({
    where: { id },
    data: { title, content },
  });
};

export const deletePost = async (id: number): Promise<Post> => {
  return await prisma.post.delete({
    where: { id },
  });
};
