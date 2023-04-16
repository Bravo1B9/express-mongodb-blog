import { Request, Response } from "express";
import { postCollection } from "../db";
import { ObjectId } from "mongodb";
import { Post } from "../models/postModel";

export const createPost = async (req: Request, res: Response) => {
  const post: Post = {
    title: req.body.title,
    body: req.body.body,
    tags: req.body.tags,
    categories: req.body.categories,
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

  if(!post) {
    res.status(404).json({ msg: 'Post not found' });
  } else {
    res.json(post).status(200);
  }

};

export const updatePost = async (req: Request, res: Response) => {
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

export const deletePost = async (req: Request, res: Response) => {
  await postCollection.deleteOne({ _id: new ObjectId(req.params.postId) });
  res.json({ msg: `Post ${req.params.postId} deleted` });
};
