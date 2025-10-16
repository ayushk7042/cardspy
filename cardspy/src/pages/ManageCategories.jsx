// import React, { useEffect, useState } from "react";
// import { fetchCategories, createCategory, deleteCategory } from "../api";
// import "./Manage.css";

// export default function ManageCategories() {
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState("");

//   const loadCategories = async () => {
//     const data = await fetchCategories();
//     setCategories(data);
//   };

//   useEffect(() => {
//     loadCategories();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createCategory({ name });
//     setName("");
//     loadCategories();
//   };

//   return (
//     <div className="manage-section">
//       <h2>Manage Categories</h2>
//       <form onSubmit={handleSubmit} className="form-section">
//         <input
//           type="text"
//           placeholder="Category Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button type="submit">Add Category</button>
//       </form>

//       <div className="items-list">
//         {categories.map((cat) => (
//           <div className="item" key={cat._id}>
//             <h3>{cat.name}</h3>
//             <button onClick={() => deleteCategory(cat._id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { fetchCategories, createCategory, deleteCategory } from "../api";
import "./Manage.css";

export default function ManageCategories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const loadCategories = async () => {
    const data = await fetchCategories();
    setCategories(data);
    if (onSelectCategory) onSelectCategory(data); // pass to parent
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    await createCategory({ name });
    setName("");
    loadCategories();
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    loadCategories();
  };

  return (
    <div className="manage-section">
      <h2>Manage Categories</h2>
      <form onSubmit={handleSubmit} className="form-section">
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Category</button>
      </form>

      <div className="items-list">
        {categories.map((cat) => (
          <div className="item" key={cat._id}>
            <h3>{cat.name}</h3>
            <button onClick={() => handleDelete(cat._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
