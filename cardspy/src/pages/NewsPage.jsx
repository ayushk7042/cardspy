import React, { useEffect, useState } from "react";
import { fetchNews } from "../api.js"; // assuming this fetches all news
import { useNavigate } from "react-router-dom";
import "./NewsPage.css";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const navigate = useNavigate();

  // Fetch all news
  const loadNews = async () => {
    try {
      const data = await fetchNews();
      setNews(data.news || data);
    } catch (err) {
      console.error("Failed to fetch news:", err);
    } finally {
      setLoadingNews(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <div className="news-page">
      <h1 className="page-title">📰 All Credit Card News</h1>
      <p className="page-subtitle">
        Stay updated with the latest trends, expert tips, and important updates about credit cards.
      </p>

      {loadingNews ? (
        <p className="loading-text">Loading news...</p>
      ) : news.length === 0 ? (
        <p className="no-news-text">No news available.</p>
      ) : (
        <div className="news-grid">
          {news.map((item) => (
            <div
              key={item._id}
              className="news-card"
              onClick={() => handleNewsClick(item._id)}
            >
              <div className="news-image">
                <img
                  src={
                    item.image ||
                    "https://cdn-icons-png.flaticon.com/512/2965/2965879.png"
                  }
                  alt={item.title}
                />
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.summary || item.description || "Read more..."}</p>
                <div className="news-footer">
                  <span className="news-date">
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : ""}
                  </span>
                  <button className="read-btn">Read More →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
