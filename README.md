# Content Management API

A RESTful API for managing blog posts, including CRUD operations, filtering, pagination, and search functionality.

## Features
- Add a blog post with title, content, category, and tags.
- Retrieve blogs with pagination and filtering by category or tag.
- Edit and delete blog posts.
- Search blogs using text indexing.

---

## Prerequisites
- **Node.js** (v16 or later)
- **MongoDB** (local or cloud)

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Animesh606/Blog-API.git
   cd blog-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/blog-api
   PORT=5000
   ```

4. Start the MongoDB server locally or connect to a cloud database.

---

## Running the Application
1. Start the development server:
   ```bash
   npm run dev
   ```
2. The API will be available at `http://localhost:5000/api`.

---

## API Endpoints
| Method | Endpoint          | Description                       |
|--------|-------------------|-----------------------------------|
| POST   | `/api/blogs`       | Add a new blog                   |
| GET    | `/api/blogs`       | Get blogs with pagination/filter |
| PUT    | `/api/blogs/:id`   | Edit a blog by ID                |
| DELETE | `/api/blogs/:id`   | Delete a blog by ID              |


### Example Queries
- **Pagination**: `/api/blogs?page=2&limit=5`
- **Filter by category**: `/api/blogs?category=tech`
- **Filter by tag**: `/api/blogs?tag=nodejs`
- **Search**: `/api/blogs?search=technical`

---

## Testing the API
1. Use **Postman**, **cURL**, or any REST client to test the API endpoints.
2. Example request to add a blog:
   ```json
   POST /api/blogs
   {
     "title": "My First Blog",
     "content": "This is the content of the blog.",
     "category": "tech",
     "tags": ["nodejs", "mongodb"]
   }
   ```

---

## License
This project is licensed under the MIT License.

--- 