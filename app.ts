import { Request, Response } from 'express';
import dotenv from 'dotenv';
const express = require('express');

dotenv.config();

const getHome = (req: Request, res: Response) => {
  res.status(200).json({ msg: 'Home route' });
};

const app = express();

app.use(express.json());

app.get('/api', getHome);

export default app;