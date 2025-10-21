// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchCards } from "../api.js";
// import "./NewCardsPage.css";

// export default function NewCardsPage() {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState("newest");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadCards = async () => {
//       try {
//         const allCards = await fetchCards();
//         // Filter new cards (example: last 90 days)
//         const newCards = allCards.filter((card) => {
//           const createdDate = new Date(card.createdAt);
//           const ninetyDaysAgo = new Date();
//           ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
//           return createdDate >= ninetyDaysAgo;
//         });
//         setCards(newCards);
//       } catch (err) {
//         console.error("Failed to fetch new cards:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCards();
//   }, []);

//   const handleCardClick = (cardId) => {
//     navigate(`/card/${cardId}`);
//   };

//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//     let sorted = [...cards];
//     if (e.target.value === "newest") {
//       sorted.sort(
//         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//       );
//     } else if (e.target.value === "top-rated") {
//       sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
//     } else if (e.target.value === "highest-fee") {
//       sorted.sort((a, b) => (b.fee || 0) - (a.fee || 0));
//     }
//     setCards(sorted);
//   };

//   return (
//     <div className="new-cards-page">
//       {/* Hero Section */}
//       <section className="new-cards-hero">
//         <div className="hero-content">
//           <h1>✨ Discover Newly Launched Credit Cards</h1>
//           <p>
//             Explore the latest credit cards in India. Compare features, rewards,
//             and benefits to find your perfect fit.
//           </p>
//         </div>
//       </section>

//       {/* Sort & Filter */}
//       <div className="sort-filter">
//         <label>Sort by: </label>
//         <select value={sortBy} onChange={handleSortChange}>
//           <option value="newest">Newest</option>
//           <option value="top-rated">Top Rated</option>
//           <option value="highest-fee">Highest Fee</option>
//         </select>
//       </div>

//       {/* Cards Grid */}
//       {loading ? (
//         <p className="loading">Loading new cards...</p>
//       ) : cards.length === 0 ? (
//         <p className="no-cards">No new cards available right now.</p>
//       ) : (
//         <div className="cards-grid">
//           {cards.map((card) => (
//             <div
//               key={card._id}
//               className="card-item"
//               onClick={() => handleCardClick(card._id)}
//             >
//               <div className="card-image">
//                 <img
//                   src={card.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"}
//                   alt={card.title}
//                 />
//                 <span className="badge">New</span>
//               </div>
//               <div className="card-content">
//                 <h3>{card.title}</h3>
//                 <p>{card.bank}</p>
//                 <ul>
//                   <li>💸 Fee: {card.fee || "₹499"}</li>
//                   <li>🎁 Rewards: {card.rewards || "2X on dining & travel"}</li>
//                   <li>⭐ Rating: {card.rating || "4.5/5"}</li>
//                 </ul>
//                 <button className="view-btn">View Details →</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCards } from "../api.js";
import "./NewCardsPage.css";

export default function NewCardsPage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCards, setSelectedCards] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadCards = async () => {
      try {
        const allCards = await fetchCards();
        const newCards = allCards.filter((card) => {
          const createdDate = new Date(card.createdAt);
          const ninetyDaysAgo = new Date();
          ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
          return createdDate >= ninetyDaysAgo;
        });
        setCards(newCards);
      } catch (err) {
        console.error("Failed to fetch new cards:", err);
      } finally {
        setLoading(false);
      }
    };
    loadCards();
  }, []);

  const handleCardClick = (cardId) => navigate(`/card/${cardId}`);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    let sorted = [...cards];
    if (e.target.value === "newest") {
      sorted.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (e.target.value === "top-rated") {
      sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (e.target.value === "highest-fee") {
      sorted.sort((a, b) => (b.fee || 0) - (a.fee || 0));
    }
    setCards(sorted);
  };

  const toggleSelectCard = (card) => {
    if (selectedCards.find((c) => c._id === card._id)) {
      setSelectedCards(selectedCards.filter((c) => c._id !== card._id));
    } else if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  return (
    <div className="new-cards-page">
      {/* Hero Section */}
      <section className="new-cards-hero">
        <div className="hero-content">
          <h1>✨ Discover Newly Launched Credit Cards</h1>
          <p>
            Explore the latest credit cards in India. Compare features, rewards,
            and benefits to find your perfect fit.
          </p>
        </div>
      </section>

      {/* Sort & Filter */}
      <div className="sort-filter">
        <label>Sort by: </label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="newest">Newest</option>
          <option value="top-rated">Top Rated</option>
          <option value="highest-fee">Highest Fee</option>
        </select>
      </div>

      {/* Cards Grid */}
      {loading ? (
        <p className="loading">Loading new cards...</p>
      ) : cards.length === 0 ? (
        <p className="no-cards">No new cards available right now.</p>
      ) : (
        <div className="cards-grid">
          {cards.map((card) => (
            <div
              key={card._id}
              className={`card-item ${
                selectedCards.find((c) => c._id === card._id) ? "selected" : ""
              }`}
            >
              <div className="card-image" onClick={() => handleCardClick(card._id)}>
                <img
                  src={card.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"}
                  alt={card.title}
                />
                <span className="badge">New</span>
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.bank}</p>
                <ul>
                  <li>💸 Fee: {card.fee || "₹499"}</li>
                  <li>🎁 Rewards: {card.rewards || "2X on dining & travel"}</li>
                  <li>⭐ Rating: {card.rating || "4.5/5"}</li>
                </ul>
                <div className="card-actions">
                  <button className="view-btn" onClick={() => handleCardClick(card._id)}>
                    View Details →
                  </button>
                  <label>
                    <input
                      type="checkbox"
                      checked={!!selectedCards.find((c) => c._id === card._id)}
                      onChange={() => toggleSelectCard(card)}
                    />{" "}
                    Compare
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Compare Button */}
      {selectedCards.length >= 2 && (
        <div className="compare-btn-container">
          <button onClick={() => setShowCompare(true)}>
            Compare {selectedCards.length} Cards
          </button>
        </div>
      )}

      {/* Compare Modal */}
      {showCompare && (
        <div className="compare-modal">
          <div className="compare-content">
            <h2>Compare Selected Cards</h2>
            <button className="close-modal" onClick={() => setShowCompare(false)}>
              ✖
            </button>
            <div className="compare-grid">
              {selectedCards.map((card) => (
                <div key={card._id} className="compare-card">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="compare-card-image"
                  />
                  <h3>{card.title}</h3>
                  <p>{card.bank}</p>
                  <ul>
                    <li>💸 Fee: {card.fee || "₹499"}</li>
                    <li>🎁 Rewards: {card.rewards || "2X on dining & travel"}</li>
                    <li>⭐ Rating: {card.rating || "4.5/5"}</li>
                    <li>📅 Launched: {new Date(card.createdAt).toLocaleDateString()}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
