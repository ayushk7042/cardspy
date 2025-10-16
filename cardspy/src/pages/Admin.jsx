import React, { useEffect, useState } from "react";
import { createPost } from "../api.js";
import EditorModal from "../components/EditorModal";


export default function Admin() {
const [open, setOpen] = useState(false);
const [posts, setPosts] = useState([]);


// TODO: fetch admin posts and support edit/delete


async function handleCreate(payload) {
try {
const data = await createPost(payload);
alert('Post created');
setOpen(false);
// optimistically add post (or re-fetch)
setPosts(prev => [data.post, ...prev]);
} catch (err) {
console.error(err);
alert('Create failed');
}
}


return (
<div>
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold">Admin Panel</h2>
<div className="flex gap-2">
<button onClick={() => setOpen(true)} className="bg-indigo-600 text-white px-4 py-2 rounded">Create Post</button>
</div>
</div>


<div className="bg-white p-4 rounded shadow">
<p className="text-sm text-gray-500">Manage posts — create, edit, delete and add credits.</p>
</div>


{open && <EditorModal onClose={() => setOpen(false)} onSave={handleCreate} />}
</div>
);
}