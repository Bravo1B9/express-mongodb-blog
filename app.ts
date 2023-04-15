import profileRoutes from "./routes/profileRoutes";
import postRoutes from "./routes/postRoutes";
import { Request, Response } from 'express';
import { connectDatabase } from './db';
import dotenv from 'dotenv';
const express = require('express');

dotenv.config();
connectDatabase();

const getHome = (req: Request, res: Response) => {
  res.status(200).json({ msg: 'Home route' });
};

const app = express();

app.use(express.json());

app.get('/api', getHome);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postRoutes);

export default app;