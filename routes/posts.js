import express from "express"; 
import { getPosts } from "../controllers/posts.js"
// Express Router kullanılacak
const router = express.Router();

// http//localHost:5000/posts

//GET
router.get("/",getPosts); // Controller çağırır.

// Exporting
export default router;