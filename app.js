import express from "express";
import expressLayouts from "express-ejs-layouts";
import {config} from "dotenv";
import routes from "./server/routes/recipeRoutes.js";

export const app = express();
const port = process.env.PORT;

config({
    path: "./data/config.env",
});

//using Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(expressLayouts);
app.use(express.json());

 app.set("layout", "./layouts/main.ejs");
// app.set("view engine", "ejs");


//using routes
app.use("/", routes);


app.listen(process.env.PORT, ()=>{
    console.log(`Server working on port:${process.env.PORT}`);
});

