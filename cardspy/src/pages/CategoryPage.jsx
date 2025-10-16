// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { fetchCards } from "../api";

// // export default function CategoryPage() {
// //   const { id } = useParams();
// //   const [cards, setCards] = useState([]);

// //   useEffect(() => {
// //     const loadCards = async () => {
// //       const data = await fetchCards();
// //       const filtered = data.filter((c) => c.category?._id === id);
// //       setCards(filtered);
// //     };
// //     loadCards();
// //   }, [id]);

// //   return (
// //     <div className="page-container">
// //       <h1>Cards in this Category</h1>
// //       <div className="cards-grid">
// //         {cards.map((card) => (
// //           <div key={card._id} className="card-item">
// //             <img src={card.image} alt={card.title} />
// //             <h3>{card.title}</h3>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchCards, fetchCategories } from "../api";
// import Footer from "../components/Footer";
// import "./CategoryPage.css";

// const CategoryPage = () => {
//   const { categoryName } = useParams();
//   const [cards, setCards] = useState([]);
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // 🔹 Define gradient colors for each category
//   const categoryColors = {
//     travel: {
//       bg: "linear-gradient(135deg, #0072ff, #00c6ff)",
//       accent: "#0072ff",
//     },
//     cashback: {
//       bg: "linear-gradient(135deg, #00b09b, #96c93d)",
//       accent: "#00b09b",
//     },
//     shopping: {
//       bg: "linear-gradient(135deg, #ff512f, #dd2476)",
//       accent: "#ff512f",
//     },
//     fuel: {
//       bg: "linear-gradient(135deg, #f7971e, #ffd200)",
//       accent: "#f7971e",
//     },
//     business: {
//       bg: "linear-gradient(135deg, #283c86, #45a247)",
//       accent: "#283c86",
//     },
//     default: {
//       bg: "linear-gradient(135deg, #4b6cb7, #182848)",
//       accent: "#182848",
//     },
//   };

//   // Get gradient dynamically based on category
//   const normalizedName = categoryName?.toLowerCase();
//   const theme = categoryColors[normalizedName] || categoryColors.default;

//   useEffect(() => {
//     const loadCategoryCards = async () => {
//       try {
//         const [allCards, categories] = await Promise.all([
//           fetchCards(),
//           fetchCategories(),
//         ]);

//         const selectedCategory = categories.find(
//           (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
//         );

//         if (selectedCategory) {
//           const filtered = allCards.filter(
//             (card) => card.category && card.category._id === selectedCategory._id
//           );
//           setFilteredCards(filtered);
//         }
//       } catch (err) {
//         console.error("Error loading category cards:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCategoryCards();
//   }, [categoryName]);

//   const handleCardClick = (id) => navigate(`/card/${id}`);

//   return (
//     <div className="category-page">
//       {/* Header Section */}
//       <header
//         className="category-header"
//         style={{ background: theme.bg }}
//       >
//         <div className="header-content">
//           <h1>{categoryName}</h1>
//           <p>
//             Discover India’s best <strong>{categoryName}</strong> — curated to
//             match your lifestyle. Compare rewards, perks, and benefits easily.
//           </p>
//         </div>
//       </header>

//       {/* Cards Section */}
//       <section className="category-cards-section">
//         <h2 className="section-title">
//           Best {categoryName} Available Right Now
//         </h2>

//         {loading ? (
//           <p className="loading">Loading cards...</p>
//         ) : filteredCards.length === 0 ? (
//           <p className="no-cards">
//             No cards available for this category yet. Please check again soon.
//           </p>
//         ) : (
//           <div className="cards-grid">
//             {filteredCards.map((card) => (
//               <div
//                 key={card._id}
//                 className="card-item"
//                 onClick={() => handleCardClick(card._id)}
//               >
//                 <div className="card-img">
//                   <img
//                     src={
//                       card.image ||
//                       "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
//                     }
//                     alt={card.title}
//                   />
//                 </div>
//                 <div className="card-info">
//                   <h3>{card.title}</h3>
//                   <p className="card-bank">{card.bank}</p>
//                   <p className="card-desc">
//                     {card.description?.slice(0, 90) ||
//                       "Explore exclusive features and offers."}
//                   </p>
//                   <button
//                     className="view-btn"
//                     style={{ background: theme.accent }}
//                   >
//                     View Details →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default CategoryPage;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCategories, fetchCards } from "../api";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategoryCards = async () => {
      try {
        const [allCategories, allCards] = await Promise.all([
          fetchCategories(),
          fetchCards(),
        ]);

        // ✅ Safely find category by name
        const selectedCategory = allCategories.find(
          (cat) => cat.name?.toLowerCase() === name?.toLowerCase()
        );

        if (!selectedCategory) {
          console.warn("Category not found for name:", name);
          setCards([]);
          setCategory(null);
        } else {
          const filtered = allCards.filter(
            (card) => card.category?._id === selectedCategory._id
          );
          setCategory(selectedCategory);
          setCards(filtered);
        }
      } catch (err) {
        console.error("Error loading category cards:", err);
      } finally {
        setLoading(false);
      }
    };

    loadCategoryCards();
  }, [name]);

  if (loading) return <div className="loading">Loading {name} cards...</div>;

  if (!category)
    return (
      <div className="no-category">
        <h2>Category Not Found 😕</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{category.name}</h1>
        <p>{category.description || "Explore top credit cards in this category."}</p>
      </div>

      {cards.length === 0 ? (
        <div className="no-cards">No cards available in this category yet.</div>
      ) : (
        <div className="cards-grid">
          {cards.map((card) => (
            <div
              key={card._id}
              className="card-item"
              onClick={() => navigate(`/card/${card._id}`)}
            >
              <img
                src={
                  card.image ||
                  "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
                }
                alt={card.title}
              />
              <h3>{card.title}</h3>
              <p>{card.bank}</p>
              <button>View Details →</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
