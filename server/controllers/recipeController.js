import {
    Category
} from "../models/category.js";
import {
    Recipes
} from "../models/recipe.js";
import path from "path";

export const homepage = async (req, res, next) => {

    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipes.find({}).sort({
            _id: -1
        }).limit(limitNumber);
        const latest_American = await Recipes.find({
            'category': 'American'
        }).limit(limitNumber);
        const latest_Indian = await Recipes.find({
            'category': 'Indian'
        }).limit(limitNumber);
        const food = {
            latest,
            latest_American,
            latest_Indian
        };

        res.render("index.ejs", {
            title: "Homepage",
            categories,
            food
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "some error occured"
        });
    }

};

export const register = async (req, res, next) => {
res.render("register.ejs");
};


export const login = async (req, res, next) => {
    res.render("login.ejs");
    };


export const AddNewCategory = async (req, res) => {

    const {
        name,
        image
    } = req.body;

    await Category.create({
        name,
        image,
    });

    res.json({
        success: true,
        message: "Category Added Successfully",
    });
};


export const exploreCategories = async (req, res, next) => {

    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);

        res.render("categories.ejs", {
            title: "Categories",
            categories
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "some error occured"
        });
    }
};


export const AddNewRecipe = async (req, res) => {

    const {
        name,
        description,
        email,
        ingredients,
        category,
        image
    } = req.body;

    await Recipes.create({
        name,
        description,
        email,
        ingredients,
        category,
        image
    });

    res.json({
        success: true,
        message: "Recipe Added Successfully",
    });
};


export const getRecipe = async (req, res, next) => {
    try {

        let recipeId = req.params.id;
        const recipe = await Recipes.findById(recipeId);

        res.render("recipe.ejs", {
            title: "Recipe",
            recipe
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "some error occured"
        });
    }
};


export const deleteRecipe = async (req, res, next) => {
    let recipeId;
    try {
        const recipeId = req.params.id;
        const recipe = await Recipes.findByIdAndDelete(recipeId);
        res.redirect(`/recipe/${recipeId}`);
    } catch (err) {
        console.error(err);
        req.flash('error', 'An error occurred while deleting the recipe');
        res.redirect(`/recipe/${recipeId}`);
    }
};


export const getCategory = async (req, res, next) => {
    try {
        let categoryId = req.params.id;
        const limitNumber = 20;
        const categoryById = await Recipes.find({
            'category': categoryId
        }).limit(limitNumber);

        res.render("categories.ejs", {
            title: "Categories",
            categoryById
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "some error occured"
        });
    }
};


export const searchRecipe = async (req, res, next) => {

    try {
        let searchTerm = req.body.searchTerm;

        let recipe = await Recipes.find({
            $text: {
                $search: searchTerm,
                $diacriticSensitive: true
            }
        });

        res.render("search.ejs", {
            title: 'Search',
            recipe
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error Occured"
        });
    }
};


export const exploreLatest = async (req, res, next) => {

    try {
        const limitNumber = 20;
        const recipe = await Recipes.find({}).sort({
            _id: -1
        }).limit(limitNumber);

        res.render("exploreLatest.ejs", {
            title: 'recipe',
            recipe
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error Occured"
        });
    }

};


export const exploreRandom = async (req, res, next) => {

    try {
        let count = await Recipes.find().countDocuments();
        let random = Math.floor(Math.random() * count);
        let recipe = await Recipes.findOne().skip(random).exec();

        res.render("exploreRandom.ejs", {
            title: 'recipe',
            recipe
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error Occured"
        });
    }

};



export const submitRecipe = async (req, res, next) => {

    const infoErrorsObj = req.flash('infoErrors');
    const infoSubmitObj = req.flash('infoSubmit');

    res.render("submitRecipe.ejs", {
        title: 'Submit Recipe',
        infoErrorsObj,
        infoSubmitObj
    });
};


export const submitRecipeOnPost = async (req, res, next) => {

    try {

        let imageUploadFile;
        let uploadPath;
        let newImageName;

        if (!req.files || Object.keys(req.files).length === 0) {
            console.log('No Image is uploaded.');
        } else {

            imageUploadFile = req.files.image;
            newImageName = Date.now() + '-' + imageUploadFile.name;
            // console.log(newImageName);
            uploadPath = path.resolve('./') + '/public/uploads/' + newImageName;

            imageUploadFile.mv(uploadPath, function (err) {
                if (err) return res.status(500).send(err);
            })
        }

        const newRecipe = await Recipes.create({
            name: req.body.name,
            description: req.body.description,
            email: req.body.email,
            ingredients: req.body.ingredients,
            category: req.body.category,
            image: newImageName
        });


        await newRecipe.save();

        req.flash('infoSubmit', 'Recipe has been added successfully');
        
        res.redirect('/submit-recipe');
        res.json({
            success: true,
            message: "Registered Successfully",

        });
    } catch (error) {
        console.log(error);
        req.flash('infoErrors', error);
        res.redirect('/submit-recipe');

    }
};


// Update Recipe
// async function updateRecipe(){
//   try {
//     const res = await Recipe.updateOne({ name: 'New Recipe' }, { name: 'New Recipe Updated' });
//     res.n; // Number of documents matched
//     res.nModified; // Number of documents modified
//   } catch (error) {
//     console.log(error);
//   }
// }
// updateRecipe();