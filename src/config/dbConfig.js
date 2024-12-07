import mongoose from "mongoose";
import env from "./envConfig.js";

const connectDB = async () => {
    try {
        await mongoose.connect(env.mongo_uri);
        console.log("Database Connected Successfully!!");
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
};

export default connectDB;
