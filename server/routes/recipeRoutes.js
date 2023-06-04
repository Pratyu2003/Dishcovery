import express from "express";
import { homepage } from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", homepage);


export default router;