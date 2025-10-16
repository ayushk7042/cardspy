


import React, { useEffect, useState } from "react";
import { fetchNews, fetchCategories, fetchCards, fetchBanks } from "../api.js";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";

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

  // Load categories
  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  // Load all cards
  const loadCards = async () => {
    try {
      const data = await fetchCards();
      setAllCards(data);
      setCards(data);
    } catch (err) {
      console.error("Failed to fetch cards:", err);
    } finally {
      setLoadingCards(false);
    }
  };

  // Load banks
  const loadBanks = async () => {
    try {
      const data = await fetchBanks();
      setBanks(data);
    } catch (err) {
      console.error("Failed to fetch banks:", err);
    }
  };

  // Load news
  const loadNews = async () => {
    try {
      const data = await fetchNews();
      setNews(data.news || data);
    } catch (err) {
      console.error("Failed to fetch news:", err);
    } finally {
      setLoadingNews(false);
    }
  };

  useEffect(() => {
    loadCategories();
    loadCards();
    loadBanks();
    loadNews();
  }, []);

  // Category click → show only selected category cards
  // const handleCategoryClick = (categoryName) => {
  //   setActiveCategory(categoryName);
  //   const category = categories.find(
  //     (c) => c.name.toLowerCase() === categoryName.toLowerCase()
  //   );

  //   if (category) {
  //     const filteredCards = allCards.filter(
  //       (card) =>
  //         card.category &&
  //         card.category._id &&
  //         card.category._id === category._id
  //     );
  //     setCards(filteredCards);
  //   } else {
  //     setCards([]);
  //   }
  // };
   const handleCategoryClick = (name) => navigate(`/category/${name}`);

  // Bank click → navigate
  const handleBankClick = (bankId) => {
    navigate(`/bank/${bankId}`);
  };

  // Card click → navigate
  const handleCardClick = (cardId) => {
    navigate(`/card/${cardId}`);
  };

  // News click → navigate
  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  const categoryIcons = [
    {
      name: "Shopping Cards",
      icon: "🛍️",
      desc: "Best for online and retail shopping rewards.",
    },
    {
      name: "Travel Cards",
      icon: "✈️",
      desc: "Earn miles and free flights with every spend.",
    },
    {
      name: "Cashback Cards",
      icon: "💰",
      desc: "Save more on daily expenses with cashback offers.",
    },
    {
      name: "Rewards Cards",
      icon: "🏆",
      desc: "Get rewarded for every swipe and purchase.",
    },
    {
      name: "Business Cards",
      icon: "💼",
      desc: "Smart credit solutions for entrepreneurs.",
    },
    {
      name: "Fuel Cards",
      icon: "⛽",
      desc: "Save big on fuel expenses and rewards.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Compare & Choose <span>Top Credit Cards</span> Effortlessly
          </h1>
          <p>
            Explore expert reviews, latest offers, and smart comparisons. Find
            the best credit card suited for your lifestyle — rewards, cashback,
            or travel!
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Cards</button>
            <button className="btn-secondary">Compare Now</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331948.png"
            alt="Credit Card Illustration"
          />
        </div>
      </section>


 {/* <section className="hero-modern">
        <div className="hero-left">
          <h1>
            Compare & Choose <span>Top Credit Cards</span> Effortlessly
          </h1>
          <p>
            Explore expert reviews, latest offers & smart comparisons. Find
            the perfect credit card for your lifestyle — rewards, cashback or travel!
          </p>
          <div className="hero-actions">
            <button onClick={() => navigate("/category/Shopping Cards")} className="btn-main">Explore Cards</button>
            <button className="btn-outline">Compare Now</button>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8146/8146553.png"
            alt="credit-card"
          />
        </div>
      </section> */}


      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Top Credit Card Categories</h2>
        <div className="categories-grid">
          {categoryIcons.map((cat) => (
            <div
              key={cat.name}
              className={`category-card ${
                activeCategory === cat.name ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banks Section */}
      <section className="banks-section">
        <h2 className="section-title">Our Banking Partners</h2>
        {banks.length === 0 ? (
          <p>Loading banks...</p>
        ) : (
          <div className="banks-grid">
            {banks.map((bank) => (
              <div
                key={bank._id}
                className="bank-card"
                onClick={() => handleBankClick(bank._id)}
              >
                <img
                  src={
                    bank.logo ||
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt={bank.name}
                />
                <p className="bank-name">{bank.name}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Cards Section */}
      <section className="popular-cards">
        <h2 className="section-title">Most Popular Credit Cards in India</h2>
        {loadingCards ? (
          <p>Loading cards...</p>
        ) : cards.length === 0 ? (
          <p>No cards available.</p>
        ) : (
          <div className="cards-grid">
            {cards.map((card) => (
              <div
                key={card._id}
                className="card-item"
                onClick={() => handleCardClick(card._id)}
              >
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.bank}</p>
                <button>View Details →</button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Latest News Section */}
      <section className="news-section">
        <h2 className="section-title">Latest Credit Card News</h2>
        {loadingNews ? (
          <p>Loading news...</p>
        ) : (
          <div className="news-grid">
            {news.map((item) => (
              <div
                key={item._id}
                className="news-card"
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

      {/* Trending Insights */}
      <section className="insights-section">
        <div className="section-header">
          <h2>🔥 Trending Insights</h2>
          <p>
            Discover hot trends, expert analyses, and smart tips for credit
            cards.
          </p>
        </div>

        <div className="insights-carousel-container">
          <button
            className="scroll-btn left"
            onClick={() => {
              document
                .querySelector(".insights-scroll")
                .scrollBy({ left: -300, behavior: "smooth" });
            }}
          >
            ❮
          </button>

          <div className="insights-scroll">
            {insights.map((insight) => (
              <div
                key={insight.id}
                className="insight-card"
                onClick={() => navigate(`/insight/${insight.id}`)}
              >
                <div className="insight-img">
                  <img
                    src={
                      insight.image ||
                      "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
                    }
                    alt={insight.title}
                  />
                </div>
                <div className="insight-info">
                  <h4>{insight.title}</h4>
                  <p>
                    {insight.summary?.slice(0, 80) ||
                      "Tap to explore this trend."}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="scroll-btn right"
            onClick={() => {
              document
                .querySelector(".insights-scroll")
                .scrollBy({ left: 300, behavior: "smooth" });
            }}
          >
            ❯
          </button>
        </div>
      </section>

      {/* Latest Credit Card Insights */}
      <section className="latest-insights">
        <div className="insights-header">
          <h2>💡 Latest Credit Card Insights</h2>
          <p>
            Explore the newest updates, offers, and financial tips from our
            experts.
          </p>
        </div>

        {loadingNews ? (
          <p className="loading">Loading insights...</p>
        ) : news && news.length > 0 ? (
          <div className="insight-grid">
            {news.slice(0, 3).map((item) => (
              <div
                className="insight-card"
                key={item._id}
                onClick={() => handleNewsClick(item._id)}
              >
                <div className="insight-img">
                  <img
                    src={
                      item.image ||
                      "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
                    }
                    alt={item.title}
                  />
                </div>
                <div className="insight-content">
                  <h3>{item.title}</h3>
                  <p>
                    {item.description?.slice(0, 100) ||
                      "Learn more about this latest insight."}
                  </p>
                  <div className="insight-footer">
                    <span className="insight-date">
                      {new Date(item.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <button className="insight-btn">Read More →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-news">No insights available right now.</p>
        )}
      </section>

      {/* <Footer /> */}
    </div>
  );
}


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

//   // Loaders
//   useEffect(() => {
//     loadCategories();
//     loadCards();
//     loadBanks();
//     loadNews();
//   }, []);

//   const loadCategories = async () => {
//     try {
//       const data = await fetchCategories();
//       setCategories(data);
//     } catch (err) {
//       console.error("Failed to fetch categories:", err);
//     }
//   };

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

//   const loadBanks = async () => {
//     try {
//       const data = await fetchBanks();
//       setBanks(data);
//     } catch (err) {
//       console.error("Failed to fetch banks:", err);
//     }
//   };

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

//   // Navigations
//   const handleCategoryClick = (name) => navigate(`/category/${name}`);
//   const handleBankClick = (id) => navigate(`/bank/${id}`);
//   const handleCardClick = (id) => navigate(`/card/${id}`);
//   const handleNewsClick = (id) => navigate(`/news/${id}`);

//   const categoryIcons = [
//     { name: "Shopping Cards", icon: "🛍️", desc: "Best for online and retail shopping rewards." },
//     { name: "Travel Cards", icon: "✈️", desc: "Earn miles and free flights with every spend." },
//     { name: "Cashback Cards", icon: "💰", desc: "Save more on daily expenses with cashback offers." },
//     { name: "Rewards Cards", icon: "🏆", desc: "Get rewarded for every swipe and purchase." },
//     { name: "Business Cards", icon: "💼", desc: "Smart credit solutions for entrepreneurs." },
//     { name: "Fuel Cards", icon: "⛽", desc: "Save big on fuel expenses and rewards." },
//   ];

//   return (
//     <div className="home-modern">
//       {/* HERO SECTION */}
//       <section className="hero-modern">
//         <div className="hero-left">
//           <h1>
//             Compare & Choose <span>Top Credit Cards</span> Effortlessly
//           </h1>
//           <p>
//             Explore expert reviews, latest offers & smart comparisons. Find
//             the perfect credit card for your lifestyle — rewards, cashback or travel!
//           </p>
//           <div className="hero-actions">
//             <button onClick={() => navigate("/category/Shopping Cards")} className="btn-main">Explore Cards</button>
//             <button className="btn-outline">Compare Now</button>
//           </div>
//         </div>
//         <div className="hero-right">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/8146/8146553.png"
//             alt="credit-card"
//           />
//         </div>
//       </section>

//       {/* CATEGORY SECTION */}
//       <section className="category-modern">
//         <h2>Explore Credit Card Categories</h2>
//         <div className="category-grid">
//           {categoryIcons.map((cat) => (
//             <div
//               key={cat.name}
//               onClick={() => handleCategoryClick(cat.name)}
//               className={`category-item ${activeCategory === cat.name ? "active" : ""}`}
//             >
//               <div className="category-icon">{cat.icon}</div>
//               <h3>{cat.name}</h3>
//               <p>{cat.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* BANK SECTION */}
//       <section className="banks-modern">
//         <h2>Our Trusted Banking Partners</h2>
//         <div className="banks-grid">
//           {banks.map((bank) => (
//             <div
//               key={bank._id}
//               className="bank-item"
//               onClick={() => handleBankClick(bank._id)}
//             >
//               <img
//                 src={bank.logo || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
//                 alt={bank.name}
//               />
//               <span>{bank.name}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* POPULAR CARDS */}
//       <section className="cards-modern">
//         <h2>Most Popular Credit Cards in India</h2>
//         {loadingCards ? (
//           <p>Loading cards...</p>
//         ) : (
//           <div className="cards-grid">
//             {cards.map((card) => (
//               <div
//                 key={card._id}
//                 className="card-modern"
//                 onClick={() => handleCardClick(card._id)}
//               >
//                 <img src={card.image} alt={card.title} />
//                 <h3>{card.title}</h3>
//                 <p>{card.bank}</p>
//                 <button>View Details →</button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* TRENDING INSIGHTS */}
//       <section className="insight-modern">
//         <div className="insight-header">
//           <h2>🔥 Trending Insights</h2>
//           <p>Expert analyses, top offers, and trending credit card updates.</p>
//         </div>
//         <div className="insight-scroll-container">
//           {insights.map((insight) => (
//             <div
//               key={insight.id}
//               className="insight-item"
//               onClick={() => navigate(`/insight/${insight.id}`)}
//             >
//               <img src={insight.image} alt={insight.title} />
//               <h4>{insight.title}</h4>
//               <p>{insight.summary}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* LATEST NEWS */}
//       <section className="news-modern">
//         <h2>Latest Credit Card News</h2>
//         <div className="news-grid">
//           {news.map((n) => (
//             <div key={n._id} className="news-item" onClick={() => handleNewsClick(n._id)}>
//               <img
//                 src={n.image || "https://cdn-icons-png.flaticon.com/512/2965/2965879.png"}
//                 alt={n.title}
//               />
//               <h3>{n.title}</h3>
//               <p>{n.summary?.slice(0, 100) || "Read more..."}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
