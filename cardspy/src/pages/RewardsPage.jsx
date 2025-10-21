// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchCards, fetchBanks, fetchCategories } from "../api.js";
// import "./RewardsPage.css";

// export default function RewardsPage() {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCards, setSelectedCards] = useState([]);
//   const [sortBy, setSortBy] = useState("top-rewards");
//   const [banks, setBanks] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [showCompare, setShowCompare] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const allCards = await fetchCards();
//         const rewardsCards = allCards.filter((c) =>
//           c.category?.name.toLowerCase().includes("reward")
//         );
//         setCards(rewardsCards);

//         const banksData = await fetchBanks();
//         setBanks(banksData);

//         const categoriesData = await fetchCategories();
//         setCategories(categoriesData);
//       } catch (err) {
//         console.error("Error fetching rewards cards:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   const handleCardClick = (cardId) => navigate(`/card/${cardId}`);

//   const toggleSelectCard = (card) => {
//     if (selectedCards.find((c) => c._id === card._id)) {
//       setSelectedCards(selectedCards.filter((c) => c._id !== card._id));
//     } else if (selectedCards.length < 3) {
//       setSelectedCards([...selectedCards, card]);
//     }
//   };

//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//     let sorted = [...cards];
//     if (e.target.value === "top-rewards") {
//       sorted.sort((a, b) => (b.rewardsScore || 0) - (a.rewardsScore || 0));
//     } else if (e.target.value === "lowest-fee") {
//       sorted.sort((a, b) => (a.fee || 0) - (b.fee || 0));
//     } else if (e.target.value === "highest-fee") {
//       sorted.sort((a, b) => (b.fee || 0) - (a.fee || 0));
//     }
//     setCards(sorted);
//   };

//   return (
//     <div className="rewards-page">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>🏆 Top Rewards Credit Cards</h1>
//           <p>
//             Maximize your benefits with the best rewards credit cards in India.
//             Compare points, cashback, and perks to find your ideal card.
//           </p>
//         </div>
//       </section>

//       {/* Sort */}
//       <div className="sort-filter">
//         <label>Sort by: </label>
//         <select value={sortBy} onChange={handleSortChange}>
//           <option value="top-rewards">Top Rewards</option>
//           <option value="lowest-fee">Lowest Fee</option>
//           <option value="highest-fee">Highest Fee</option>
//         </select>
//       </div>

//       {/* Cards Grid */}
//       {loading ? (
//         <p className="loading">Loading rewards cards...</p>
//       ) : cards.length === 0 ? (
//         <p className="no-cards">No rewards cards available.</p>
//       ) : (
//         <div className="cards-grid">
//           {cards.map((card) => (
//             <div
//               key={card._id}
//               className={`card-item ${
//                 selectedCards.find((c) => c._id === card._id) ? "selected" : ""
//               }`}
//             >
//               <div className="card-image" onClick={() => handleCardClick(card._id)}>
//                 <img
//                   src={card.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"}
//                   alt={card.title}
//                 />
//                 <span className="badge">Reward</span>
//               </div>
//               <div className="card-content">
//                 <h3>{card.title}</h3>
//                 <p>{card.bank}</p>
//                 <ul>
//                   <li>💸 Fee: {card.fee || "₹499"}</li>
//                   <li>🎁 Rewards: {card.rewards || "2X points on all spends"}</li>
//                   <li>⭐ Rating: {card.rating || "4.5/5"}</li>
//                 </ul>
//                 <div className="card-actions">
//                   <button className="view-btn" onClick={() => handleCardClick(card._id)}>
//                     View Details →
//                   </button>
//                   <label>
//                     <input
//                       type="checkbox"
//                       checked={!!selectedCards.find((c) => c._id === card._id)}
//                       onChange={() => toggleSelectCard(card)}
//                     />{" "}
//                     Compare
//                   </label>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Compare Button */}
//       {selectedCards.length >= 2 && (
//         <div className="compare-btn-container">
//           <button onClick={() => setShowCompare(true)}>
//             Compare {selectedCards.length} Cards
//           </button>
//         </div>
//       )}

//       {/* Compare Modal */}
//       {showCompare && (
//         <div className="compare-modal">
//           <div className="compare-content">
//             <h2>Compare Selected Cards</h2>
//             <button className="close-modal" onClick={() => setShowCompare(false)}>
//               ✖
//             </button>
//             <div className="compare-grid">
//               {selectedCards.map((card) => (
//                 <div key={card._id} className="compare-card">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="compare-card-image"
//                   />
//                   <h3>{card.title}</h3>
//                   <p>{card.bank}</p>
//                   <ul>
//                     <li>💸 Fee: {card.fee || "₹499"}</li>
//                     <li>🎁 Rewards: {card.rewards || "2X points on all spends"}</li>
//                     <li>⭐ Rating: {card.rating || "4.5/5"}</li>
//                     <li>📅 Launched: {new Date(card.createdAt).toLocaleDateString()}</li>
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { fetchBanks, fetchCards } from "../api";
import { useNavigate } from "react-router-dom";
import "./RewardsPage.css";

export default function RewardsPage() {
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const bankData = await fetchBanks();
        setBanks(bankData);

        const cardsData = await fetchCards();
        setCards(cardsData);
        setFilteredCards(cardsData); // initially show all
      } catch (err) {
        console.error("Failed to fetch banks or cards:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Filter cards based on selected bank
  useEffect(() => {
    if (!selectedBank) {
      setFilteredCards(cards);
    } else {
      const filtered = cards.filter(
        (card) => card.bank?._id === selectedBank && card.rewards
      );
      setFilteredCards(filtered);
    }
  }, [selectedBank, cards]);

  const handleCardClick = (cardId) => {
    navigate(`/card/${cardId}`);
  };

  if (loading) return <p className="loading">Loading rewards...</p>;

  return (
    <div className="rewards-page">

      {/* Hero Section */}
      {/* <section className="hero-section">
        <h1>🏆 Top Rewards Credit Cards</h1>
        <p>Select a bank to view its reward cards.</p>
      </section> */}
     {/* Hero Section */}
<section className="hero-section">
  <div className="hero-content">
    <div className="hero-icon">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" 
        alt="Rewards Icon" 
      />
    </div>
    <div className="hero-text">
      <h1>Top Rewards Credit Cards</h1>
      <p>Explore the best reward cards from leading banks and maximize your benefits!</p>
    </div>
  </div>
</section>


      {/* Bank Filter */}
      <section className="filter-section">
        <label>Select Bank:</label>
        <select
          value={selectedBank}
          onChange={(e) => setSelectedBank(e.target.value)}
        >
          <option value="">All Banks</option>
          {banks.map((bank) => (
            <option key={bank._id} value={bank._id}>
              {bank.name}
            </option>
          ))}
        </select>
      </section>

      {/* Rewards Cards Grid */}
      <section className="cards-section">
        {filteredCards.length === 0 ? (
          <p className="no-cards">No reward cards available for this bank.</p>
        ) : (
          <div className="cards-grid">
            {filteredCards.map((card) => (
              <div
                key={card._id}
                className="card-item"
                onClick={() => handleCardClick(card._id)}
              >
                <div className="card-image">
                  <img
                    src={
                      card.image ||
                      "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
                    }
                    alt={card.title}
                  />
                  <span className="badge">Reward</span>
                </div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.bank?.name}</p>
                  <ul>
                    {card.rewards?.map((r, i) => (
                      <li key={i}>• {r}</li>
                    ))}
                  </ul>
                  <button className="view-btn">View Details →</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

