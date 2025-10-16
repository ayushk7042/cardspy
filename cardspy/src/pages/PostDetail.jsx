import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../api.js";


export default function PostDetail() {
const { id } = useParams();
const [post, setPost] = useState(null);


useEffect(() => {
fetchPostById(id).then((d) => setPost(d.post)).catch(console.error);
}, [id]);


if (!post) return <div className="text-center py-20">Loading post...</div>;


return (
<article className="prose max-w-none">
<h1 className="text-3xl font-bold">{post.title}</h1>
<div className="text-sm text-gray-500 mb-4">Credit: {post.credit || post.author || 'CardSpy'}</div>
{post.imageUrl && <img src={post.imageUrl} className="w-full rounded-lg mb-6" alt={post.title} />}
<div dangerouslySetInnerHTML={{ __html: post.contentHtml || post.content }} />
</article>
);
}