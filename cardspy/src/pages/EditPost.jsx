import React, { useEffect, useState } from "react";
import { fetchPostById, updatePost } from "../api";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchPostById(id);
        setTitle(data.title);
        setCategory(data.category);
        setDescription(data.description);
        setAuthor(data.author);
      } catch (err) {
        console.error(err);
      }
    };
    loadPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("author", author);
    if (image) formData.append("image", image);

    try {
      await updatePost(id, formData);
      navigate("/admin");
    } catch (err) {
      console.error(err);
      alert("Failed to update post");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl mb-4">Edit Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 rounded"
          required
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="border p-2 rounded"
          required
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="border p-2 rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 rounded"
          rows="4"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
        <button className="bg-blue-600 text-white py-2 rounded mt-2">Update Post</button>
      </form>
    </div>
  );
}
