import { Profile } from "../models/profileModel";
import { Request, Response } from "express";
import { profileCollection } from "../db";

export const createProfile = async (req: Request, res: Response) => {
  const newProfile: Profile = {
    username: req.body.username,
    bio: req.body.bio,
    joinedAt: new Date()
  };
  profileCollection.insertOne(newProfile);
  res.json({ msg: 'New profile created' }).status(201);
};