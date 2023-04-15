import { ObjectId } from "mongodb";

export interface Post {
  title: string;
  body: string;
  tags: string[];
  categories: string[];
  author: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}