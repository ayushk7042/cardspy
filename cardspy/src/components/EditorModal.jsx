import React, { useState } from "react";


export default function EditorModal({ onClose, onSave }) {
const [title, setTitle] = useState("");
const [summary, setSummary] = useState("");
const [content, setContent] = useState("");
const [credit, setCredit] = useState("");
const [imageUrl, setImageUrl] = useState("");


function submit(e) {
e.preventDefault();
onSave({ title, summary, content, credit, imageUrl });
}


return (
<div className="fixed inset-0 bg-black/40 flex items-start justify-center z-50 p-6">
<div className="bg-white rounded-lg w-full max-w-2xl p-6 shadow">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold">Create Post</h3>
<button onClick={onClose} className="text-gray-500">Close</button>
</div>
<form onSubmit={submit} className="flex flex-col gap-3">
<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="border p-2 rounded" />
<input value={summary} onChange={e=>setSummary(e.target.value)} placeholder="Short summary / excerpt" className="border p-2 rounded" />
<input value={credit} onChange={e=>setCredit(e.target.value)} placeholder="Credit / Author" className="border p-2 rounded" />
<input value={imageUrl} onChange={e=>setImageUrl(e.target.value)} placeholder="Image URL" className="border p-2 rounded" />
<textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="Content (HTML allowed)" rows={8} className="border p-2 rounded" />


<div className="flex justify-end gap-2">
<button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
<button className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
</div>
</form>


</div>
</div>
);
}