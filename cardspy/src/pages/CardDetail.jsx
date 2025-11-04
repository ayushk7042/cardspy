


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchCardById, fetchCards, addReview, fetchReviews } from "../api";
// import "./CardDetail.css";

// export default function CardDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [card, setCard] = useState(null);
//   const [allCards, setAllCards] = useState([]);
//   const [relatedCards, setRelatedCards] = useState([]);
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({ username: "", comment: "", rating: 5 });
//   const [activeTab, setActiveTab] = useState("description");
//   const [compareCardId, setCompareCardId] = useState("");

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const cardData = await fetchCardById(id);
//         setCard(cardData);

//         const cardsData = await fetchCards();
//         setAllCards(cardsData.filter((c) => c._id !== id));

//         const related = cardsData.filter(
//           (c) => c._id !== id && c.category?.name === cardData.category?.name
//         );
//         setRelatedCards(related);

//         const revData = await fetchReviews(id);
//         setReviews(revData);
//       } catch (err) {
//         console.error("Failed to load data:", err);
//       }
//     };
//     loadData();
//   }, [id]);

//   const handleAddReview = async (e) => {
//     e.preventDefault();
//     try {
//       const reviewToSend = {
//         username: newReview.username.trim(),
//         comment: newReview.comment.trim(),
//         rating: Number(newReview.rating),
//       };
//       const added = await addReview(id, reviewToSend);
//       setReviews([added, ...reviews]);
//       setNewReview({ username: "", comment: "", rating: 5 });
//     } catch (err) {
//       console.error("Failed to add review:", err.response?.data || err.message);
//     }
//   };

//   const handleCompare = () => {
//     if (compareCardId) navigate(`/compare/${id}/${compareCardId}`);
//   };

//   const handleCardClick = (cardId) => {
//     navigate(`/card/${cardId}`);
//   };

//   if (!card) return <p className="loading">Loading card...</p>;

//   return (
//     <div className="card-detail-container">
//       {/* Hero Section */}
//       <section className="card-hero-section">
//         <div className="card-image-wrapper">
//           <img
//             src={card.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"}
//             alt={card.title}
//           />
//         </div>
//         <div className="card-info">
//           <h1>{card.title}</h1>
//           <p><strong>Bank:</strong> {card.bank}</p>
//           <p><strong>Category:</strong> {card.category?.name}</p>

//           <div className="card-actions">
//             {card.applyLink && (
//               <a href={card.applyLink} target="_blank" rel="noopener noreferrer">
//                 <button className="apply-btn">Apply Now →</button>
//               </a>
//             )}

//             <div className="compare-section">
//               <select
//                 value={compareCardId}
//                 onChange={(e) => setCompareCardId(e.target.value)}
//               >
//                 <option value="">Select card to compare</option>
//                 {allCards.map((c) => (
//                   <option key={c._id} value={c._id}>{c.title}</option>
//                 ))}
//               </select>
//               <button onClick={handleCompare} className="compare-btn">Compare</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Feature Cards */}
//       <section className="feature-section">
//         {["rewards", "interestRate", "benefits", "offers"].map(
//           (field) =>
//             card[field] && (
//               <div key={field} className="feature-card">
//                 <h4>
//                   {field === "interestRate"
//                     ? "Interest Rate"
//                     : field.charAt(0).toUpperCase() + field.slice(1)}
//                 </h4>
//                 <p>{card[field]}</p>
//               </div>
//             )
//         )}
//       </section>

//       {/* Tabs */}
//       <section className="tab-section">
//         <div className="tab-header">
//           {["description", "benefits", "offers", "interest"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`tab-btn ${activeTab === tab ? "active" : ""}`}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>
//         <div className="tab-content">
//           {activeTab === "description" && <p>{card.description}</p>}
//           {activeTab === "benefits" && <p>{card.benefits || "No benefits available."}</p>}
//           {activeTab === "offers" && <p>{card.offers || "No offers available."}</p>}
//           {activeTab === "interest" && <p>{card.interestRate || "N/A"}</p>}
//         </div>
//       </section>

//       {/* Reviews */}
//       <section className="reviews-section">
//         <h3>User Reviews</h3>
//         <form onSubmit={handleAddReview} className="review-form">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={newReview.username}
//             onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
//             required
//           />
//           <textarea
//             placeholder="Comment"
//             value={newReview.comment}
//             onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//             required
//           />
//           <input
//             type="number"
//             min={1}
//             max={5}
//             value={newReview.rating}
//             onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
//           />
//           <button type="submit">Add Review</button>
//         </form>

//         <div className="review-list">
//           {reviews.length === 0 ? (
//             <p>No reviews yet.</p>
//           ) : (
//             reviews.map((r) => (
//               <div key={r._id} className="review-item">
//                 <p><strong>{r.username}</strong> ({r.rating}/5)</p>
//                 <p>{r.comment}</p>
//               </div>
//             ))
//           )}
//         </div>
//       </section>

//       {/* Related Cards */}
//       {relatedCards.length > 0 && (
//         <section className="related-section">
//           <h3>Related Cards</h3>
//           <div className="related-grid">
//             {relatedCards.map((c) => (
//               <div key={c._id} className="related-card" onClick={() => handleCardClick(c._id)}>
//                 <img src={c.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"} alt={c.title} />
//                 <h4>{c.title}</h4>
//                 <p>{c.bank}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCardById, fetchCards, addReview, fetchReviews } from "../api";
import "./CardDetail.css"; // CSS file with unique classes

export default function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [card, setCard] = useState(null);
  const [allCards, setAllCards] = useState([]);
  const [relatedCards, setRelatedCards] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ username: "", comment: "", rating: 5 });
  const [activeTab, setActiveTab] = useState("description");
  const [compareCardId, setCompareCardId] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const cardData = await fetchCardById(id);
        setCard(cardData);

        const cardsData = await fetchCards();
        setAllCards(cardsData.filter((c) => c._id !== id));

        const related = cardsData.filter(
          (c) => c._id !== id && c.category?.name === cardData.category?.name
        );
        setRelatedCards(related);

        const revData = await fetchReviews(id);
        setReviews(revData);
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    };
    loadData();
  }, [id]);

  const handleAddReview = async (e) => {
    e.preventDefault();
    try {
      const reviewToSend = {
        username: newReview.username.trim(),
        comment: newReview.comment.trim(),
        rating: Number(newReview.rating),
      };
      const added = await addReview(id, reviewToSend);
      setReviews([added, ...reviews]);
      setNewReview({ username: "", comment: "", rating: 5 });
    } catch (err) {
      console.error("Failed to add review:", err.response?.data || err.message);
    }
  };

  const handleCompare = () => {
    if (compareCardId) navigate(`/compare/${id}/${compareCardId}`);
  };

  const handleCardClick = (cardId) => {
    navigate(`/card/${cardId}`);
  };

  if (!card) return <p className="cd-loading">Loading card...</p>;

  return (
    <div className="cd-card-detail-container">
      {/* Hero Section */}
      <section className="cd-card-hero-section">
        <div className="cd-card-image-wrapper">
          <img
            src={card.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"}
            alt={card.title}
          />
        </div>
        <div className="cd-card-info">
          <h1>{card.title}</h1>
          <p><strong>Bank:</strong> {card.bank}</p>
          <p><strong>Category:</strong> {card.category?.name}</p>

          <div className="cd-card-actions">
            {card.applyLink && (
              <a href={card.applyLink} target="_blank" rel="noopener noreferrer">
                <button className="cd-apply-btn">Apply Now →</button>
              </a>
            )}

            <div className="cd-compare-section">
              <select
                value={compareCardId}
                onChange={(e) => setCompareCardId(e.target.value)}
              >
                <option value="">Select card to compare</option>
                {allCards.map((c) => (
                  <option key={c._id} value={c._id}>{c.title}</option>
                ))}
              </select>
              <button onClick={handleCompare} className="cd-compare-btn">Compare</button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      {/* <section className="cd-feature-section">
        {["rewards", "interestRate", "benefits", "offers"].map(
          (field) =>
            card[field] && (
              <div key={field} className="cd-feature-card">
                <h4>
                  {field === "interestRate"
                    ? "Interest Rate"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </h4>
                <p>{card[field]}</p>
              </div>
            )
        )}
      </section> */}


     <section className="cd-feature-section">
  {["rewards","interestRate","benefits","offers"].map((field) =>
    card[field] && (
      <div key={field} className="cd-feature-pill">
        <div className="cd-feature-icon">
          {field === "rewards" && "🎁"}
          {field === "interestRate" && "💰"}
          {field === "benefits" && "✅"}
          {field === "offers" && "💳"}
        </div>
        <div className="cd-feature-text">
          <h4>{field === "interestRate" ? "Interest Rate" : field.charAt(0).toUpperCase() + field.slice(1)}</h4>
          <p>{card[field]}</p>
        </div>
      </div>
    )
  )}
</section>



      {/* Tabs */}
      <section className="cd-tab-section">
        <div className="cd-tab-header">
          {["description", "benefits", "offers", "interest"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cd-tab-btn ${activeTab === tab ? "cd-active" : ""}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="cd-tab-content">
          {activeTab === "description" && <p>{card.description}</p>}
          {activeTab === "benefits" && <p>{card.benefits || "No benefits available."}</p>}
          {activeTab === "offers" && <p>{card.offers || "No offers available."}</p>}
          {activeTab === "interest" && <p>{card.interestRate || "N/A"}</p>}
        </div>
      </section>

      {/* Reviews */}
      <section className="cd-reviews-section">
        <h3>User Reviews</h3>
        <form onSubmit={handleAddReview} className="cd-review-form">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.username}
            onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
            required
          />
          <textarea
            placeholder="Comment"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            required
          />
          <input
            type="number"
            min={1}
            max={5}
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
          />
          <button type="submit" className="cd-add-review-btn">Add Review</button>
        </form>

        <div className="cd-review-list">
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            reviews.map((r) => (
              <div key={r._id} className="cd-review-item">
                <p><strong>{r.username}</strong> ({r.rating}/5)</p>
                <p>{r.comment}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Related Cards */}
      {relatedCards.length > 0 && (
        <section className="cd-related-section">
          <h3>Related Cards</h3>
          <div className="cd-related-grid">
            {relatedCards.map((c) => (
              <div key={c._id} className="cd-related-card" onClick={() => handleCardClick(c._id)}>
                <img src={c.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"} alt={c.title} />
                <h4>{c.title}</h4>
                <p>{c.bank}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
