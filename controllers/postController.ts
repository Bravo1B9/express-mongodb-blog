import { Request, Response } from "express";
import { postCollection } from "../db";
import { ObjectId } from "mongodb";
import { Post } from "../models/postModel";

export const createPost = async (req: Request, res: Response) => {
  const post: Post = {
    title: req.body.title,
    body: req.body.body,
    tags: req.body.tags,
    catagories: req.body.catagories,
    author: new ObjectId(req.params.authorId),
    createdAt: new Date(),
    updatedAt: new Date()
  };
  await postCollection.insertOne(post);
  res.json({ msg: 'Post created' }).status(201);
};

export const getAllPosts = async (req: Request, res: Response) => {
  const allPosts = await postCollection.find().toArray();
  res.json(allPosts).status(200);
};