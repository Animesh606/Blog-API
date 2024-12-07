import dotenv from "dotenv";
dotenv.config();

const env = {
    mongo_uri: process.env.MONGO_URI,
    port: process.env.PORT || 5000,
};

export default env;