

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
//   const [compareList, setCompareList] = useState([]);
//   const [showCompare, setShowCompare] = useState(false);

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

//   const handleCardClick = (cardId) => navigate(`/card/${cardId}`);

//   const toggleCompare = (card) => {
//     const exists = compareList.find((c) => c._id === card._id);
//     if (exists) setCompareList(compareList.filter((c) => c._id !== card._id));
//     else if (compareList.length < 2) setCompareList([...compareList, card]);
//     else alert("You can compare only 2 cards at a time.");
//   };

//   const handleResetCompare = () => {
//     setCompareList([]);
//     setShowCompare(false);
//   };

//   if (loading) return <div className="loading">Loading bank cards...</div>;
//   if (error)
//     return (
//       <div className="error-page">
//         <p>{error}</p>
//         <button onClick={() => navigate(-1)}>Go Back</button>
//       </div>
//     );

//   return (
//     <div className="bank-page">
//       {/* Bank Hero Section */}
//       <section className="bank-hero-section">
//         <div className="hero-left">
//           <img
//             src={bank.logo || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
//             alt={bank.name}
//             className="bank-logo"
//           />
//           <h1>{bank.name} Credit Cards</h1>
//           <p>
//             Explore a curated selection of {bank.name} credit cards with exclusive features, rewards,
//             and offers tailored for you.
//           </p>
//           <div className="bank-hero-buttons">
//             <button onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}>
//               Explore Cards
//             </button>
//             <button onClick={() => setShowCompare(true)}>
//               Compare Cards ({compareList.length})
//             </button>
//           </div>
//         </div>
//         <div className="hero-right">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
//             alt="Bank Illustration"
//             className="hero-image"
//           />
//         </div>
//       </section>

//       {/* Bank Features Section */}
//       <section className="bank-features">
//         <h2>Why Choose {bank.name}?</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <span>💳</span>
//             <h3>Wide Range of Cards</h3>
//             <p>From cashback to travel cards, choose what fits your lifestyle.</p>
//           </div>
//           <div className="feature-card">
//             <span>🎁</span>
//             <h3>Exclusive Rewards</h3>
//             <p>Earn points, cashback, and benefits with every swipe.</p>
//           </div>
//           <div className="feature-card">
//             <span>🛡️</span>
//             <h3>Secure Transactions</h3>
//             <p>State-of-the-art security features keep your payments safe.</p>
//           </div>
//           <div className="feature-card">
//             <span>⚡</span>
//             <h3>Instant Approval</h3>
//             <p>Fast verification process to get your card quickly.</p>
//           </div>
//         </div>
//       </section>

//       {/* Cards Section */}
//       <section className="bank-cards">
//         <h2>Available Cards</h2>
//         {cards.length === 0 ? (
//           <p className="no-cards">No cards available for this bank.</p>
//         ) : (
//           <div className="cards-grid">
//             {cards.map((card) => (
//               <div key={card._id} className="card-item">
//                 <div className="card-image" onClick={() => handleCardClick(card._id)}>
//                   <img
//                     src={card.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"}
//                     alt={card.title}
//                   />
//                 </div>
//                 <div className="card-content">
//                   <h3>{card.title}</h3>
//                   <p>{card.bank}</p>
//                   <div className="card-actions">
//                     <button
//                       className={`compare-btn ${compareList.find((c) => c._id === card._id) ? "selected" : ""}`}
//                       onClick={() => toggleCompare(card)}
//                     >
//                       {compareList.find((c) => c._id === card._id) ? "Added ✓" : "Compare"}
//                     </button>
//                     <button className="view-btn" onClick={() => handleCardClick(card._id)}>
//                       View →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Compare Popup */}
//       {showCompare && (
//         <div className="compare-popup">
//           <div className="compare-box">
//             <h2>Compare Cards</h2>
//             <div className="compare-grid">
//               {compareList.map((card) => (
//                 <div key={card._id} className="compare-card">
//                   <img src={card.image} alt={card.title} />
//                   <h3>{card.title}</h3>
//                   <p>{card.bank}</p>
//                   <ul>
//                     <li>💸 Annual Fee: {card.fee || "₹499"}</li>
//                     <li>🎁 Rewards: {card.rewards || "2X on dining & travel"}</li>
//                     <li>⭐ Rating: {card.rating || "4.5/5"}</li>
//                   </ul>
//                 </div>
//               ))}
//             </div>
//             <div className="compare-actions">
//               <button onClick={handleResetCompare} className="reset-btn">
//                 Reset
//               </button>
//               <button onClick={() => setShowCompare(false)} className="close-btn">
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBankById } from "../api.js";
import "./BankPage.css"; // CSS file me unique names use karenge

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

  const handleCardClick = (cardId) => navigate(`/card/${cardId}`);

  const toggleCompare = (card) => {
    const exists = compareList.find((c) => c._id === card._id);
    if (exists) setCompareList(compareList.filter((c) => c._id !== card._id));
    else if (compareList.length < 2) setCompareList([...compareList, card]);
    else alert("You can compare only 2 cards at a time.");
  };

  const handleResetCompare = () => {
    setCompareList([]);
    setShowCompare(false);
  };

  if (loading) return <div className="bp-loading">Loading bank cards...</div>;
  if (error)
    return (
      <div className="bp-error-page">
        <p>{error}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );

  return (
    <div className="bp-bank-page">
      {/* Bank Hero Section */}
      <section className="bp-bank-hero-section">
        <div className="bp-hero-left">
          <img
            src={bank.logo || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            alt={bank.name}
            className="bp-bank-logo"
          />
          <h1>{bank.name} Credit Cards</h1>
          <p>
            Explore a curated selection of {bank.name} credit cards with exclusive features, rewards,
            and offers tailored for you.
          </p>
          <div className="bp-bank-hero-buttons">
            <button onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}>
              Explore Cards
            </button>
            <button onClick={() => setShowCompare(true)}>
              Compare Cards ({compareList.length})
            </button>
          </div>
        </div>
        <div className="bp-hero-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
            alt="Bank Illustration"
            className="bp-hero-image"
          />
        </div>
      </section>

      {/* Bank Features Section */}
      <section className="bp-bank-features">
        <h2>Why Choose {bank.name}?</h2>
        <div className="bp-features-grid">
          <div className="bp-feature-card">
            <span>💳</span>
            <h3>Wide Range of Cards</h3>
            <p>From cashback to travel cards, choose what fits your lifestyle.</p>
          </div>
          <div className="bp-feature-card">
            <span>🎁</span>
            <h3>Exclusive Rewards</h3>
            <p>Earn points, cashback, and benefits with every swipe.</p>
          </div>
          <div className="bp-feature-card">
            <span>🛡️</span>
            <h3>Secure Transactions</h3>
            <p>State-of-the-art security features keep your payments safe.</p>
          </div>
          <div className="bp-feature-card">
            <span>⚡</span>
            <h3>Instant Approval</h3>
            <p>Fast verification process to get your card quickly.</p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bp-bank-cards">
        <h2>Available Cards</h2>
        {cards.length === 0 ? (
          <p className="bp-no-cards">No cards available for this bank.</p>
        ) : (
          <div className="bp-cards-grid">
            {cards.map((card) => (
              <div key={card._id} className="bp-card-item">
                <div className="bp-card-image" onClick={() => handleCardClick(card._id)}>
                  <img
                    src={card.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"}
                    alt={card.title}
                  />
                </div>
                <div className="bp-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.bank}</p>
                  <div className="bp-card-actions">
                    <button
                      className={`bp-compare-btn ${compareList.find((c) => c._id === card._id) ? "bp-selected" : ""}`}
                      onClick={() => toggleCompare(card)}
                    >
                      {compareList.find((c) => c._id === card._id) ? "Added ✓" : "Compare"}
                    </button>
                    <button className="bp-view-btn" onClick={() => handleCardClick(card._id)}>
                      View →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Compare Popup */}
      {showCompare && (
        <div className="bp-compare-popup">
          <div className="bp-compare-box">
            <h2>Compare Cards</h2>
            <div className="bp-compare-grid">
              {compareList.map((card) => (
                <div key={card._id} className="bp-compare-card">
                  <img src={card.image} alt={card.title} />
                  <h3>{card.title}</h3>
                  <p>{card.bank}</p>
                  <ul>
                    <li>💸 Annual Fee: {card.fee || "₹499"}</li>
                    <li>🎁 Rewards: {card.rewards || "2X on dining & travel"}</li>
                    <li>⭐ Rating: {card.rating || "4.5/5"}</li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="bp-compare-actions">
              <button onClick={handleResetCompare} className="bp-reset-btn">
                Reset
              </button>
              <button onClick={() => setShowCompare(false)} className="bp-close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
