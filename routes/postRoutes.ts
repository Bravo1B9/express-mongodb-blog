import { Router } from "express";
import * as PostController from "../controllers/postController";

const router = Router();

router.post('/', PostController.createPost);

export default router;