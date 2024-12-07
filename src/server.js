import env from "./config/envConfig.js";
import connectDB from "./config/dbConfig.js";
import app from "./app.js";

connectDB()
    .then(() => {
        app.listen(env.port, () => {
            console.log(`Server is running on port ${env.port}`);
        });
    })
    .catch((err) => {
        console.log(err.message);
    });
