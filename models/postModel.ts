import { ObjectId } from "mongodb";

export interface Post {
  title: string;
  body: string;
  tags: string[];
  catagories: string[];
  author: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}