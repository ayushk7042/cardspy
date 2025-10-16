import React from "react";


export default function Pagination({ page, totalPages, onPageChange }) {
const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
return (
<div className="flex gap-2 items-center justify-center">
{pages.map((p) => (
<button key={p} onClick={() => onPageChange(p)} className={`px-3 py-1 rounded ${p === page ? 'bg-indigo-600 text-white' : 'bg-white border'}`}>
{p}
</button>
))}
</div>
);
}