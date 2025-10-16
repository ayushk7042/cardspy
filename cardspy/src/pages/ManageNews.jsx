
// import React, { useEffect, useState } from "react";
// import {
//   fetchNews,
//   createNewsArticle,
//   updateNewsArticle,
//   deleteNewsArticle,
// } from "../api";
// import "./ManageNews.css";

// export default function ManageNews() {
//   const [newsList, setNewsList] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     summary: "",
//     content: "",
//     author: "",
//     image: null,
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   useEffect(() => {
//     loadNews();
//   }, []);

//   const loadNews = async () => {
//     try {
//       const data = await fetchNews();
//       setNewsList(data.news || []);
//     } catch (err) {
//       console.error("Failed to load news:", err);
//       setError("Failed to fetch news articles.");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const formData = new FormData();
//       formData.append("title", form.title);
//       formData.append("summary", form.summary);
//       formData.append("content", form.content);
//       formData.append("author", form.author);
//       if (form.image) formData.append("image", form.image);

//       if (editingId) {
//         await updateNewsArticle(editingId, formData);
//         setSuccess("News article updated successfully!");
//       } else {
//         await createNewsArticle(formData);
//         setSuccess("News article created successfully!");
//       }

//       setForm({ title: "", summary: "", content: "", author: "", image: null });
//       setEditingId(null);
//       await loadNews();
//     } catch (err) {
//       console.error("Failed to submit news:", err);
//       setError(err.response?.data?.message || "Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (news) => {
//     setForm({
//       title: news.title,
//       summary: news.summary,
//       content: news.content,
//       author: news.author,
//       image: null,
//     });
//     setEditingId(news._id);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this news article?")) return;
//     try {
//       await deleteNewsArticle(id);
//       setSuccess("News article deleted successfully!");
//       await loadNews();
//     } catch (err) {
//       console.error("Failed to delete news:", err);
//       setError("Failed to delete news article.");
//     }
//   };

//   return (
//     <div className="manage-news-container">
//       <h2>📰 Manage News</h2>

//       <form className="news-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="summary"
//           placeholder="Summary"
//           value={form.summary}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="content"
//           placeholder="Content"
//           value={form.content}
//           onChange={handleChange}
//           required
//         ></textarea>
//         <input
//           type="text"
//           name="author"
//           placeholder="Author"
//           value={form.author}
//           onChange={handleChange}
//         />
//         <input type="file" name="image" onChange={handleChange} />

//         <button type="submit" disabled={loading}>
//           {loading ? "Saving..." : editingId ? "Update News" : "Create News"}
//         </button>
//       </form>

//       {error && <p className="error">{error}</p>}
//       {success && <p className="success">{success}</p>}

//       <div className="news-list">
//         {newsList.length === 0 ? (
//           <p>No news articles found.</p>
//         ) : (
//           newsList.map((item) => (
//             <div key={item._id} className="news-card">
//               {item.image && <img src={item.image} alt={item.title} />}
//               <h3>{item.title}</h3>
//               <p>{item.summary}</p>
//               <small>By {item.author || "Unknown"}</small>
//               <div className="news-actions">
//                 <button onClick={() => handleEdit(item)}>Edit</button>
//                 <button onClick={() => handleDelete(item._id)}>Delete</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import {
  fetchNews,
  createNewsArticle,
  updateNewsArticle,
  deleteNewsArticle,
} from "../api";
import "./ManageNews.css";

export default function ManageNews() {
  const [newsList, setNewsList] = useState([]);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
    author: "",
    image: null,
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    loadNews();
  }, []);

  // ✅ Fetch all news articles
  const loadNews = async () => {
    try {
      const data = await fetchNews();
      setNewsList(data.news || []);
    } catch (err) {
      console.error("Error fetching news:", err);
      setMessage({ type: "error", text: "Failed to load news." });
    }
  };

  // ✅ Handle form input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // ✅ Handle form submit (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("summary", form.summary);
      formData.append("content", form.content);
      formData.append("author", form.author);
      if (form.image) formData.append("image", form.image);

      if (editingId) {
        await updateNewsArticle(editingId, formData);
        setMessage({ type: "success", text: "News article updated successfully!" });
      } else {
        await createNewsArticle(formData);
        setMessage({ type: "success", text: "News article created successfully!" });
      }

      setForm({ title: "", summary: "", content: "", author: "", image: null });
      setEditingId(null);
      await loadNews();
    } catch (err) {
      console.error("Failed to submit news:", err);
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Edit button clicked
  const handleEdit = (news) => {
    setForm({
      title: news.title,
      summary: news.summary,
      content: news.content,
      author: news.author,
      image: null,
    });
    setEditingId(news._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Delete news article
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this news article?")) return;
    try {
      await deleteNewsArticle(id);
      setMessage({ type: "success", text: "News article deleted successfully!" });
      await loadNews();
    } catch (err) {
      console.error("Failed to delete news:", err);
      setMessage({ type: "error", text: "Failed to delete news article." });
    }
  };

  return (
    <div className="manage-news-container">
      <h2>📰 Manage News</h2>

      {/* ✅ Create / Edit Form */}
      <form className="news-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter News Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="summary"
          placeholder="Enter Short Summary"
          value={form.summary}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Write full content here..."
          value={form.content}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={form.author}
          onChange={handleChange}
        />
        <input type="file" name="image" accept="image/*" onChange={handleChange} />

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : editingId ? "Update News" : "Create News"}
        </button>
      </form>

      {/* ✅ Message */}
      {message.text && (
        <p className={message.type === "error" ? "error" : "success"}>
          {message.text}
        </p>
      )}

      {/* ✅ All News Articles List */}
      <div className="news-list">
        {newsList.length === 0 ? (
          <p>No news articles available.</p>
        ) : (
          newsList.map((item) => (
            <div key={item._id} className="news-card">
              {item.image && (
                <img
                  src={item.image.startsWith("http") ? item.image : `http://localhost:5000${item.image}`}
                  alt={item.title}
                  className="news-image"
                />
              )}
              <div className="news-content">
                <h3>{item.title}</h3>
                <p className="summary">{item.summary}</p>
                <small>By {item.author || "Unknown"}</small>
              </div>
              <div className="news-actions">
                <button onClick={() => handleEdit(item)}>✏️ Edit</button>
                <button onClick={() => handleDelete(item._id)}>🗑️ Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
