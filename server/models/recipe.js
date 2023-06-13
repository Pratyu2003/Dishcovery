import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        enum: ['Indian', 'Thai', 'Mexican', 'Italian', 'American', 'Spanish', 'Chinese'],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

//recipeSchema.index({ name: 'text', description: 'text'});

recipeSchema.index({ "$**" : 'text'});

export const Recipes = mongoose.model("Recipes", recipeSchema);