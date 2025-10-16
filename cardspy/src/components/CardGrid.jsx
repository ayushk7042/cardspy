import React from "react";
import CardItem from "./CardItem";


export default function CardGrid({ posts }) {
if (!posts || posts.length === 0) return <p className="text-gray-500">No posts found.</p>;
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{posts.map((p) => (
<CardItem key={p._id} post={p} />
))}
</div>
);
}