import React, { useEffect, useState } from "react";
import { fetchPosts, createPost, deletePost } from "../api";
import "./Manage.css";

export default function ManagePosts() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", category: "", description: "", image: null });

  const loadPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    await createPost(formData);
    setForm({ title: "", category: "", description: "", image: null });
    loadPosts();
  };

  return (
    <div className="manage-section">
      <h2>Manage News / Posts</h2>
      <form onSubmit={handleSubmit} className="form-section">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input type="file" onChange={(e) => setForm({ ...form, image: e.target.files[0] })} />
        <button type="submit">Add Post</button>
      </form>

      <div className="items-list">
        {posts.map((post) => (
          <div className="item" key={post._id}>
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.category}</p>
            <button onClick={() => deletePost(post._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
