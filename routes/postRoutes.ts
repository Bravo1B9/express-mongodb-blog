import { Router } from "express";
import * as PostController from "../controllers/postController";

const router = Router();

router.post('/:authorId', PostController.createPost);
router.get('/', PostController.getAllPosts);

export default router;