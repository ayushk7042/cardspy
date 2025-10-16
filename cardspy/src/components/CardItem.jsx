import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";


export default function CardItem({ post }) {
return (
<article className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col">
<Link to={`/post/${post._id}`} className="block">
<div className="h-44 w-full rounded-lg bg-gray-100 overflow-hidden mb-4 flex items-center justify-center">
{/* image placeholder; backend should supply imageUrl */}
{post.imageUrl ? (
<img src={post.imageUrl} alt={post.title} className="object-cover h-full w-full" />
) : (
<div className="text-gray-400">No Image</div>
)}
</div>
<h3 className="text-lg font-semibold leading-tight mb-1">{post.title}</h3>
<p className="text-sm text-gray-500 line-clamp-2">{post.excerpt || post.summary}</p>
</Link>


<div className="mt-4 flex items-center justify-between text-xs text-gray-500">
<div>{post.credit || post.author || 'CardSpy'}</div>
<div>{dayjs(post.createdAt).fromNow ? dayjs(post.createdAt).fromNow() : dayjs(post.createdAt).format('MMM D')}</div>
</div>
</article>
);
}