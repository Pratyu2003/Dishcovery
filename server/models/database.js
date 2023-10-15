import mongoose from "mongoose";

export const connectDB = () =>{
    mongoose.connect("mongodb+srv://taskManager:P%40ssword@cluster1.isvdhbk.mongodb.net/?retryWrites=true&w=majority", {
    dbName: "Dishcovery",
}).then(() => console.log("Database Connected")).catch((e) => console.log(e));
};

