import Blog from "../models/Blog.js";

const createBlog = async (req, res) => {
    try {
        const { title, content, category, tags } = req.body;
        const blog = new Blog({ title, content, category, tags });
        await blog.save();
        res.status(201).json({ message: "Blog created successfully", blog });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error creating blog" });
    }
};

const getBlogs = async (req, res) => {
    try {
        const { category, tags, search, page = 1, pageSize = 10 } = req.query;
        // const filters = {};
        // if (category) filters.category = category;
        // if (tags) filters.tags = tags;
        // if (search) filters.$text.$search = search;

        const blogs = await Blog.aggregate([
            {
                $match: {
                    $and: [
                        category ? { category } : {},
                        tags ? { tags } : {},
                        search ? {
                            $text: {
                                $search: search,
                            },
                        } : {},
                    ],
                },
            },
            {
                $facet: {
                    metadata: [{ $count: "totalCount" }],
                    data: [
                        { $skip: (parseInt(page) - 1) * parseInt(pageSize) },
                        { $limit: parseInt(pageSize) },
                    ],
                },
            },
        ]);

        res.status(200).json({
            blogs: blogs[0].data,
            count: blogs[0].metadata[0]?.totalCount || 0,
            page,
            pageSize,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error fetching blogs" });
    }
};

const editBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json(blog);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error editing blog" });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error deleting blog" });
    }
};

export { createBlog, getBlogs, editBlog, deleteBlog };
