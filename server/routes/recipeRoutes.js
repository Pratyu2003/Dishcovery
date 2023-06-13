import express from "express";
import {
    homepage,
    AddNewCategory,
    exploreCategories,
    AddNewRecipe,
    getRecipe,
    getCategory,
    searchRecipe,
    exploreLatest,
    exploreRandom,
    submitRecipe,
    submitRecipeOnPost
} from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", homepage);

router.post("/AddNewCategory", AddNewCategory);

router.get("/categories", exploreCategories);

router.post("/AddNewRecipe", AddNewRecipe);

router.get("/recipe/:id", getRecipe);

router.get("/categories/:id", getCategory);

router.post("/search", searchRecipe);

router.get("/explore-latest", exploreLatest);

router.get("/explore-random", exploreRandom);

router.get("/submit-recipe", submitRecipe);

router.post("/submit-recipe", submitRecipeOnPost);

export default router;