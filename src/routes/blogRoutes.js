import { Router } from "express";
import {
    createBlog,
    deleteBlog,
    editBlog,
    getBlogs,
} from "../controllers/blogController.js";

const router = Router();

router.post("/", createBlog);
router.get("/", getBlogs);
router.put("/:id", editBlog);
router.delete("/:id", deleteBlog);

export default router;
