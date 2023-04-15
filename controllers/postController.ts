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
    updatedAt: new Date(),
  };
  await postCollection.insertOne(post);
  res.json({ msg: "Post created" }).status(201);
};

export const getAllPosts = async (req: Request, res: Response) => {
  const allPosts = await postCollection.find().toArray();
  res.json(allPosts).status(200);
};

export const getPostById = async (req: Request, res: Response) => {
  const post = await postCollection.findOne({
    _id: new ObjectId(req.params.postId),
  });
  res.json(post).status(200);
};

export const updatePostTitle = async (req: Request, res: Response) => {
  const { title, body, tags, categories } = req.body;
  await postCollection.updateOne(
    { _id: new ObjectId(req.params.postId) },
    { $set: { title, body, tags, categories } }
  );
  res
    .json({
      msg: `Post ${req.params.postId} title updated`,
    })
    .status(200);
};
