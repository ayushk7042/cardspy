import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchInsightById } from "../api";

export default function InsightDetail() {
  const { id } = useParams();
  const [insight, setInsight] = useState(null);

  useEffect(() => {
    const loadInsight = async () => {
      const data = await fetchInsightById(id);
      setInsight(data);
    };
    loadInsight();
  }, [id]);

  if (!insight) return <p>Loading...</p>;

  return (
    <div className="insight-detail">
      <h1>{insight.title}</h1>
      <img src={insight.image} alt={insight.title} />
      <p>{insight.summary}</p>
      <p>{insight.description}</p>
    </div>
  );
}
