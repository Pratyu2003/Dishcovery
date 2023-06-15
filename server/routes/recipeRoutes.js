import express from "express";
import {
    homepage,
    register,
    login,
    AddNewCategory,
    exploreCategories,
    AddNewRecipe,
    getRecipe,
    getCategory,
    searchRecipe,
    exploreLatest,
    exploreRandom,
    submitRecipe,
    submitRecipeOnPost,
    deleteRecipe
} from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", homepage);

router.get("/register", register);

router.get("/login", login);

router.get("/categories/AddNewCategory", AddNewCategory);

router.get("/categories", exploreCategories);

router.post("/AddNewRecipe", AddNewRecipe);

router.get("/recipe/:id", getRecipe);

router.get("/categories/:id", getCategory);

router.post("/search", searchRecipe);

router.get("/explore-latest", exploreLatest);

router.get("/explore-random", exploreRandom);

router.get("/submit-recipe", submitRecipe);

router.post("/submit-recipe", submitRecipeOnPost);

router.delete("/recipe/:id", deleteRecipe);

export default router;