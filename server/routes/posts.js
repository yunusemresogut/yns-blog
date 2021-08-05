import express from "express";
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

// GET - POST - DELETE - UPDATE - PATCH

router.get("/", getPosts); // getPosts controller, "/" posts routera bağlanır

export default router;
