
// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { fetchCategories, fetchCards } from "../api";
// // import "./CategoryPage.css";

// // const CategoryPage = () => {
// //   const { name } = useParams();
// //   const navigate = useNavigate();
// //   const [category, setCategory] = useState(null);
// //   const [cards, setCards] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const loadCategoryCards = async () => {
// //       try {
// //         const [allCategories, allCards] = await Promise.all([
// //           fetchCategories(),
// //           fetchCards(),
// //         ]);

// //         // ✅ Safely find category by name
// //         const selectedCategory = allCategories.find(
// //           (cat) => cat.name?.toLowerCase() === name?.toLowerCase()
// //         );

// //         if (!selectedCategory) {
// //           console.warn("Category not found for name:", name);
// //           setCards([]);
// //           setCategory(null);
// //         } else {
// //           const filtered = allCards.filter(
// //             (card) => card.category?._id === selectedCategory._id
// //           );
// //           setCategory(selectedCategory);
// //           setCards(filtered);
// //         }
// //       } catch (err) {
// //         console.error("Error loading category cards:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadCategoryCards();
// //   }, [name]);

// //   if (loading) return <div className="loading">Loading {name} cards...</div>;

// //   if (!category)
// //     return (
// //       <div className="no-category">
// //         <h2>Category Not Found 😕</h2>
// //         <button onClick={() => navigate("/")}>Back to Home</button>
// //       </div>
// //     );

// //   return (
// //     <div className="category-page">
// //       <div className="category-header">
// //         <h1>{category.name}</h1>
// //         <p>{category.description || "Explore top credit cards in this category."}</p>
// //       </div>

// //       {cards.length === 0 ? (
// //         <div className="no-cards">No cards available in this category yet.</div>
// //       ) : (
// //         <div className="cards-grid">
// //           {cards.map((card) => (
// //             <div
// //               key={card._id}
// //               className="card-item"
// //               onClick={() => navigate(`/card/${card._id}`)}
// //             >
// //               <img
// //                 src={
// //                   card.image ||
// //                   "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
// //                 }
// //                 alt={card.title}
// //               />
// //               <h3>{card.title}</h3>
// //               <p>{card.bank}</p>
// //               <button>View Details →</button>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CategoryPage;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchCategories, fetchCards } from "../api";
// import "./CategoryPage.css";

// const CategoryPage = () => {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const [category, setCategory] = useState(null);
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadCategoryCards = async () => {
//       try {
//         const [allCategories, allCards] = await Promise.all([
//           fetchCategories(),
//           fetchCards(),
//         ]);

//         const selectedCategory = allCategories.find(
//           (cat) => cat.name?.toLowerCase() === name?.toLowerCase()
//         );

//         if (!selectedCategory) {
//           setCards([]);
//           setCategory(null);
//         } else {
//           const filtered = allCards.filter(
//             (card) => card.category?._id === selectedCategory._id
//           );
//           setCategory(selectedCategory);
//           setCards(filtered);
//         }
//       } catch (err) {
//         console.error("Error loading category cards:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCategoryCards();
//   }, [name]);

//   if (loading) return <div className="loading">Loading {name} cards...</div>;

//   if (!category)
//     return (
//       <div className="no-category">
//         <h2>Category Not Found 😕</h2>
//         <button onClick={() => navigate("/")}>Back to Home</button>
//       </div>
//     );

//   return (
//     <section className="category-page">
//       {/* Header */}
//       <div className="category-header">
//         <h1>{category.name}</h1>
//         <p>{category.description || "Explore top credit cards in this category."}</p>
//       </div>

//       {/* Optional Featured Card Section */}
//       {cards.length > 0 && (
//         <div className="featured-card">
//           <h2>🔥 Featured Card</h2>
//           <div
//             className="card-item featured"
//             onClick={() => navigate(`/card/${cards[0]._id}`)}
//           >
//             <img
//               src={cards[0].image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"}
//               alt={cards[0].title}
//             />
//             <div className="card-content">
//               <h3>{cards[0].title}</h3>
//               <p>{cards[0].bank}</p>
//               <span className="badge">Top Pick</span>
//               <button>View Details →</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Cards Grid */}
//       {cards.length > 1 ? (
//         <div className="cards-grid">
//           {cards.slice(1).map((card) => (
//             <div
//               key={card._id}
//               className="card-item"
//               onClick={() => navigate(`/card/${card._id}`)}
//             >
//               <img
//                 src={card.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"}
//                 alt={card.title}
//               />
//               <div className="card-content">
//                 <h3>{card.title}</h3>
//                 <p>{card.bank}</p>
//                 <span className="badge">{card.category?.name}</span>
//                 <button>View Details →</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="no-cards">No additional cards available in this category yet.</p>
//       )}

//       {/* Optional CTA Section */}
//       <div className="category-cta">
//         <h2>💳 Looking for more cards?</h2>
//         <p>Explore all cards and offers to find the one that fits your lifestyle.</p>
//         <button onClick={() => navigate("/cards")}>Explore All Cards</button>
//       </div>
//     </section>
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

        const selectedCategory = allCategories.find(
          (cat) => cat.name?.toLowerCase() === name?.toLowerCase()
        );

        if (!selectedCategory) {
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
    <section className="category-page">
      {/* Hero Section */}
      <div className="category-hero">
        <div className="hero-text">
          <h1>{category.name}</h1>
          <p>{category.description || "Explore top credit cards in this category."}</p>
          <button onClick={() => navigate("/cards")}>Explore All Cards</button>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
            alt={category.name}
          />
        </div>
      </div>

      {/* Featured Card */}
      {cards.length > 0 && (
        <div className="featured-card">
          <h2>🔥 Featured Card</h2>
          <div
            className="card-item featured"
            onClick={() => navigate(`/card/${cards[0]._id}`)}
          >
            <img
              src={cards[0].image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"}
              alt={cards[0].title}
            />
            <div className="card-content">
              <h3>{cards[0].title}</h3>
              <p>{cards[0].bank}</p>
              <span className="badge">Top Pick</span>
              <button>View Details →</button>
            </div>
          </div>
        </div>
      )}

      {/* Cards Grid */}
      {cards.length > 1 ? (
        <div className="cards-grid">
          {cards.slice(1).map((card) => (
            <div
              key={card._id}
              className="card-item"
              onClick={() => navigate(`/card/${card._id}`)}
            >
              <img
                src={card.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"}
                alt={card.title}
              />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.bank}</p>
                <span className="badge">{card.category?.name}</span>
                <button>View Details →</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-cards">No additional cards available in this category yet.</p>
      )}

      {/* Category CTA */}
      <div className="category-cta">
        <h2>💳 Looking for more cards?</h2>
        <p>Explore all cards and offers to find the one that fits your lifestyle.</p>
        <button onClick={() => navigate("/cards")}>Explore All Cards</button>
      </div>
    </section>
  );
};

export default CategoryPage;
