import { Router } from "express";
import * as ProfileController from "../controllers/profileController";

const router = Router();

router.post('/', ProfileController.createProfile);

export default router;