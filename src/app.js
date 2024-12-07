import express from "express";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/blogs", blogRoutes);

export default app;