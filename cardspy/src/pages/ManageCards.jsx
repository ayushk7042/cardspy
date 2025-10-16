
// import React, { useEffect, useState } from "react";
// import { fetchCards, fetchCategories, createCard, deleteCard } from "../api";
// import "./Manage.css";

// export default function ManageCards() {
//   const [cards, setCards] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     bank: "",
//     category: "",
//     fees: "",
//     benefits: "",
//     applyLink: "",
//     description: "",
//     image: null, // file object
//   });

//   // Load all cards
//   const loadCards = async () => {
//     try {
//       const data = await fetchCards();
//       setCards(data);
//     } catch (err) {
//       console.error("Failed to fetch cards:", err);
//     }
//   };

//   // Load categories
//   const loadCategories = async () => {
//     try {
//       const data = await fetchCategories();
//       setCategories(data);
//     } catch (err) {
//       console.error("Failed to fetch categories:", err);
//     }
//   };

//   useEffect(() => {
//     loadCards();
//     loadCategories();
//   }, []);

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Required fields check
//     if (!form.title || !form.bank || !form.category) {
//       alert("Title, bank, and category are required");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", form.title);
//     formData.append("bank", form.bank);
//     formData.append("category", form.category);
//     formData.append("fees", form.fees);
//     formData.append("benefits", form.benefits);
//     formData.append("applyLink", form.applyLink);
//     formData.append("description", form.description);
//     if (form.image) formData.append("image", form.image);

//     try {
//       await createCard(formData); // API call (multipart/form-data)
//       alert("Card created successfully ✅");

//       // Reset form
//       setForm({
//         title: "",
//         bank: "",
//         category: "",
//         fees: "",
//         benefits: "",
//         applyLink: "",
//         description: "",
//         image: null,
//       });

//       loadCards();
//     } catch (err) {
//       console.error("Failed to create card:", err);
//       alert("Error creating card. Check console for details.");
//     }
//   };

//   // Handle card delete
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this card?")) return;
//     try {
//       await deleteCard(id);
//       loadCards();
//     } catch (err) {
//       console.error("Failed to delete card:", err);
//       alert("Error deleting card. Check console for details.");
//     }
//   };

//   return (
//     <div className="manage-section">
//       <h2>Manage Credit Cards</h2>

//       <form onSubmit={handleSubmit} className="form-section">
//         <input
//           type="text"
//           placeholder="Card Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Bank Name"
//           value={form.bank}
//           onChange={(e) => setForm({ ...form, bank: e.target.value })}
//         />
//         <select
//           value={form.category}
//           onChange={(e) => setForm({ ...form, category: e.target.value })}
//         >
//           <option value="">Select Category</option>
//           {categories.map((cat) => (
//             <option key={cat._id} value={cat._id}>
//               {cat.name}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Fees"
//           value={form.fees}
//           onChange={(e) => setForm({ ...form, fees: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Benefits (comma separated)"
//           value={form.benefits}
//           onChange={(e) => setForm({ ...form, benefits: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Apply Link"
//           value={form.applyLink}
//           onChange={(e) => setForm({ ...form, applyLink: e.target.value })}
//         />
//         <textarea
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         />
//         <input
//           type="file"
//           accept=".jpg,.jpeg,.png"
//           onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
//         />
//         <button type="submit">Add Card</button>
//       </form>

//       <div className="items-list">
//         {cards.map((card) => (
//           <div className="item" key={card._id}>
//             <img src={card.image} alt={card.title} />
//             <h3>{card.title}</h3>
//             <p>Bank: {card.bank}</p>
//             <p>Category: {card.category?.name || card.category}</p>
//             <p>Fees: {card.fees}</p>
//             <p>Benefits: {card.benefits?.join(", ")}</p>
//             <p>Description: {card.description}</p>
//             <a href={card.applyLink} target="_blank" rel="noreferrer">
//               Apply
//             </a>
//             <button onClick={() => handleDelete(card._id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { fetchCards, fetchCategories, createCard, deleteCard } from "../api";
import "./Manage.css";

export default function ManageCards() {
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    title: "",
    bank: "",
    category: "",
    fees: "",
    benefits: "",
    rewards: "",
    offers: "",
    interestRate: "",
    applyLink: "",
    description: "",
    image: null,
  });

  const loadCards = async () => {
    try {
      const data = await fetchCards();
      setCards(data);
    } catch (err) {
      console.error("Failed to fetch cards:", err);
    }
  };

  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  useEffect(() => {
    loadCards();
    loadCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.bank || !form.category) {
      alert("Title, bank, and category are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("bank", form.bank);
    formData.append("category", form.category);
    formData.append("fees", form.fees);
    formData.append("benefits", form.benefits);
    formData.append("rewards", form.rewards);
    formData.append("offers", form.offers);
    formData.append("interestRate", form.interestRate);
    formData.append("applyLink", form.applyLink);
    formData.append("description", form.description);
    if (form.image) formData.append("image", form.image);

    try {
      await createCard(formData);
      alert("Card created successfully ✅");
      setForm({
        title: "",
        bank: "",
        category: "",
        fees: "",
        benefits: "",
        rewards: "",
        offers: "",
        interestRate: "",
        applyLink: "",
        description: "",
        image: null,
      });
      loadCards();
    } catch (err) {
      console.error("Failed to create card:", err);
      alert("Error creating card. Check console for details.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this card?")) return;
    try {
      await deleteCard(id);
      loadCards();
    } catch (err) {
      console.error("Failed to delete card:", err);
      alert("Error deleting card. Check console for details.");
    }
  };

  return (
    <div className="manage-section">
      <h2>Manage Credit Cards</h2>

      <form onSubmit={handleSubmit} className="form-section">
        <input
          type="text"
          placeholder="Card Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Bank Name"
          value={form.bank}
          onChange={(e) => setForm({ ...form, bank: e.target.value })}
        />
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Fees"
          value={form.fees}
          onChange={(e) => setForm({ ...form, fees: e.target.value })}
        />
        <input
          type="text"
          placeholder="Benefits (comma separated)"
          value={form.benefits}
          onChange={(e) => setForm({ ...form, benefits: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rewards (comma separated)"
          value={form.rewards}
          onChange={(e) => setForm({ ...form, rewards: e.target.value })}
        />
        <input
          type="text"
          placeholder="Offers (comma separated)"
          value={form.offers}
          onChange={(e) => setForm({ ...form, offers: e.target.value })}
        />
        <input
          type="text"
          placeholder="Interest Rate (e.g., 12%)"
          value={form.interestRate}
          onChange={(e) => setForm({ ...form, interestRate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Apply Link"
          value={form.applyLink}
          onChange={(e) => setForm({ ...form, applyLink: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        />
        <button type="submit">Add Card</button>
      </form>

      <div className="items-list">
        {cards.map((card) => (
          <div className="item" key={card._id}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>Bank: {card.bank}</p>
            <p>Category: {card.category?.name || card.category}</p>
            <p>Fees: {card.fees}</p>
            <p>Benefits: {card.benefits?.join(", ")}</p>
            <p>Rewards: {card.rewards?.join(", ")}</p>
            <p>Offers: {card.offers?.join(", ")}</p>
            <p>Interest Rate: {card.interestRate}</p>
            <p>Description: {card.description}</p>
            <a href={card.applyLink} target="_blank" rel="noreferrer">
              Apply
            </a>
            <button onClick={() => handleDelete(card._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
