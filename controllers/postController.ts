import { Request, Response } from "express";
import { postCollection } from "../db";

export const createPost = async (req: Request, res: Response) => {
  const post = req.body;
  await postCollection.insertOne(post);
  res.json({ msg: 'Post created' }).status(201);
};