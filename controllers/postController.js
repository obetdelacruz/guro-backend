import Post from "../models/Post.js";

// Get all posts
async function getPosts(req, res) {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get a specific post by ID
async function getPostById(req, res) {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Create a new post
async function createPost(req, res) {
  try {
    const { title } = req.body;

    const post = new Post({ title });
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Update a post by ID
async function updatePost(req, res) {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const post = await Post.findByIdAndUpdate(id, { title }, { new: true });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Delete a post by ID
async function deletePost(req, res) {
  try {
    const { id } = req.params;

    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export default {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
