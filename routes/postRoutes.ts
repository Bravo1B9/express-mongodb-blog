import { Router } from "express";
import * as PostController from "../controllers/postController";

const router = Router();

router.post('/:authorId', PostController.createPost);
router.get('/', PostController.getAllPosts);
router.get('/:postId', PostController.getPostById);

export default router;