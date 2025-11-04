



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
//       {/* Hero Section */}
//       <div className="category-hero">
//         <div className="hero-text">
//           <h1>{category.name}</h1>
//           <p>{category.description || "Explore top credit cards in this category."}</p>
//           <button onClick={() => navigate("/cards")}>Explore All Cards</button>
//         </div>
//         <div className="hero-image">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
//             alt={category.name}
//           />
//         </div>
//       </div>

//       {/* Featured Card */}
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

//       {/* Category CTA */}
//       <div className="category-cta">
//         <h2>💳 Looking for more cards?</h2>
//         <p>Explore all cards and offers to find the one that fits your lifestyle.</p>
//         <button onClick={() => navigate("/cards")}>Explore All Cards</button>
//       </div>
//     </section>
//   );
// };

// export default CategoryPage;









// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchCategories, fetchCards } from "../api";
// import {
//   FaWallet,
//   FaPlane,
//   FaGift,
//   FaMoneyBillWave,
//   FaCoins,
// } from "react-icons/fa";
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
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadCategoryCards();
//   }, [name]);

//   if (loading)
//     return <div className="loading">Loading {name} cards...</div>;

//   if (!category)
//     return (
//       <div className="no-category">
//         <h2>Category Not Found 😕</h2>
//         <button onClick={() => navigate("/")}>Back to Home</button>
//       </div>
//     );

//   return (
//     <section className="category-page">

//       {/* Hero Section */}
//       <div className="category-hero">
//         <div className="hero-content">
//           <h1>{category.name}</h1>
//           <p>{category.description || "Explore top credit cards in this category with exclusive offers and benefits."}</p>
//           <button onClick={() => navigate("/cards")}>Explore All Cards</button>
//         </div>
//         <div className="hero-image">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
//             alt={category.name}
//           />
//         </div>
//       </div>

//       {/* Cards Grid (4 cards per row) */}
//       {/* {cards.length > 0 ? (
//         <div className="cards-grid">
//           {cards.map((card, index) => (
//             <div
//               key={card._id}
//               className="card-item"
//               onClick={() => navigate(`/card/${card._id}`)}
//             >
//               <div className="card-img-wrapper">
//                 <img
//                   src={card.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"}
//                   alt={card.title}
//                 />
//                 {index === 0 ? (
//                   <span className="badge">Top Pick</span>
//                 ) : (
//                   <span className="badge-category">{card.category?.name}</span>
//                 )}
//               </div>
//               <div className="card-content">
//                 <h3>{card.title}</h3>
//                 <p>{card.bank}</p>
//                 <button>View Details →</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="no-cards">No cards available in this category yet.</p>
//       )} */}


//       {cards.length > 0 ? (
//   <div className="cards-grid">
//     {cards.map((card, index) => (
//       <div
//         key={card._id}
//         className="card-item"
//         onClick={() => navigate(`/card/${card._id}`)}
//       >
//         {/* Image with Badge */}
//         <div className="card-img-wrapper">
//           <img
//             src={card.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"}
//             alt={card.title}
//           />
//           <span className={`badge ${index === 0 ? 'top-pick' : ''}`}>
//             {index === 0 ? "Top Pick" : card.category?.name}
//           </span>
//         </div>

//         {/* Card Info */}
//         <div className="card-content">
//           <h3>{card.title}</h3>
//           <p>{card.bank}</p>
//           <button>View Details →</button>
//         </div>
//       </div>
//     ))}
//   </div>
// ) : (
//   <p className="no-cards">No cards available in this category yet.</p>
// )}


//       {/* CTA */}
//       <div className="category-cta">
//         <h2>💳 Looking for more cards?</h2>
//         <p>Explore all cards and offers to find the one that fits your lifestyle.</p>
//         <button onClick={() => navigate("/cards")}>Explore All Cards</button>
//       </div>

//       {/* Why Choose Us */}
//       <div className="why-choose">
//         <h2>Why Choose CredSpy?</h2>
//         <div className="why-grid">
//           <div className="why-item">
//             <FaWallet size={30} color="#1d4ed8"/>
//             <h3>Smart Comparison</h3>
//             <p>Compare cards easily to find the best one for your needs.</p>
//           </div>
//           <div className="why-item">
//             <FaGift size={30} color="#1d4ed8"/>
//             <h3>Exciting Rewards</h3>
//             <p>Get cashback, points, and amazing offers from top banks.</p>
//           </div>
//           <div className="why-item">
//             <FaPlane size={30} color="#1d4ed8"/>
//             <h3>Travel Benefits</h3>
//             <p>Enjoy exclusive travel perks and lounge access worldwide.</p>
//           </div>
//           <div className="why-item">
//             <FaCoins size={30} color="#1d4ed8"/>
//             <h3>Financial Insights</h3>
//             <p>Expert tips to manage your finances and maximize benefits.</p>
//           </div>
//         </div>
//       </div>

//       {/* Suggestions Section */}
//       <div className="suggestions">
//         <h2>Suggestions for You</h2>
//         <p>Based on your interest, we recommend these top picks:</p>
//         <div className="suggestion-grid">
//           {cards.slice(0, 4).map((card, index) => (
//             <div
//               key={card._id}
//               className="suggestion-card"
//               onClick={() => navigate(`/card/${card._id}`)}
//             >
//               <img src={card.image} alt={card.title} />
//               {index === 0 && <span className="badge">Top Pick</span>}
//               <h4>{card.title}</h4>
//               <p>{card.bank}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// };

// export default CategoryPage;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCategories, fetchCards } from "../api";
import {
  FaWallet,
  FaPlane,
  FaGift,
  FaMoneyBillWave,
  FaCoins,
} from "react-icons/fa";
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
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadCategoryCards();
  }, [name]);

  if (loading)
    return <div className="cp-loading">Loading {name} cards...</div>;

  if (!category)
    return (
      <div className="cp-no-category">
        <h2>Category Not Found 😕</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );

  return (
    <section className="cp-page">

      {/* Hero Section */}
      <div className="cp-hero">
        <div className="cp-hero-content">
          <h1>{category.name}</h1>
          <p>{category.description || "Explore top credit cards in this category with exclusive offers and benefits."}</p>
          <button onClick={() => navigate("/cards")}>Explore All Cards</button>
        </div>
        <div className="cp-hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
            alt={category.name}
          />
        </div>
      </div>

      {/* Cards Grid */}
      {cards.length > 0 ? (
        <div className="cp-cards-grid">
          {cards.map((card, index) => (
            <div
              key={card._id}
              className="cp-card-item"
              onClick={() => navigate(`/card/${card._id}`)}
            >
              <div className="cp-card-img-wrapper">
                <img
                  src={card.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"}
                  alt={card.title}
                />
                <span className={`cp-badge ${index === 0 ? 'cp-top-pick' : ''}`}>
                  {index === 0 ? "Top Pick" : card.category?.name}
                </span>
              </div>
              <div className="cp-card-content">
                <h3>{card.title}</h3>
                <p>{card.bank}</p>
                <button>View Details →</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="cp-no-cards">No cards available in this category yet.</p>
      )}

      {/* CTA Section */}
      <div className="cp-cta">
        <h2>💳 Looking for more cards?</h2>
        <p>Explore all cards and offers to find the one that fits your lifestyle.</p>
        <button onClick={() => navigate("/cards")}>Explore All Cards</button>
      </div>

      {/* Why Choose Section */}
      <div className="cp-why-choose">
        <h2>Why Choose CredSpy?</h2>
        <div className="cp-why-grid">
          <div className="cp-why-item">
            <FaWallet size={30} color="#1d4ed8"/>
            <h3>Smart Comparison</h3>
            <p>Compare cards easily to find the best one for your needs.</p>
          </div>
          <div className="cp-why-item">
            <FaGift size={30} color="#1d4ed8"/>
            <h3>Exciting Rewards</h3>
            <p>Get cashback, points, and amazing offers from top banks.</p>
          </div>
          <div className="cp-why-item">
            <FaPlane size={30} color="#1d4ed8"/>
            <h3>Travel Benefits</h3>
            <p>Enjoy exclusive travel perks and lounge access worldwide.</p>
          </div>
          <div className="cp-why-item">
            <FaCoins size={30} color="#1d4ed8"/>
            <h3>Financial Insights</h3>
            <p>Expert tips to manage your finances and maximize benefits.</p>
          </div>
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="cp-suggestions">
        <h2>Suggestions for You</h2>
        <p>Based on your interest, we recommend these top picks:</p>
        <div className="cp-suggestion-grid">
          {cards.slice(0, 4).map((card, index) => (
            <div
              key={card._id}
              className="cp-suggestion-card"
              onClick={() => navigate(`/card/${card._id}`)}
            >
              <img src={card.image} alt={card.title} />
              {index === 0 && <span className="cp-badge">Top Pick</span>}
              <h4>{card.title}</h4>
              <p>{card.bank}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default CategoryPage;
