import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsById } from "../api";

export default function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNewsById(id);
      setNews(data);
    };
    loadNews();
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <div className="news-detail">
      <h1>{news.title}</h1>
      <img src={news.image} alt={news.title} />
      <p>{news.summary}</p>
      <p>{news.content}</p>
    </div>
  );
}
