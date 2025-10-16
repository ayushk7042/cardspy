import React from "react";
import PostCard from "./PostCard";

import "./FeaturedPosts.css";
export default function FeaturedPosts({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg">No posts available right now.</p>
        <p className="text-sm mt-2">
          Check back later for the latest updates and card insights!
        </p>
      </div>
    );
  }

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden border border-gray-100 group"
          >
            {/* Card Image */}
            <div className="overflow-hidden">
              <img
                src={post.image || "https://via.placeholder.com/400x220?text=Card+Spy"}
                alt={post.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.description?.slice(0, 120)}...
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
