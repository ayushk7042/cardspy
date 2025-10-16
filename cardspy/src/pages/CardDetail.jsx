// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { useParams } from "react-router-dom";
// // // // // // import { fetchCardById } from "../api";

// // // // // // export default function CardDetail() {
// // // // // //   const { id } = useParams();
// // // // // //   const [card, setCard] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     const loadCard = async () => {
// // // // // //       const data = await fetchCardById(id);
// // // // // //       setCard(data);
// // // // // //     };
// // // // // //     loadCard();
// // // // // //   }, [id]);

// // // // // //   if (!card) return <p>Loading card details...</p>;

// // // // // //   return (
// // // // // //     <div className="detail-page">
// // // // // //       <h1>{card.title}</h1>
// // // // // //       <img src={card.image} alt={card.title} />
// // // // // //       <p><strong>Bank:</strong> {card.bank}</p>
// // // // // //       <p><strong>Category:</strong> {card.category?.name}</p>
// // // // // //       <p><strong>Description:</strong> {card.description}</p>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // import { fetchCardById } from "../api";
// // // // // import "./CardDetail.css";

// // // // // export default function CardDetail() {
// // // // //   const { id } = useParams();
// // // // //   const navigate = useNavigate();
// // // // //   const [card, setCard] = useState(null);
// // // // //   const [activeTab, setActiveTab] = useState("overview");

// // // // //   useEffect(() => {
// // // // //     const loadCard = async () => {
// // // // //       try {
// // // // //         const data = await fetchCardById(id);
// // // // //         setCard(data);
// // // // //       } catch (err) {
// // // // //         console.error("Failed to load card:", err);
// // // // //       }
// // // // //     };
// // // // //     loadCard();
// // // // //   }, [id]);

// // // // //   if (!card)
// // // // //     return (
// // // // //       <div className="loading-page">
// // // // //         <p>Loading card details...</p>
// // // // //       </div>
// // // // //     );

// // // // //   return (
// // // // //     <div className="card-detail-page">
// // // // //       {/* Hero Section */}
// // // // //       <section className="card-hero">
// // // // //         <div className="card-hero-left">
// // // // //           <img src={card.image} alt={card.title} className="card-image" />
// // // // //         </div>
// // // // //         <div className="card-hero-right">
// // // // //           <h1>{card.title}</h1>
// // // // //           <p className="card-bank">
// // // // //             <strong>Bank:</strong> {card.bank}
// // // // //           </p>
// // // // //           <p className="card-category">
// // // // //             <strong>Category:</strong> {card.category?.name || "—"}
// // // // //           </p>
// // // // //           <p className="card-rating">⭐ {card.rating || "4.5/5"}</p>
// // // // //           <div className="card-buttons">
// // // // //             <button className="apply-btn">Apply Now</button>
// // // // //             <button className="compare-btn">Compare</button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Key Features */}
// // // // //       <section className="card-features">
// // // // //         <div className="feature">
// // // // //           <h4>Annual Fee</h4>
// // // // //           <p>{card.fee || "₹499"}</p>
// // // // //         </div>
// // // // //         <div className="feature">
// // // // //           <h4>Rewards</h4>
// // // // //           <p>{card.rewards || "2X on dining & travel"}</p>
// // // // //         </div>
// // // // //         <div className="feature">
// // // // //           <h4>Joining Bonus</h4>
// // // // //           <p>{card.joiningBonus || "Welcome Points"}</p>
// // // // //         </div>
// // // // //         <div className="feature">
// // // // //           <h4>Interest Rate</h4>
// // // // //           <p>{card.interestRate || "3.5% – 36%"}</p>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Tabs */}
// // // // //       <section className="card-tabs">
// // // // //         <div className="tabs-header">
// // // // //           {["overview", "benefits", "offers", "reviews"].map((tab) => (
// // // // //             <button
// // // // //               key={tab}
// // // // //               className={activeTab === tab ? "active-tab" : ""}
// // // // //               onClick={() => setActiveTab(tab)}
// // // // //             >
// // // // //               {tab.charAt(0).toUpperCase() + tab.slice(1)}
// // // // //             </button>
// // // // //           ))}
// // // // //         </div>
// // // // //         <div className="tabs-content">
// // // // //           {activeTab === "overview" && (
// // // // //             <div>
// // // // //               <h3>Overview</h3>
// // // // //               <p>{card.description || "No overview available."}</p>
// // // // //             </div>
// // // // //           )}
// // // // //           {activeTab === "benefits" && (
// // // // //             <div>
// // // // //               <h3>Benefits</h3>
// // // // //               <ul>
// // // // //                 {card.benefits?.length > 0
// // // // //                   ? card.benefits.map((b, idx) => <li key={idx}>{b}</li>)
// // // // //                   : "No benefits listed."}
// // // // //               </ul>
// // // // //             </div>
// // // // //           )}
// // // // //           {activeTab === "offers" && (
// // // // //             <div>
// // // // //               <h3>Offers</h3>
// // // // //               <ul>
// // // // //                 {card.offers?.length > 0
// // // // //                   ? card.offers.map((o, idx) => <li key={idx}>{o}</li>)
// // // // //                   : "No offers available."}
// // // // //               </ul>
// // // // //             </div>
// // // // //           )}
// // // // //           {activeTab === "reviews" && (
// // // // //             <div>
// // // // //               <h3>Reviews</h3>
// // // // //               {card.reviews?.length > 0
// // // // //                 ? card.reviews.map((r, idx) => (
// // // // //                     <div key={idx} className="review-card">
// // // // //                       <p>
// // // // //                         <strong>{r.user}</strong>: {r.comment}
// // // // //                       </p>
// // // // //                       <p>⭐ {r.rating}</p>
// // // // //                     </div>
// // // // //                   ))
// // // // //                 : "No reviews yet."}
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </section>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import { fetchCardById } from "../api";
// // // // import "./CardDetail.css";

// // // // export default function CardDetail() {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [card, setCard] = useState(null);
// // // //   const [activeTab, setActiveTab] = useState("overview");

// // // //   // Rewards by category
// // // //   const [monthlySpending, setMonthlySpending] = useState({
// // // //     shopping: 0,
// // // //     travel: 0,
// // // //     dining: 0,
// // // //     groceries: 0,
// // // //     others: 0,
// // // //   });
// // // //   const [categoryRewards, setCategoryRewards] = useState({});

// // // //   useEffect(() => {
// // // //     const loadCard = async () => {
// // // //       try {
// // // //         const data = await fetchCardById(id);
// // // //         setCard(data);
// // // //       } catch (err) {
// // // //         console.error("Failed to load card:", err);
// // // //       }
// // // //     };
// // // //     loadCard();
// // // //   }, [id]);

// // // //   useEffect(() => {
// // // //     if (!card) return;

// // // //     const rewards = {};
// // // //     // Assuming card.rewardsStructure = { shopping: 0.02, travel: 0.03, dining: 0.05, groceries: 0.01 }
// // // //     const structure = card.rewardsStructure || {};
// // // //     for (const cat in monthlySpending) {
// // // //       const rate = structure[cat] || 0;
// // // //       rewards[cat] = monthlySpending[cat] * rate;
// // // //     }
// // // //     setCategoryRewards(rewards);
// // // //   }, [monthlySpending, card]);

// // // //   if (!card)
// // // //     return (
// // // //       <div className="loading-page">
// // // //         <p>Loading card details...</p>
// // // //       </div>
// // // //     );

// // // //   const handleInputChange = (e, category) => {
// // // //     const value = parseFloat(e.target.value) || 0;
// // // //     setMonthlySpending((prev) => ({ ...prev, [category]: value }));
// // // //   };

// // // //   return (
// // // //     <div className="card-detail-page">
// // // //       {/* Hero Section */}
// // // //       <section className="card-hero">
// // // //         <div className="card-hero-left">
// // // //           <img src={card.image} alt={card.title} className="card-image" />
// // // //         </div>
// // // //         <div className="card-hero-right">
// // // //           <h1>{card.title}</h1>
// // // //           <p className="card-bank">
// // // //             <strong>Bank:</strong> {card.bank}
// // // //           </p>
// // // //           <p className="card-category">
// // // //             <strong>Category:</strong> {card.category?.name || "—"}
// // // //           </p>
// // // //           <p className="card-rating">⭐ {card.rating || "4.5/5"}</p>
// // // //           <div className="card-buttons">
// // // //             <button className="apply-btn">Apply Now</button>
// // // //             <button className="compare-btn">Compare</button>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Key Features */}
// // // //       <section className="card-features">
// // // //         <div className="feature">
// // // //           <h4>Annual Fee</h4>
// // // //           <p>{card.fee || "₹499"}</p>
// // // //         </div>
// // // //         <div className="feature">
// // // //           <h4>Rewards</h4>
// // // //           <p>{card.rewards || "Varies by category"}</p>
// // // //         </div>
// // // //         <div className="feature">
// // // //           <h4>Joining Bonus</h4>
// // // //           <p>{card.joiningBonus || "Welcome Points"}</p>
// // // //         </div>
// // // //         <div className="feature">
// // // //           <h4>Interest Rate</h4>
// // // //           <p>{card.interestRate || "3.5% – 36%"}</p>
// // // //         </div>
// // // //       </section>

// // // //       {/* Rewards by Category */}
// // // //       <section className="rewards-by-category">
// // // //         <h2>💰 Rewards by Category</h2>
// // // //         <p>Enter your estimated monthly spending for each category:</p>
// // // //         <div className="spending-inputs">
// // // //           {["shopping", "travel", "dining", "groceries", "others"].map((cat) => (
// // // //             <div key={cat} className="spending-row">
// // // //               <label>{cat.charAt(0).toUpperCase() + cat.slice(1)}:</label>
// // // //               <input
// // // //                 type="number"
// // // //                 value={monthlySpending[cat]}
// // // //                 onChange={(e) => handleInputChange(e, cat)}
// // // //                 placeholder={`₹ 0`}
// // // //               />
// // // //               <span>Rewards: ₹{categoryRewards[cat]?.toFixed(2) || "0.00"}</span>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //         <h3>
// // // //           Total Estimated Rewards: ₹
// // // //           {Object.values(categoryRewards)
// // // //             .reduce((a, b) => a + b, 0)
// // // //             .toFixed(2)}
// // // //         </h3>
// // // //       </section>

// // // //       {/* Tabs */}
// // // //       <section className="card-tabs">
// // // //         <div className="tabs-header">
// // // //           {["overview", "benefits", "offers", "reviews"].map((tab) => (
// // // //             <button
// // // //               key={tab}
// // // //               className={activeTab === tab ? "active-tab" : ""}
// // // //               onClick={() => setActiveTab(tab)}
// // // //             >
// // // //               {tab.charAt(0).toUpperCase() + tab.slice(1)}
// // // //             </button>
// // // //           ))}
// // // //         </div>
// // // //         <div className="tabs-content">
// // // //           {activeTab === "overview" && (
// // // //             <div>
// // // //               <h3>Overview</h3>
// // // //               <p>{card.description || "No overview available."}</p>
// // // //             </div>
// // // //           )}
// // // //           {activeTab === "benefits" && (
// // // //             <div>
// // // //               <h3>Benefits</h3>
// // // //               <ul>
// // // //                 {card.benefits?.length > 0
// // // //                   ? card.benefits.map((b, idx) => <li key={idx}>{b}</li>)
// // // //                   : "No benefits listed."}
// // // //               </ul>
// // // //             </div>
// // // //           )}
// // // //           {activeTab === "offers" && (
// // // //             <div>
// // // //               <h3>Offers</h3>
// // // //               <ul>
// // // //                 {card.offers?.length > 0
// // // //                   ? card.offers.map((o, idx) => <li key={idx}>{o}</li>)
// // // //                   : "No offers available."}
// // // //               </ul>
// // // //             </div>
// // // //           )}
// // // //           {activeTab === "reviews" && (
// // // //             <div>
// // // //               <h3>Reviews</h3>
// // // //               {card.reviews?.length > 0
// // // //                 ? card.reviews.map((r, idx) => (
// // // //                     <div key={idx} className="review-card">
// // // //                       <p>
// // // //                         <strong>{r.user}</strong>: {r.comment}
// // // //                       </p>
// // // //                       <p>⭐ {r.rating}</p>
// // // //                     </div>
// // // //                   ))
// // // //                 : "No reviews yet."}
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom";
// // // import { fetchCardById } from "../api";
// // // import "./CardDetail.css";

// // // export default function CardDetail() {
// // //   const { id } = useParams();
// // //   const [card, setCard] = useState(null);
// // //   const [activeTab, setActiveTab] = useState("benefits"); // tabs: benefits/offers/interest

// // //   useEffect(() => {
// // //     const loadCard = async () => {
// // //       try {
// // //         const data = await fetchCardById(id);
// // //         setCard(data);
// // //       } catch (err) {
// // //         console.error("Failed to fetch card:", err);
// // //       }
// // //     };
// // //     loadCard();
// // //   }, [id]);

// // //   if (!card) return <p>Loading card details...</p>;

// // //   return (
// // //     <div className="card-detail-page">
// // //       {/* Hero Section */}
// // //       <div className="card-hero">
// // //         <div className="card-hero-left">
// // //           <img src={card.image} alt={card.title} className="card-image" />
// // //         </div>
// // //         <div className="card-hero-right">
// // //           <h1>{card.title}</h1>
// // //           <p className="card-bank"><strong>Bank:</strong> {card.bank}</p>
// // //           <p className="card-category"><strong>Category:</strong> {card.category?.name}</p>
// // //           <div className="card-buttons">
// // //             {card.applyLink && (
// // //               <a href={card.applyLink} target="_blank" rel="noopener noreferrer">
// // //                 <button className="apply-btn">Apply Now →</button>
// // //               </a>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Key Features / Rewards */}
// // //       <section className="card-features">
// // //         {card.rewards && (
// // //           <div className="feature">
// // //             <h4>Rewards</h4>
// // //             <p>{card.rewards}</p>
// // //           </div>
// // //         )}
// // //         {card.interestRate && (
// // //           <div className="feature">
// // //             <h4>Interest Rate</h4>
// // //             <p>{card.interestRate}</p>
// // //           </div>
// // //         )}
// // //         {card.benefits && (
// // //           <div className="feature">
// // //             <h4>Benefits</h4>
// // //             <p>{card.benefits}</p>
// // //           </div>
// // //         )}
// // //         {card.offers && (
// // //           <div className="feature">
// // //             <h4>Offers</h4>
// // //             <p>{card.offers}</p>
// // //           </div>
// // //         )}
// // //       </section>

// // //       {/* Tabs for Description, Terms, etc */}
// // //       <section className="card-tabs">
// // //         <div className="tabs-header">
// // //           <button
// // //             className={activeTab === "description" ? "active-tab" : ""}
// // //             onClick={() => setActiveTab("description")}
// // //           >
// // //             Description
// // //           </button>
// // //           <button
// // //             className={activeTab === "benefits" ? "active-tab" : ""}
// // //             onClick={() => setActiveTab("benefits")}
// // //           >
// // //             Benefits
// // //           </button>
// // //           <button
// // //             className={activeTab === "offers" ? "active-tab" : ""}
// // //             onClick={() => setActiveTab("offers")}
// // //           >
// // //             Offers
// // //           </button>
// // //           <button
// // //             className={activeTab === "interest" ? "active-tab" : ""}
// // //             onClick={() => setActiveTab("interest")}
// // //           >
// // //             Interest Rate
// // //           </button>
// // //         </div>

// // //         <div className="tabs-content">
// // //           {activeTab === "description" && <p>{card.description}</p>}
// // //           {activeTab === "benefits" && <p>{card.benefits || "No benefits available."}</p>}
// // //           {activeTab === "offers" && <p>{card.offers || "No offers available."}</p>}
// // //           {activeTab === "interest" && <p>{card.interestRate || "No interest info."}</p>}
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }
// // import React, { useEffect, useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { fetchCardById, fetchCardsByBank, fetchCardsByCategory } from "../api";
// // import "./CardDetail.css";

// // export default function CardDetail() {
// //   const { id } = useParams();
// //   const [card, setCard] = useState(null);
// //   const [similarCards, setSimilarCards] = useState([]);
// //   const [activeTab, setActiveTab] = useState("description");

// //   useEffect(() => {
// //     const loadCard = async () => {
// //       try {
// //         const data = await fetchCardById(id);
// //         setCard(data);

// //         // Fetch similar cards (same bank OR same category)
// //         const bankCards = await fetchCardsByBank(data.bank);
// //         const categoryCards = await fetchCardsByCategory(data.category?._id);

// //         // Merge and filter current card out
// //         const merged = [...bankCards, ...categoryCards].filter(c => c._id !== data._id);
// //         const uniqueCards = Array.from(new Set(merged.map(c => c._id))).map(
// //           id => merged.find(c => c._id === id)
// //         );

// //         setSimilarCards(uniqueCards);
// //       } catch (err) {
// //         console.error("Failed to fetch card:", err);
// //       }
// //     };
// //     loadCard();
// //   }, [id]);

// //   if (!card) return <p className="loading-text">Loading card details...</p>;

// //   return (
// //     <div className="card-detail-page">
// //       {/* Hero Section */}
// //       <div className="card-hero">
// //         <div className="card-hero-left">
// //           <img src={card.image} alt={card.title} className="card-image" />
// //         </div>
// //         <div className="card-hero-right">
// //           <h1>{card.title}</h1>
// //           <p className="card-bank"><strong>Bank:</strong> {card.bank}</p>
// //           <p className="card-category"><strong>Category:</strong> {card.category?.name}</p>
// //           {card.applyLink && (
// //             <a href={card.applyLink} target="_blank" rel="noopener noreferrer">
// //               <button className="apply-btn">Apply Now →</button>
// //             </a>
// //           )}
// //         </div>
// //       </div>

// //       {/* Key Features Section */}
// //       <section className="card-features">
// //         {card.rewards && (
// //           <div className="feature">
// //             <h4>Rewards</h4>
// //             <p>{card.rewards}</p>
// //           </div>
// //         )}
// //         {card.interestRate && (
// //           <div className="feature">
// //             <h4>Interest Rate</h4>
// //             <p>{card.interestRate}</p>
// //           </div>
// //         )}
// //         {card.benefits && (
// //           <div className="feature">
// //             <h4>Benefits</h4>
// //             <ul>
// //               {card.benefits.map((b, idx) => <li key={idx}>{b}</li>)}
// //             </ul>
// //           </div>
// //         )}
// //         {card.offers && (
// //           <div className="feature">
// //             <h4>Offers</h4>
// //             <ul>
// //               {card.offers.map((o, idx) => <li key={idx}>{o}</li>)}
// //             </ul>
// //           </div>
// //         )}
// //       </section>

// //       {/* Tabs Section */}
// //       <section className="card-tabs">
// //         <div className="tabs-header">
// //           <button
// //             className={activeTab === "description" ? "active-tab" : ""}
// //             onClick={() => setActiveTab("description")}
// //           >
// //             Description
// //           </button>
// //           <button
// //             className={activeTab === "benefits" ? "active-tab" : ""}
// //             onClick={() => setActiveTab("benefits")}
// //           >
// //             Benefits
// //           </button>
// //           <button
// //             className={activeTab === "offers" ? "active-tab" : ""}
// //             onClick={() => setActiveTab("offers")}
// //           >
// //             Offers
// //           </button>
// //           <button
// //             className={activeTab === "interest" ? "active-tab" : ""}
// //             onClick={() => setActiveTab("interest")}
// //           >
// //             Interest Rate
// //           </button>
// //         </div>

// //         <div className="tabs-content">
// //           {activeTab === "description" && <p>{card.description || "No description available."}</p>}
// //           {activeTab === "benefits" && (
// //             <ul>
// //               {card.benefits?.length > 0 ? card.benefits.map((b, i) => <li key={i}>{b}</li>) : "No benefits available."}
// //             </ul>
// //           )}
// //           {activeTab === "offers" && (
// //             <ul>
// //               {card.offers?.length > 0 ? card.offers.map((o, i) => <li key={i}>{o}</li>) : "No offers available."}
// //             </ul>
// //           )}
// //           {activeTab === "interest" && <p>{card.interestRate || "No interest info."}</p>}
// //         </div>
// //       </section>

// //       {/* Similar Cards Section */}
// //       {similarCards.length > 0 && (
// //         <section className="similar-cards">
// //           <h2>Compare with Similar Cards</h2>
// //           <div className="similar-cards-grid">
// //             {similarCards.map(c => (
// //               <Link to={`/card/${c._id}`} key={c._id} className="similar-card-item">
// //                 <img src={c.image} alt={c.title} />
// //                 <h4>{c.title}</h4>
// //                 <p>{c.bank}</p>
// //                 <p className="small">{c.category?.name}</p>
// //               </Link>
// //             ))}
// //           </div>
// //         </section>
// //       )}
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchCardById, fetchReviews, addReview } from "../api";
// import "./CardDetail.css";

// export default function CardDetail() {
//   const { id } = useParams();
//   const [card, setCard] = useState(null);
//   const [activeTab, setActiveTab] = useState("description");
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({ user: "", rating: 5, comment: "" });

//   // Load card & reviews
//   useEffect(() => {
//     const loadCard = async () => {
//       try {
//         const data = await fetchCardById(id);
//         setCard(data);
//       } catch (err) {
//         console.error("Failed to fetch card:", err);
//       }
//     };

//     const loadReviews = async () => {
//       try {
//         const rev = await fetchReviews(id);
//         setReviews(rev);
//       } catch (err) {
//         console.error("Failed to fetch reviews:", err);
//       }
//     };

//     loadCard();
//     loadReviews();
//   }, [id]);

//   // Submit new review
//   const handleSubmitReview = async (e) => {
//     e.preventDefault();
//     if (!newReview.user || !newReview.comment) return alert("Name & Comment required!");
//     try {
//       const review = await addReview(id, newReview);
//       setReviews([...reviews, review]);
//       setNewReview({ user: "", rating: 5, comment: "" });
//     } catch (err) {
//       console.error("Failed to add review:", err);
//     }
//   };

//   if (!card) return <p>Loading card details...</p>;

//   return (
//     <div className="card-detail-page">
//       {/* Hero Section */}
//       <div className="card-hero">
//         <div className="card-hero-left">
//           <img src={card.image} alt={card.title} className="card-image" />
//         </div>
//         <div className="card-hero-right">
//           <h1>{card.title}</h1>
//           <p><strong>Bank:</strong> {card.bank}</p>
//           <p><strong>Category:</strong> {card.category?.name}</p>
//           {card.applyLink && (
//             <a href={card.applyLink} target="_blank" rel="noopener noreferrer">
//               <button className="apply-btn">Apply Now →</button>
//             </a>
//           )}
//         </div>
//       </div>

//       {/* Key Features */}
//       <section className="card-features">
//         {card.rewards && (
//           <div className="feature">
//             <h4>Rewards</h4>
//             <p>{card.rewards}</p>
//           </div>
//         )}
//         {card.interestRate && (
//           <div className="feature">
//             <h4>Interest Rate</h4>
//             <p>{card.interestRate}</p>
//           </div>
//         )}
//         {card.benefits && (
//           <div className="feature">
//             <h4>Benefits</h4>
//             <ul>{card.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
//           </div>
//         )}
//         {card.offers && (
//           <div className="feature">
//             <h4>Offers</h4>
//             <p>{card.offers}</p>
//           </div>
//         )}
//         {card.fees && (
//           <div className="feature">
//             <h4>Fees</h4>
//             <p>{card.fees}</p>
//           </div>
//         )}
//       </section>

//       {/* Tabs */}
//       <section className="card-tabs">
//         <div className="tabs-header">
//           {["description", "benefits", "offers", "interest"].map((tab) => (
//             <button
//               key={tab}
//               className={activeTab === tab ? "active-tab" : ""}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>
//         <div className="tabs-content">
//           {activeTab === "description" && <p>{card.description}</p>}
//           {activeTab === "benefits" && <ul>{card.benefits?.map((b,i) => <li key={i}>{b}</li>) || "No benefits"}</ul>}
//           {activeTab === "offers" && <p>{card.offers || "No offers"}</p>}
//           {activeTab === "interest" && <p>{card.interestRate || "No interest info"}</p>}
//         </div>
//       </section>

//       {/* Reviews Section */}
//       <section className="reviews-section">
//         <h2>User Reviews</h2>
//         {reviews.length === 0 && <p>No reviews yet. Be the first!</p>}
//         <div className="reviews-list">
//           {reviews.map((rev) => (
//             <div key={rev._id} className="review-card">
//               <strong>{rev.user}</strong> | Rating: {rev.rating}/5
//               <p>{rev.comment}</p>
//             </div>
//           ))}
//         </div>

//         <form onSubmit={handleSubmitReview} className="review-form">
//           <h3>Leave a Review</h3>
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={newReview.user}
//             onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
//           />
//           <select
//             value={newReview.rating}
//             onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
//           >
//             {[5,4,3,2,1].map((r) => <option key={r} value={r}>{r}</option>)}
//           </select>
//           <textarea
//             placeholder="Your comment"
//             value={newReview.comment}
//             onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//           />
//           <button type="submit">Submit Review</button>
//         </form>
//       </section>

//       {/* Compare Feature */}
//       <section className="compare-section">
//         <h2>Compare this card</h2>
//         <p>Select other cards from your list to compare key features.</p>
//         {/* Add your compare UI here */}
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
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ user: "", comment: "", rating: 5 });
  const [activeTab, setActiveTab] = useState("description");
  const [compareCardId, setCompareCardId] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const cardData = await fetchCardById(id);
        setCard(cardData);

        const cardsData = await fetchCards();
        setAllCards(cardsData.filter(c => c._id !== id));

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
      const added = await addReview(id, newReview);
      setReviews([added, ...reviews]);
      setNewReview({ user: "", comment: "", rating: 5 });
    } catch (err) {
      console.error("Failed to add review:", err);
    }
  };

  const handleCompare = () => {
    if (compareCardId) navigate(`/compare/${id}/${compareCardId}`);
  };

  if (!card) return <p>Loading card...</p>;

  return (
    <div className="card-detail-page">
      {/* Hero */}
      <div className="card-hero">
        <div className="card-hero-left">
          <img src={card.image} alt={card.title} className="card-image" />
        </div>
        <div className="card-hero-right">
          <h1>{card.title}</h1>
          <p><strong>Bank:</strong> {card.bank}</p>
          <p><strong>Category:</strong> {card.category?.name}</p>
          <div className="card-buttons">
            {card.applyLink && (
              <a href={card.applyLink} target="_blank" rel="noopener noreferrer">
                <button className="apply-btn">Apply Now →</button>
              </a>
            )}
          </div>
          {/* Compare */}
          <div className="compare-section">
            <select value={compareCardId} onChange={e => setCompareCardId(e.target.value)}>
              <option value="">Select card to compare</option>
              {allCards.map(c => <option key={c._id} value={c._id}>{c.title}</option>)}
            </select>
            <button onClick={handleCompare}>Compare Now</button>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="card-features">
        {card.rewards && <div><h4>Rewards</h4><p>{card.rewards}</p></div>}
        {card.interestRate && <div><h4>Interest Rate</h4><p>{card.interestRate}</p></div>}
        {card.benefits && <div><h4>Benefits</h4><p>{card.benefits}</p></div>}
        {card.offers && <div><h4>Offers</h4><p>{card.offers}</p></div>}
      </section>

      {/* Tabs */}
      <section className="card-tabs">
        <div className="tabs-header">
          {["description","benefits","offers","interest"].map(tab => (
            <button key={tab}
              className={activeTab===tab ? "active-tab":""}
              onClick={()=>setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase()+tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="tabs-content">
          {activeTab==="description" && <p>{card.description}</p>}
          {activeTab==="benefits" && <p>{card.benefits || "No benefits"}</p>}
          {activeTab==="offers" && <p>{card.offers || "No offers"}</p>}
          {activeTab==="interest" && <p>{card.interestRate || "N/A"}</p>}
        </div>
      </section>

      {/* Reviews */}
      <section className="card-reviews">
        <h3>User Reviews</h3>
        <form onSubmit={handleAddReview} className="review-form">
          <input type="text" placeholder="Your Name" value={newReview.user} 
            onChange={e=>setNewReview({...newReview,user:e.target.value})} required />
          <textarea placeholder="Comment" value={newReview.comment}
            onChange={e=>setNewReview({...newReview,comment:e.target.value})} required />
          <input type="number" min={1} max={5} value={newReview.rating}
            onChange={e=>setNewReview({...newReview,rating:e.target.value})} />
          <button type="submit">Add Review</button>
        </form>
        <div className="reviews-list">
          {reviews.map(r=>(
            <div key={r._id} className="review-item">
              <p><strong>{r.user}</strong> ({r.rating}/5)</p>
              <p>{r.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
