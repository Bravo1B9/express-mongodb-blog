import { Request, Response } from "express";

export const createPost = async (req: Request, res: Response) => {
  res.json({ msg: 'Create a post' }).status(201);
};