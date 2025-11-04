


// import React, { useEffect, useState } from "react";
// import { fetchNews, fetchCategories, fetchCards, fetchBanks } from "../api.js";
// import { useNavigate } from "react-router-dom";
// import "./Home.css";
// import Footer from "../components/Footer";

// export default function Home() {
//   const [news, setNews] = useState([]);
//   const [cards, setCards] = useState([]);
//   const [allCards, setAllCards] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [banks, setBanks] = useState([]);
//   const [loadingNews, setLoadingNews] = useState(true);
//   const [loadingCards, setLoadingCards] = useState(true);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const navigate = useNavigate();

//   const [insights, setInsights] = useState([
//     {
//       title: "Best Credit Cards for 2025",
//       summary:
//         "Compare top-performing credit cards offering travel, cashback & rewards benefits this year.",
//       image: "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
//       id: "1",
//     },
//     {
//       title: "RBI’s New Credit Card Rules Explained",
//       summary:
//         "Understand how RBI's 2025 guidelines affect your credit score and card eligibility.",
//       image: "https://cdn-icons-png.flaticon.com/512/3104/3104796.png",
//       id: "2",
//     },
//     {
//       title: "Top 5 Travel Cards with Lounge Access",
//       summary:
//         "Enjoy free airport lounges and exclusive travel perks with these credit cards.",
//       image: "https://cdn-icons-png.flaticon.com/512/8146/8146553.png",
//       id: "3",
//     },
//     {
//       title: "Credit Card vs Debit Card — Which is Better?",
//       summary:
//         "A detailed comparison to help you pick the right card for your spending habits.",
//       image: "https://cdn-icons-png.flaticon.com/512/8139/8139374.png",
//       id: "4",
//     },
//   ]);

//   // Load categories
//   const loadCategories = async () => {
//     try {
//       const data = await fetchCategories();
//       setCategories(data);
//     } catch (err) {
//       console.error("Failed to fetch categories:", err);
//     }
//   };

//   // Load all cards
//   const loadCards = async () => {
//     try {
//       const data = await fetchCards();
//       setAllCards(data);
//       setCards(data);
//     } catch (err) {
//       console.error("Failed to fetch cards:", err);
//     } finally {
//       setLoadingCards(false);
//     }
//   };

//   // Load banks
//   const loadBanks = async () => {
//     try {
//       const data = await fetchBanks();
//       setBanks(data);
//     } catch (err) {
//       console.error("Failed to fetch banks:", err);
//     }
//   };

//   // Load news
//   const loadNews = async () => {
//     try {
//       const data = await fetchNews();
//       setNews(data.news || data);
//     } catch (err) {
//       console.error("Failed to fetch news:", err);
//     } finally {
//       setLoadingNews(false);
//     }
//   };

//   useEffect(() => {
//     loadCategories();
//     loadCards();
//     loadBanks();
//     loadNews();
//   }, []);

 
//    const handleCategoryClick = (name) => navigate(`/category/${name}`);

//   // Bank click → navigate
//   const handleBankClick = (bankId) => {
//     navigate(`/bank/${bankId}`);
//   };

//   // Card click → navigate
//   const handleCardClick = (cardId) => {
//     navigate(`/card/${cardId}`);
//   };

//   // News click → navigate
//   const handleNewsClick = (newsId) => {
//     navigate(`/news/${newsId}`);
//   };

//   const categoryIcons = [
//     {
//       name: "Shopping Cards",
//       icon: "🛍️",
//       desc: "Best for online and retail shopping rewards.",
//     },
//     {
//       name: "Travel Cards",
//       icon: "✈️",
//       desc: "Earn miles and free flights with every spend.",
//     },
//     {
//       name: "Cashback Cards",
//       icon: "💰",
//       desc: "Save more on daily expenses with cashback offers.",
//     },
//     {
//       name: "Rewards Cards",
//       icon: "🏆",
//       desc: "Get rewarded for every swipe and purchase.",
//     },
//     {
//       name: "Business Cards",
//       icon: "💼",
//       desc: "Smart credit solutions for entrepreneurs.",
//     },
//     {
//       name: "Fuel Cards",
//       icon: "⛽",
//       desc: "Save big on fuel expenses and rewards.",
//     },

//      {
//     name: "Luxury Cards",
//     icon: "💎",
//     desc: "Premium cards offering exclusive perks & privileges.",
//   },
//   {
//     name: "Student Cards",
//     icon: "🎓",
//     desc: "Ideal for students to build credit & enjoy benefits.",
//   },
//   {
//     name: "Low Interest Cards",
//     icon: "📉",
//     desc: "Cards with minimal interest rates for smart spending.",
//   },
//   {
//     name: "Co-branded Cards",
//     icon: "🤝",
//     desc: "Collaborations with brands for rewards and offers.",
//   },
//   ];

//   return (
//     <div className="home-page">
//       {/* Hero Section */}
     



// <section className="hero-section light-theme">
//   <div className="hero-content">
//     <h1>
//       Compare & Choose <span>Top Credit Cards</span> Effortlessly 💳
//     </h1>
//     <p>
//       Unlock the best deals, rewards, and benefits in just a few clicks.
//       Simplify your credit card search with real-time comparisons and smart insights.
//     </p>
//     <div className="hero-buttons">
//       <button className="btn-primary">Explore Cards</button>
//       <button className="btn-secondary">Compare Now</button>
//     </div>
//   </div>

//   <div className="hero-image">
//     <div className="hero-image-container">
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/2169/2169862.png"
//         alt="Credit Card Illustration"
//       />
//     </div>
//   </div>
// </section>

 

//       {/* Categories Section */}
//       <section className="categories-section">
//         <h2 className="section-title">Top Credit Card Categories</h2>
//         <div className="categories-grid">
//           {categoryIcons.map((cat) => (
//             <div
//               key={cat.name}
//               className={`category-card ${
//                 activeCategory === cat.name ? "active" : ""
//               }`}
//               onClick={() => handleCategoryClick(cat.name)}
//             >
//               <div className="category-icon">{cat.icon}</div>
//               <h3>{cat.name}</h3>
//               <p>{cat.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Banks Section */}
//       <section className="banks-section">
//         <h2 className="section-title">Our Banking Partners</h2>
//         {banks.length === 0 ? (
//           <p>Loading banks...</p>
//         ) : (
//           <div className="banks-grid">
//             {banks.map((bank) => (
//               <div
//                 key={bank._id}
//                 className="bank-card"
//                 onClick={() => handleBankClick(bank._id)}
//               >
//                 <img
//                   src={
//                     bank.logo ||
//                     "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//                   }
//                   alt={bank.name}
//                 />
//                 <p className="bank-name">{bank.name}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Cards Section */}
     

     



// <section className="popular-cards">
//   <h2 className="section-title">
//     💳 Most Popular Credit Cards in India
//   </h2>

//   {loadingCards ? (
//     <p className="loading-text">Loading cards...</p>
//   ) : cards.length === 0 ? (
//     <p className="no-cards-text">No cards available.</p>
//   ) : (
//     <div className="cards-grid">
//       {cards.map((card) => (
//         <div
//           key={card._id}
//           className="card-item"
//           onClick={() => handleCardClick(card._id)}
//         >
//           <div className="card-image">
//             <img
//               src={card.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"}
//               alt={card.title}
//             />
//           </div>
//           <div className="card-content">
//             <h3>{card.title}</h3>
//             <p className="bank-name">{card.bank}</p>
//             <button className="view-btn">View Details →</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   )}
// </section>



//       {/* Latest News Section */}
//       <section className="news-section">
//         <h2 className="section-title">Latest Credit Card News</h2>
//         {loadingNews ? (
//           <p>Loading news...</p>
//         ) : (
//           <div className="news-grid">
//             {news.map((item) => (
//               <div
//                 key={item._id}
//                 className="news-card"
//                 onClick={() => handleNewsClick(item._id)}
//               >
//                 <img
//                   src={
//                     item.image ||
//                     "https://cdn-icons-png.flaticon.com/512/2965/2965879.png"
//                   }
//                   alt={item.title}
//                 />
//                 <h3>{item.title}</h3>
//                 <p>{item.summary?.slice(0, 100) || "Read more..."}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Trending Insights */}
//       <section className="insights-section">
//         <div className="section-header">
//           <h2>🔥 Trending Insights</h2>
//           <p>
//             Discover hot trends, expert analyses, and smart tips for credit
//             cards.
//           </p>
//         </div>

//         <div className="insights-carousel-container">
//           <button
//             className="scroll-btn left"
//             onClick={() => {
//               document
//                 .querySelector(".insights-scroll")
//                 .scrollBy({ left: -300, behavior: "smooth" });
//             }}
//           >
//             ❮
//           </button>

//           <div className="insights-scroll">
//             {insights.map((insight) => (
//               <div
//                 key={insight.id}
//                 className="insight-card"
//                 onClick={() => navigate(`/insight/${insight.id}`)}
//               >
//                 <div className="insight-img">
//                   <img
//                     src={
//                       insight.image ||
//                       "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
//                     }
//                     alt={insight.title}
//                   />
//                 </div>
//                 <div className="insight-info">
//                   <h4>{insight.title}</h4>
//                   <p>
//                     {insight.summary?.slice(0, 80) ||
//                       "Tap to explore this trend."}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             className="scroll-btn right"
//             onClick={() => {
//               document
//                 .querySelector(".insights-scroll")
//                 .scrollBy({ left: 300, behavior: "smooth" });
//             }}
//           >
            
//           </button>
//         </div>
//       </section>

//       {/* Latest Credit Card Insights */}
//       <section className="latest-insights">
//         <div className="insights-header">
//           <h2>💡 Latest Credit Card Insights</h2>
//           <p>
//             Explore the newest updates, offers, and financial tips from our
//             experts.
//           </p>
//         </div>

//         {loadingNews ? (
//           <p className="loading">Loading insights...</p>
//         ) : news && news.length > 0 ? (
//           <div className="insight-grid">
//             {news.slice(0, 3).map((item) => (
//               <div
//                 className="insight-card"
//                 key={item._id}
//                 onClick={() => handleNewsClick(item._id)}
//               >
//                 <div className="insight-img">
//                   <img
//                     src={
//                       item.image ||
//                       "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
//                     }
//                     alt={item.title}
//                   />
//                 </div>
//                 <div className="insight-content">
//                   <h3>{item.title}</h3>
//                   <p>
//                     {item.description?.slice(0, 100) ||
//                       "Learn more about this latest insight."}
//                   </p>
//                   <div className="insight-footer">
//                     <span className="insight-date">
//                       {new Date(item.createdAt).toLocaleDateString("en-IN", {
//                         day: "numeric",
//                         month: "short",
//                         year: "numeric",
//                       })}
//                     </span>
//                     <button className="insight-btn">Read More →</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="no-news">No insights available right now.</p>
//         )}
//       </section>

//       {/* <Footer /> */}
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { fetchNews, fetchCategories, fetchCards, fetchBanks } from "../api.js";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";
import { 
  FaWallet, 
  FaGift, 
  FaPlane, 
  FaCoins, 
  FaCreditCard, 
  FaRupeeSign 
} from "react-icons/fa";



export default function Home() {
  const [news, setNews] = useState([]);
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [banks, setBanks] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingCards, setLoadingCards] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const [insights, setInsights] = useState([
    {
      title: "Best Credit Cards for 2025",
      summary:
        "Compare top-performing credit cards offering travel, cashback & rewards benefits this year.",
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
      id: "1",
    },
    {
      title: "RBI’s New Credit Card Rules Explained",
      summary:
        "Understand how RBI's 2025 guidelines affect your credit score and card eligibility.",
      image: "https://cdn-icons-png.flaticon.com/512/3104/3104796.png",
      id: "2",
    },
    {
      title: "Top 5 Travel Cards with Lounge Access",
      summary:
        "Enjoy free airport lounges and exclusive travel perks with these credit cards.",
      image: "https://cdn-icons-png.flaticon.com/512/8146/8146553.png",
      id: "3",
    },
    {
      title: "Credit Card vs Debit Card — Which is Better?",
      summary:
        "A detailed comparison to help you pick the right card for your spending habits.",
      image: "https://cdn-icons-png.flaticon.com/512/8139/8139374.png",
      id: "4",
    },
  ]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [cat, crd, bnks, nws] = await Promise.all([
          fetchCategories(),
          fetchCards(),
          fetchBanks(),
          fetchNews(),
        ]);
        setCategories(cat);
        setCards(crd);
        setBanks(bnks);
        setNews(nws.news || nws);
      } catch (error) {
        console.error("Error loading homepage data:", error);
      } finally {
        setLoadingCards(false);
        setLoadingNews(false);
      }
    };
    loadData();
  }, []);

  const handleCategoryClick = (name) => navigate(`/category/${name}`);
  const handleBankClick = (bankId) => navigate(`/bank/${bankId}`);
  const handleCardClick = (cardId) => navigate(`/card/${cardId}`);
  const handleNewsClick = (newsId) => navigate(`/news/${newsId}`);

  const categoryIcons = [
    { name: "Shopping Cards", icon: "🛍️", desc: "Best for online and retail shopping rewards." },
    { name: "Travel Cards", icon: "✈️", desc: "Earn miles and free flights with every spend." },
    { name: "Cashback Cards", icon: "💰", desc: "Save more on daily expenses with cashback offers." },
    { name: "Rewards Cards", icon: "🏆", desc: "Get rewarded for every swipe and purchase." },
    { name: "Business Cards", icon: "💼", desc: "Smart credit solutions for entrepreneurs." },
    { name: "Fuel Cards", icon: "⛽", desc: "Save big on fuel expenses and rewards." },
    { name: "Luxury Cards", icon: "💎", desc: "Premium cards offering exclusive perks & privileges." },
    { name: "Student Cards", icon: "🎓", desc: "Ideal for students to build credit & enjoy benefits." },
    { name: "Low Interest Cards", icon: "📉", desc: "Cards with minimal interest rates for smart spending." },
    { name: "Co-branded Cards", icon: "🤝", desc: "Collaborations with brands for rewards and offers." },
  ];

  return (
    <div className="homeblue-container">
      {/* HERO SECTION */}
      <section className="homeblue-hero">
        <div className="homeblue-hero-content">
          <h1>
            Compare & Choose <span>Top Credit Cards</span> Effortlessly 💳
          </h1>
          <p>
            Unlock the best deals, rewards, and benefits in just a few clicks.
            Simplify your credit card search with real-time comparisons and smart insights.
          </p>
          <div className="homeblue-hero-buttons">
            <button className="homeblue-btn-primary">Explore Cards</button>
            <button className="homeblue-btn-secondary">Compare Now</button>
          </div>
        </div>
        <div className="homeblue-hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2169/2169862.png"
            alt="Credit Card Illustration"
          />
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="homeblue-category-section">
        <h2 className="homeblue-section-title">Top Credit Card Categories</h2>
        <div className="homeblue-category-grid">
          {categoryIcons.map((cat) => (
            <div
              key={cat.name}
              className={`homeblue-category-card ${
                activeCategory === cat.name ? "homeblue-active" : ""
              }`}
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div className="homeblue-category-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BANKS SECTION */}
      <section className="homeblue-banks-section">
        <h2 className="homeblue-section-title">Our Banking Partners</h2>
        {banks.length === 0 ? (
          <p>Loading banks...</p>
        ) : (
          <div className="homeblue-banks-grid">
            {banks.map((bank) => (
              <div
                key={bank._id}
                className="homeblue-bank-card"
                onClick={() => handleBankClick(bank._id)}
              >
                <div className="homeblue-bank-logo-container">
                  <img
                    src={
                      bank.logo ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt={bank.name}
                  />
                </div>
                <p className="homeblue-bank-name">{bank.name}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* POPULAR CARDS SECTION */}
      <section className="homeblue-popular-cards">
        <h2 className="homeblue-section-title">
          💳 Most Popular Credit Cards in India
        </h2>
        {loadingCards ? (
          <p>Loading cards...</p>
        ) : (
          <div className="homeblue-cards-grid">
            {cards.map((card) => (
              <div
                key={card._id}
                className="homeblue-card-item"
                onClick={() => handleCardClick(card._id)}
              >
                <img
                  src={
                    card.image ||
                    "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
                  }
                  alt={card.title}
                />
                <h3>{card.title}</h3>
                <p>{card.bank}</p>
                <button className="homeblue-view-btn">View Details →</button>
              </div>
            ))}
          </div>
        )}
      </section>

{/* 🌟 Why Choose Us Section */}
<section className="why-choose-us">
  <div className="container">
    <h2 className="section-title">Why Choose Cred Spy?</h2>
    <p className="section-subtitle">
      Discover why thousands trust us for smart credit card decisions
    </p>

    <div className="choose-grid">
      {/* Feature 1 */}
      <div className="choose-card">
        <div className="choose-icon">
          <FaWallet size={32} color="#1565c0" />
        </div>
        <h3>Easy Comparisons</h3>
        <p>
          Compare multiple credit cards side by side to find the perfect one
          for your lifestyle.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="choose-card">
        <div className="choose-icon">
          <FaGift size={32} color="#1565c0" />
        </div>
        <h3>Exclusive Rewards</h3>
        <p>
          Get the latest cashback offers, reward points, and special deals
          curated for you.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="choose-card">
        <div className="choose-icon">
          <FaPlane size={32} color="#1565c0" />
        </div>
        <h3>Travel Benefits</h3>
        <p>
          Access free airport lounges, flight discounts, and premium travel
          perks.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="choose-card">
        <div className="choose-icon">
          <FaCoins size={32} color="#1565c0" />
        </div>
        <h3>Smart Financial Insights</h3>
        <p>
          Get expert guidance, tips, and trends to optimize your credit card
          usage.
        </p>
      </div>
    </div>

    {/* Suggestions Section */}
    <div className="suggestions">
      <h3>Suggestions for You</h3>
      <p>
        Based on your interests and usage patterns, we recommend the best
        credit cards and offers tailored to you.
      </p>
      <div className="suggestion-items">
        <div className="suggestion-card">
          <FaCreditCard size={28} color="#1565c0" />
          <span>Top Cashback Cards</span>
        </div>
        <div className="suggestion-card">
          <FaRupeeSign size={28} color="#1565c0" />
          <span>Low Interest Cards</span>
        </div>
        <div className="suggestion-card">
          <FaPlane size={28} color="#1565c0" />
          <span>Best Travel Cards</span>
        </div>
        <div className="suggestion-card">
          <FaGift size={28} color="#1565c0" />
          <span>Exclusive Rewards</span>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* NEWS SECTION */}
      <section className="homeblue-news-section">
        <h2 className="homeblue-section-title">Latest Credit Card News</h2>
        {loadingNews ? (
          <p>Loading news...</p>
        ) : (
          <div className="homeblue-news-grid">
            {news.map((item) => (
              <div
                key={item._id}
                className="homeblue-news-card"
                onClick={() => handleNewsClick(item._id)}
              >
                <img
                  src={
                    item.image ||
                    "https://cdn-icons-png.flaticon.com/512/2965/2965879.png"
                  }
                  alt={item.title}
                />
                <h3>{item.title}</h3>
                <p>{item.summary?.slice(0, 100) || "Read more..."}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* INSIGHTS SECTION */}
      <section className="homeblue-insights">
        <h2 className="homeblue-section-title">🔥 Trending Insights</h2>
        <div className="homeblue-insights-scroll">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="homeblue-insight-card"
              onClick={() => navigate(`/insight/${insight.id}`)}
            >
              <img src={insight.image} alt={insight.title} />
              <h4>{insight.title}</h4>
              <p>{insight.summary}</p>
            </div>
          ))}
        </div>
      </section>

<section className="homeblue-latest-insights">
        <div className="homeblue-insights-header">
          <h2>💡 Latest Credit Card Insights</h2>
          <p>
            Explore the newest updates, offers, and financial tips from our experts.
          </p>
        </div>

        {loadingNews ? (
          <p className="homeblue-loading">Loading insights...</p>
        ) : news && news.length > 0 ? (
          <div className="homeblue-insight-grid">
            {news.slice(0, 3).map((item) => (
              <div
                className="homeblue-insight-card"
                key={item._id}
                onClick={() => handleNewsClick(item._id)}
              >
                <div className="homeblue-insight-img">
                  <img
                    src={
                      item.image ||
                      "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
                    }
                    alt={item.title}
                  />
                </div>
                <div className="homeblue-insight-content">
                  <h3>{item.title}</h3>
                  <p>
                    {item.description?.slice(0, 100) ||
                      "Learn more about this latest insight."}
                  </p>
                  <div className="homeblue-insight-footer">
                    <span className="homeblue-insight-date">
                      {new Date(item.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <button className="homeblue-insight-btn">Read More →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="homeblue-no-news">No insights available right now.</p>
        )}
      </section>


      
    </div>
  );
}

