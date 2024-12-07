import { Schema, model } from "mongoose";

const blogSchema = Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

blogSchema.index({ title: "text", content: "text" });

export default model("Blog", blogSchema);
