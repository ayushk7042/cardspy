
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchBankById } from "../api.js";
// import "./BankPage.css";

// export default function BankPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [bank, setBank] = useState(null);
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const loadBank = async () => {
//     try {
//       setLoading(true);
//       const data = await fetchBankById(id);
//       setBank(data);
//       setCards(data.cards || []);
//     } catch (err) {
//       console.error("Failed to fetch bank:", err);
//       setError("Bank not found or server error.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadBank();
//   }, [id]);

//   const handleCardClick = (cardId) => {
//     navigate(`/card/${cardId}`);
//   };

//   if (loading) {
//     return (
//       <div className="loading-page">
//         <p>Loading bank details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="error-page">
//         <p>{error}</p>
//         <button onClick={() => navigate(-1)}>Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="bank-page">
//       {/* Bank Header */}
//       <section className="bank-header">
//         <img
//           src={bank.logo || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
//           alt={bank.name}
//           className="bank-logo"
//         />
//         <h1>{bank.name}</h1>
//         {bank.description && <p>{bank.description}</p>}
//       </section>

//       {/* Bank Cards */}
//       <section className="bank-cards">
//         <h2>Credit Cards from {bank.name}</h2>
//         {cards.length === 0 ? (
//           <p>No cards available for this bank.</p>
//         ) : (
//           <div className="cards-grid">
//             {cards.map((card) => (
//               <div
//                 key={card._id}
//                 className="card-item"
//                 onClick={() => handleCardClick(card._id)}
//               >
//                 <div className="card-image">
//                   <img src={card.image} alt={card.title} />
//                 </div>
//                 <div className="card-info">
//                   <h3>{card.title}</h3>
//                   <p className="bank-tag">{card.bank}</p>
//                   <button className="view-btn">View Details →</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBankById } from "../api.js";
import "./BankPage.css";

export default function BankPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bank, setBank] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const loadBank = async () => {
    try {
      setLoading(true);
      const data = await fetchBankById(id);
      setBank(data);
      setCards(data.cards || []);
    } catch (err) {
      console.error("Failed to fetch bank:", err);
      setError("Bank not found or server error.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBank();
  }, [id]);

  const handleCardClick = (cardId) => {
    navigate(`/card/${cardId}`);
  };

  const toggleCompare = (card) => {
    const exists = compareList.find((c) => c._id === card._id);
    if (exists) {
      setCompareList(compareList.filter((c) => c._id !== card._id));
    } else if (compareList.length < 2) {
      setCompareList([...compareList, card]);
    } else {
      alert("You can compare only 2 cards at a time.");
    }
  };

  const handleResetCompare = () => {
    setCompareList([]);
    setShowCompare(false);
  };

  if (loading) {
    return (
      <div className="loading-page">
        <div className="loader"></div>
        <p>Loading bank details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-page">
        <p>{error}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="bank-page">
      {/* 🏦 Bank Hero Section */}
      <section className="bank-hero">
        <div className="bank-hero-content">
          <img
            src={
              bank.logo || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt={bank.name}
            className="bank-hero-logo"
          />
          <div>
            <h1>{bank.name}</h1>
            <p className="bank-tagline">
              {bank.tagline ||
                "Empowering customers with seamless credit and banking solutions."}
            </p>
          </div>
        </div>
      </section>

      {/* 🧾 Bank Overview */}
      <section className="bank-overview">
        <div className="bank-info-card">
          <h2>About {bank.name}</h2>
          <p>{bank.description || "Information not available."}</p>
          <div className="bank-stats">
            <div>
              <h4>Founded</h4>
              <p>{bank.founded || "—"}</p>
            </div>
            <div>
              <h4>Headquarters</h4>
              <p>{bank.headquarters || "—"}</p>
            </div>
            <div>
              <h4>Rating</h4>
              <p>⭐ {bank.rating || "4.5/5"}</p>
            </div>
            <div>
              <h4>Website</h4>
              <a
                href={bank.website || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 💳 Bank Cards */}
      <section className="bank-cards">
        <div className="section-header">
          <h2>Credit Cards by {bank.name}</h2>
          {compareList.length > 0 && (
            <button
              className="compare-btn"
              onClick={() => setShowCompare(true)}
            >
              Compare ({compareList.length})
            </button>
          )}
        </div>

        {cards.length === 0 ? (
          <p>No cards available for this bank.</p>
        ) : (
          <div className="cards-grid">
            {cards.map((card) => (
              <div key={card._id} className="card-item">
                <div
                  className="card-image"
                  onClick={() => handleCardClick(card._id)}
                >
                  <img
                    src={
                      card.image ||
                      "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
                    }
                    alt={card.title}
                  />
                </div>
                <div className="card-info">
                  <h3>{card.title}</h3>
                  <p>{card.bank}</p>
                  <div className="card-actions">
                    <button
                      className={`compare-select ${
                        compareList.find((c) => c._id === card._id)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => toggleCompare(card)}
                    >
                      {compareList.find((c) => c._id === card._id)
                        ? "Added ✓"
                        : "Compare"}
                    </button>
                    <button
                      className="view-btn"
                      onClick={() => handleCardClick(card._id)}
                    >
                      View →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 🎁 Offers Section */}
      <section className="bank-offers">
        <h2>Exclusive Offers from {bank.name}</h2>
        <div className="offers-grid">
          <div className="offer-card">
            <h3>🎉 Welcome Bonus</h3>
            <p>Earn 2000 reward points on your first transaction.</p>
          </div>
          <div className="offer-card">
            <h3>✈️ Travel Rewards</h3>
            <p>Get 10% cashback on flight & hotel bookings.</p>
          </div>
          <div className="offer-card">
            <h3>🛍️ Shopping Perks</h3>
            <p>Extra 5% cashback on partner brands and stores.</p>
          </div>
        </div>
      </section>

      {/* 🧩 Compare Popup */}
      {showCompare && (
        <div className="compare-popup">
          <div className="compare-box">
            <h2>Compare Cards</h2>
            <div className="compare-grid">
              {compareList.map((card) => (
                <div key={card._id} className="compare-card">
                  <img
                    src={
                      card.image ||
                      "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
                    }
                    alt={card.title}
                  />
                  <h3>{card.title}</h3>
                  <p>{card.bank}</p>
                  <ul>
                    <li>💸 Annual Fee: {card.fee || "₹499"}</li>
                    <li>🎁 Rewards: {card.rewards || "2X on dining & travel"}</li>
                    <li>⭐ Rating: {card.rating || "4.5/5"}</li>
                    <li>📅 Joining Bonus: {card.joiningBonus || "Welcome points"}</li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="compare-actions">
              <button onClick={handleResetCompare} className="reset-btn">
                Reset
              </button>
              <button onClick={() => setShowCompare(false)} className="close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
