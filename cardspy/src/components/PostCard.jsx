import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition p-4">
      {post.image && (
        <img src={post.image} alt={post.title} className="h-48 w-full object-cover rounded" />
      )}
      <h3 className="text-xl font-bold mt-2">{post.title}</h3>
      <p className="text-gray-600 mt-1">{post.category}</p>
      <Link
        to={`/post/${post._id}`}
        className="text-indigo-600 mt-2 inline-block"
      >
        Read More
      </Link>
    </div>
  );
}
