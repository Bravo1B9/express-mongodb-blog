import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.MONGODB_URI || '';

let db;
export let postCollection: any;
export let profileCollection: any;

export const connectDatabase = async () => {
  try {
    const client = await MongoClient.connect(url);
    db = client.db('blog');
    postCollection = db.collection('posts');
    profileCollection = db.collection('profiles');
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
  }
};
