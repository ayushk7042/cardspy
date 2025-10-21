
// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { fetchCardById, fetchCards, addReview, fetchReviews } from "../api";
// // import "./CardDetail.css";

// // export default function CardDetail() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const [card, setCard] = useState(null);
// //   const [allCards, setAllCards] = useState([]);
// //   const [reviews, setReviews] = useState([]);
// //   const [newReview, setNewReview] = useState({ username: "", comment: "", rating: 5 });
// //   const [activeTab, setActiveTab] = useState("description");
// //   const [compareCardId, setCompareCardId] = useState("");

// //   useEffect(() => {
// //     const loadData = async () => {
// //       try {
// //         const cardData = await fetchCardById(id);
// //         setCard(cardData);

// //         const cardsData = await fetchCards();
// //         setAllCards(cardsData.filter((c) => c._id !== id));

// //         const revData = await fetchReviews(id);
// //         setReviews(revData);
// //       } catch (err) {
// //         console.error("Failed to load data:", err);
// //       }
// //     };
// //     loadData();
// //   }, [id]);

// //   const handleAddReview = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const reviewToSend = {
// //         username: newReview.username.trim(),
// //         comment: newReview.comment.trim(),
// //         rating: Number(newReview.rating),
// //       };

// //       console.log("📤 Sending review:", reviewToSend);

// //       const added = await addReview(id, reviewToSend);
// //       setReviews([added, ...reviews]);
// //       setNewReview({ username: "", comment: "", rating: 5 });
// //     } catch (err) {
// //       console.error("❌ Failed to add review:", err.response?.data || err.message);
// //     }
// //   };

// //   const handleCompare = () => {
// //     if (compareCardId) navigate(`/compare/${id}/${compareCardId}`);
// //   };

// //   if (!card) return <p>Loading card...</p>;

// //   return (
// //     <div className="card-detail-page">
// //       {/* Hero */}
// //       <div className="card-hero">
// //         <div className="card-hero-left">
// //           <img src={card.image} alt={card.title} className="card-image" />
// //         </div>
// //         <div className="card-hero-right">
// //           <h1>{card.title}</h1>
// //           <p>
// //             <strong>Bank:</strong> {card.bank}
// //           </p>
// //           <p>
// //             <strong>Category:</strong> {card.category?.name}
// //           </p>
// //           <div className="card-buttons">
// //             {card.applyLink && (
// //               <a href={card.applyLink} target="_blank" rel="noopener noreferrer">
// //                 <button className="apply-btn">Apply Now →</button>
// //               </a>
// //             )}
// //           </div>
// //           {/* Compare */}
// //           <div className="compare-section">
// //             <select value={compareCardId} onChange={(e) => setCompareCardId(e.target.value)}>
// //               <option value="">Select card to compare</option>
// //               {allCards.map((c) => (
// //                 <option key={c._id} value={c._id}>
// //                   {c.title}
// //                 </option>
// //               ))}
// //             </select>
// //             <button onClick={handleCompare}>Compare Now</button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Features */}
// //       <section className="card-features">
// //         {card.rewards && (
// //           <div>
// //             <h4>Rewards</h4>
// //             <p>{card.rewards}</p>
// //           </div>
// //         )}
// //         {card.interestRate && (
// //           <div>
// //             <h4>Interest Rate</h4>
// //             <p>{card.interestRate}</p>
// //           </div>
// //         )}
// //         {card.benefits && (
// //           <div>
// //             <h4>Benefits</h4>
// //             <p>{card.benefits}</p>
// //           </div>
// //         )}
// //         {card.offers && (
// //           <div>
// //             <h4>Offers</h4>
// //             <p>{card.offers}</p>
// //           </div>
// //         )}
// //       </section>

// //       {/* Tabs */}
// //       <section className="card-tabs">
// //         <div className="tabs-header">
// //           {["description", "benefits", "offers", "interest"].map((tab) => (
// //             <button
// //               key={tab}
// //               className={activeTab === tab ? "active-tab" : ""}
// //               onClick={() => setActiveTab(tab)}
// //             >
// //               {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //             </button>
// //           ))}
// //         </div>
// //         <div className="tabs-content">
// //           {activeTab === "description" && <p>{card.description}</p>}
// //           {activeTab === "benefits" && <p>{card.benefits || "No benefits"}</p>}
// //           {activeTab === "offers" && <p>{card.offers || "No offers"}</p>}
// //           {activeTab === "interest" && <p>{card.interestRate || "N/A"}</p>}
// //         </div>
// //       </section>

// //       {/* Reviews */}
// //       <section className="card-reviews">
// //         <h3>User Reviews</h3>
// //         <form onSubmit={handleAddReview} className="review-form">
// //           <input
// //             type="text"
// //             placeholder="Your Name"
// //             value={newReview.username}
// //             onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
// //             required
// //           />
// //           <textarea
// //             placeholder="Comment"
// //             value={newReview.comment}
// //             onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
// //             required
// //           />
// //           <input
// //             type="number"
// //             min={1}
// //             max={5}
// //             value={newReview.rating}
// //             onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
// //           />
// //           <button type="submit">Add Review</button>
// //         </form>
// //         <div className="reviews-list">
// //           {reviews.length === 0 ? (
// //             <p>No reviews yet.</p>
// //           ) : (
// //             reviews.map((r) => (
// //               <div key={r._id} className="review-item">
// //                 <p>
// //                   <strong>{r.username}</strong> ({r.rating}/5)
// //                 </p>
// //                 <p>{r.comment}</p>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }




// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { fetchCardById, fetchCards, addReview, fetchReviews } from "../api";
// // import "./CardDetail.css";

// // export default function CardDetail() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const [card, setCard] = useState(null);
// //   const [allCards, setAllCards] = useState([]);
// //   const [reviews, setReviews] = useState([]);
// //   const [newReview, setNewReview] = useState({ username: "", comment: "", rating: 5 });
// //   const [activeTab, setActiveTab] = useState("description");
// //   const [compareCardId, setCompareCardId] = useState("");

// //   useEffect(() => {
// //     const loadData = async () => {
// //       try {
// //         const cardData = await fetchCardById(id);
// //         setCard(cardData);

// //         const cardsData = await fetchCards();
// //         setAllCards(cardsData.filter((c) => c._id !== id));

// //         const revData = await fetchReviews(id);
// //         setReviews(revData);
// //       } catch (err) {
// //         console.error("Failed to load data:", err);
// //       }
// //     };
// //     loadData();
// //   }, [id]);

// //   const handleAddReview = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const reviewToSend = {
// //         username: newReview.username.trim(),
// //         comment: newReview.comment.trim(),
// //         rating: Number(newReview.rating),
// //       };
// //       const added = await addReview(id, reviewToSend);
// //       setReviews([added, ...reviews]);
// //       setNewReview({ username: "", comment: "", rating: 5 });
// //     } catch (err) {
// //       console.error("Failed to add review:", err.response?.data || err.message);
// //     }
// //   };

// //   const handleCompare = () => {
// //     if (compareCardId) navigate(`/compare/${id}/${compareCardId}`);
// //   };

// //   if (!card) return <p className="loading">Loading card...</p>;

// //   return (
// //     <div className="card-detail-page">
// //       {/* Hero Section */}
// //       <section className="card-hero">
// //         <div className="card-hero-left">
// //           <img src={card.image} alt={card.title} className="card-image" />
// //         </div>
// //         <div className="card-hero-right">
// //           <h1>{card.title}</h1>
// //           <p><strong>Bank:</strong> {card.bank}</p>
// //           <p><strong>Category:</strong> {card.category?.name}</p>
// //           {card.applyLink && (
// //             <a href={card.applyLink} target="_blank" rel="noopener noreferrer">
// //               <button className="apply-btn">Apply Now →</button>
// //             </a>
// //           )}
// //           {/* Compare */}
// //           <div className="compare-section">
// //             <select value={compareCardId} onChange={(e) => setCompareCardId(e.target.value)}>
// //               <option value="">Select card to compare</option>
// //               {allCards.map((c) => (
// //                 <option key={c._id} value={c._id}>{c.title}</option>
// //               ))}
// //             </select>
// //             <button onClick={handleCompare} className="compare-btn">Compare Now</button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="card-features">
// //         {["rewards","interestRate","benefits","offers"].map((field) =>
// //           card[field] && (
// //             <div className="feature-card" key={field}>
// //               <h4>{field === "interestRate" ? "Interest Rate" : field.charAt(0).toUpperCase() + field.slice(1)}</h4>
// //               <p>{card[field]}</p>
// //             </div>
// //           )
// //         )}
// //       </section>

// //       {/* Tabs */}
// //       <section className="card-tabs">
// //         <div className="tabs-header">
// //           {["description","benefits","offers","interest"].map((tab) => (
// //             <button
// //               key={tab}
// //               className={activeTab===tab?"active-tab":""}
// //               onClick={()=>setActiveTab(tab)}
// //             >
// //               {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //             </button>
// //           ))}
// //         </div>
// //         <div className="tabs-content">
// //           {activeTab==="description" && <p>{card.description}</p>}
// //           {activeTab==="benefits" && <p>{card.benefits||"No benefits"}</p>}
// //           {activeTab==="offers" && <p>{card.offers||"No offers"}</p>}
// //           {activeTab==="interest" && <p>{card.interestRate||"N/A"}</p>}
// //         </div>
// //       </section>

// //       {/* Reviews */}
// //       <section className="card-reviews">
// //         <h3>User Reviews</h3>
// //         <form onSubmit={handleAddReview} className="review-form">
// //           <input type="text" placeholder="Your Name" value={newReview.username} onChange={e=>setNewReview({...newReview,username:e.target.value})} required/>
// //           <textarea placeholder="Comment" value={newReview.comment} onChange={e=>setNewReview({...newReview,comment:e.target.value})} required/>
// //           <input type="number" min={1} max={5} value={newReview.rating} onChange={e=>setNewReview({...newReview,rating:e.target.value})}/>
// //           <button type="submit">Add Review</button>
// //         </form>
// //         <div className="reviews-list">
// //           {reviews.length===0 ? <p>No reviews yet.</p> : reviews.map(r=>(
// //             <div key={r._id} className="review-item">
// //               <p><strong>{r.username}</strong> ({r.rating}/5)</p>
// //               <p>{r.comment}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchCardById, fetchCards, addReview, fetchReviews } from "../api";
// import "./CardDetail.css";

// export default function CardDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [card, setCard] = useState(null);
//   const [allCards, setAllCards] = useState([]);
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

//   if (!card) return <p className="loading">Loading card...</p>;

//   return (
//     <div className="card-detail-page">

//       {/* Hero Section */}
//       <section className="card-hero" style={{ backgroundColor: "#f8f9fa", padding: "30px", borderRadius: "10px", display: "flex", gap: "30px", marginBottom: "30px" }}>
//         <div className="card-hero-left" style={{ flex: 1 }}>
//           <img
//             src={card.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"}
//             alt={card.title}
//             className="card-image"
//             style={{ width: "100%", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
//           />
//         </div>
//         <div className="card-hero-right" style={{ flex: 1 }}>
//           <h1 style={{ marginBottom: "15px" }}>{card.title}</h1>
//           <p><strong>Bank:</strong> {card.bank}</p>
//           <p><strong>Category:</strong> {card.category?.name}</p>

//           {/* Action Panel */}
//           <div className="card-action-panel" style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
//             {card.applyLink && (
//               <a href={card.applyLink} target="_blank" rel="noopener noreferrer">
//                 <button className="apply-btn" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//                   Apply Now →
//                 </button>
//               </a>
//             )}

//             {/* Compare Panel */}
//             <div className="compare-panel" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//               <select value={compareCardId} onChange={(e) => setCompareCardId(e.target.value)} style={{ padding: "8px", borderRadius: "5px", flex: 1 }}>
//                 <option value="">Select card to compare</option>
//                 {allCards.map((c) => (
//                   <option key={c._id} value={c._id}>{c.title}</option>
//                 ))}
//               </select>
//               <button onClick={handleCompare} style={{ padding: "8px 15px", borderRadius: "5px", backgroundColor: "#28a745", color: "#fff", border: "none", cursor: "pointer" }}>
//                 Compare
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="card-features" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "30px" }}>
//         {["rewards","interestRate","benefits","offers"].map((field) =>
//           card[field] && (
//             <div className="feature-card" key={field} style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
//               <h4 style={{ marginBottom: "8px" }}>{field === "interestRate" ? "Interest Rate" : field.charAt(0).toUpperCase() + field.slice(1)}</h4>
//               <p>{card[field]}</p>
//             </div>
//           )
//         )}
//       </section>

//       {/* Tabs */}
//       <section className="card-tabs" style={{ marginBottom: "30px" }}>
//         <div className="tabs-header" style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
//           {["description","benefits","offers","interest"].map((tab) => (
//             <button
//               key={tab}
//               className={activeTab===tab?"active-tab":""}
//               onClick={()=>setActiveTab(tab)}
//               style={{
//                 padding: "10px 15px",
//                 borderRadius: "5px",
//                 border: activeTab===tab ? "2px solid #007bff" : "1px solid #ccc",
//                 backgroundColor: activeTab===tab ? "#e7f1ff" : "#fff",
//                 cursor: "pointer"
//               }}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>
//         <div className="tabs-content" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
//           {activeTab==="description" && <p>{card.description}</p>}
//           {activeTab==="benefits" && <p>{card.benefits||"No benefits"}</p>}
//           {activeTab==="offers" && <p>{card.offers||"No offers"}</p>}
//           {activeTab==="interest" && <p>{card.interestRate||"N/A"}</p>}
//         </div>
//       </section>

//       {/* Reviews */}
//       <section className="card-reviews">
//         <h3>User Reviews</h3>
//         <form onSubmit={handleAddReview} className="review-form" style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
//           <input type="text" placeholder="Your Name" value={newReview.username} onChange={e=>setNewReview({...newReview,username:e.target.value})} required style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}/>
//           <textarea placeholder="Comment" value={newReview.comment} onChange={e=>setNewReview({...newReview,comment:e.target.value})} required style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}/>
//           <input type="number" min={1} max={5} value={newReview.rating} onChange={e=>setNewReview({...newReview,rating:e.target.value})} style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", width: "100px" }}/>
//           <button type="submit" style={{ padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}>Add Review</button>
//         </form>
//         <div className="reviews-list" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//           {reviews.length===0 ? <p>No reviews yet.</p> : reviews.map(r=>(
//             <div key={r._id} className="review-item" style={{ backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px" }}>
//               <p><strong>{r.username}</strong> ({r.rating}/5)</p>
//               <p>{r.comment}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCardById, fetchCards, addReview, fetchReviews } from "../api";
import "./CardDetail.css";

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

        // Related cards based on same category
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

  if (!card) return <p className="loading">Loading card...</p>;

  return (
    <div className="card-detail-page">

      {/* Hero Section */}
      <section className="card-hero" style={{ backgroundColor: "#f8f9fa", padding: "30px", borderRadius: "10px", display: "flex", gap: "30px", marginBottom: "30px" }}>
        <div className="card-hero-left" style={{ flex: 1 }}>
          <img
            src={card.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"}
            alt={card.title}
            className="card-image"
            style={{ width: "100%", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
          />
        </div>
        <div className="card-hero-right" style={{ flex: 1 }}>
          <h1 style={{ marginBottom: "15px" }}>{card.title}</h1>
          <p><strong>Bank:</strong> {card.bank}</p>
          <p><strong>Category:</strong> {card.category?.name}</p>

          {/* Action Panel */}
          <div className="card-action-panel" style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
            {card.applyLink && (
              <a href={card.applyLink} target="_blank" rel="noopener noreferrer">
                <button className="apply-btn" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                  Apply Now →
                </button>
              </a>
            )}

            {/* Compare Panel */}
            <div className="compare-panel" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <select value={compareCardId} onChange={(e) => setCompareCardId(e.target.value)} style={{ padding: "8px", borderRadius: "5px", flex: 1 }}>
                <option value="">Select card to compare</option>
                {allCards.map((c) => (
                  <option key={c._id} value={c._id}>{c.title}</option>
                ))}
              </select>
              <button onClick={handleCompare} style={{ padding: "8px 15px", borderRadius: "5px", backgroundColor: "#28a745", color: "#fff", border: "none", cursor: "pointer" }}>
                Compare
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="card-features" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "30px" }}>
        {["rewards","interestRate","benefits","offers"].map((field) =>
          card[field] && (
            <div className="feature-card" key={field} style={{ backgroundColor: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h4 style={{ marginBottom: "8px" }}>{field === "interestRate" ? "Interest Rate" : field.charAt(0).toUpperCase() + field.slice(1)}</h4>
              <p>{card[field]}</p>
            </div>
          )
        )}
      </section>

      {/* Tabs */}
      <section className="card-tabs" style={{ marginBottom: "30px" }}>
        <div className="tabs-header" style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          {["description","benefits","offers","interest"].map((tab) => (
            <button
              key={tab}
              className={activeTab===tab?"active-tab":""}
              onClick={()=>setActiveTab(tab)}
              style={{
                padding: "10px 15px",
                borderRadius: "5px",
                border: activeTab===tab ? "2px solid #007bff" : "1px solid #ccc",
                backgroundColor: activeTab===tab ? "#e7f1ff" : "#fff",
                cursor: "pointer"
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="tabs-content" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          {activeTab==="description" && <p>{card.description}</p>}
          {activeTab==="benefits" && <p>{card.benefits||"No benefits"}</p>}
          {activeTab==="offers" && <p>{card.offers||"No offers"}</p>}
          {activeTab==="interest" && <p>{card.interestRate||"N/A"}</p>}
        </div>
      </section>

      {/* Reviews */}
      <section className="card-reviews" style={{ marginBottom: "30px" }}>
        <h3>User Reviews</h3>
        <form onSubmit={handleAddReview} className="review-form" style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
          <input type="text" placeholder="Your Name" value={newReview.username} onChange={e=>setNewReview({...newReview,username:e.target.value})} required style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}/>
          <textarea placeholder="Comment" value={newReview.comment} onChange={e=>setNewReview({...newReview,comment:e.target.value})} required style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}/>
          <input type="number" min={1} max={5} value={newReview.rating} onChange={e=>setNewReview({...newReview,rating:e.target.value})} style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", width: "100px" }}/>
          <button type="submit" style={{ padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}>Add Review</button>
        </form>
        <div className="reviews-list" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {reviews.length===0 ? <p>No reviews yet.</p> : reviews.map(r=>(
            <div key={r._id} className="review-item" style={{ backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px" }}>
              <p><strong>{r.username}</strong> ({r.rating}/5)</p>
              <p>{r.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Cards */}
      {relatedCards.length > 0 && (
        <section className="related-cards" style={{ marginBottom: "30px" }}>
          <h3>Related Cards</h3>
          <div style={{ display: "flex", gap: "20px", overflowX: "auto", padding: "10px 0" }}>
            {relatedCards.map((c) => (
              <div
                key={c._id}
                className="related-card"
                onClick={() => handleCardClick(c._id)}
                style={{ minWidth: "200px", cursor: "pointer", backgroundColor: "#fff", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", textAlign: "center" }}
              >
                <img src={c.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"} alt={c.title} style={{ width: "100%", borderRadius: "5px", marginBottom: "10px" }} />
                <h4 style={{ fontSize: "16px" }}>{c.title}</h4>
                <p style={{ fontSize: "14px", color: "#555" }}>{c.bank}</p>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
