// // // import React, { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom";
// // // import { fetchNewsById } from "../api";

// // // export default function NewsDetail() {
// // //   const { id } = useParams();
// // //   const [news, setNews] = useState(null);

// // //   useEffect(() => {
// // //     const loadNews = async () => {
// // //       const data = await fetchNewsById(id);
// // //       setNews(data);
// // //     };
// // //     loadNews();
// // //   }, [id]);

// // //   if (!news) return <p>Loading...</p>;

// // //   return (
// // //     <div className="news-detail">
// // //       <h1>{news.title}</h1>
// // //       <img src={news.image} alt={news.title} />
// // //       <p>{news.summary}</p>
// // //       <p>{news.content}</p>
// // //     </div>
// // //   );
// // // }





// // import React, { useEffect, useState } from "react";
// // import { useParams, Link, useNavigate } from "react-router-dom";
// // import { fetchNewsById } from "../api";
// // import "./NewsDetail.css";

// // export default function NewsDetail() {
// //   const { id } = useParams();
// //   const [news, setNews] = useState(null);
// //   const [relatedNews, setRelatedNews] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const loadNews = async () => {
// //       try {
// //         const data = await fetchNewsById(id);
// //         setNews(data);

// //         // Fake related news (filter same category later from fetched data)
// //         if (data?.related) {
// //           setRelatedNews(data.related);
// //         }
// //         setLoading(false);
// //       } catch (err) {
// //         console.error("Error loading news:", err);
// //         setLoading(false);
// //       }
// //     };
// //     loadNews();
// //   }, [id]);

// //   if (loading) return <p className="loading">Loading news details...</p>;
// //   if (!news) return <p className="error">News not found!</p>;

// //   return (
// //     <div className="news-detail-container">
// //       <div className="news-detail-main">
// //         <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

// //         <div className="news-header">
// //           <h1 className="news-title">{news.title}</h1>
// //           <p className="news-meta">
// //             🏦 {news.source || "Finance Today"} | 📅{" "}
// //             {new Date(news.createdAt).toLocaleDateString()}
// //           </p>
// //         </div>

// //         <div className="news-image-wrapper">
// //           <img src={news.image} alt={news.title} className="news-image" />
// //         </div>

// //         <div className="news-content">
// //           <p className="news-summary">{news.summary}</p>
// //           <div className="news-body">{news.content}</div>
// //         </div>
// //       </div>

// //       <aside className="news-sidebar">
// //         <h3>📢 Related Articles</h3>
// //         {relatedNews?.length ? (
// //           relatedNews.map((item) => (
// //             <Link
// //               key={item._id}
// //               to={`/news/${item._id}`}
// //               className="related-item"
// //             >
// //               <img src={item.image} alt={item.title} />
// //               <div>
// //                 <h4>{item.title}</h4>
// //                 <p>{item.summary?.slice(0, 60)}...</p>
// //               </div>
// //             </Link>
// //           ))
// //         ) : (
// //           <p>No related news available.</p>
// //         )}
// //       </aside>
// //     </div>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { fetchNewsById } from "../api";
// import "./NewsDetail.css";

// export default function NewsDetail() {
//   const { id } = useParams();
//   const [news, setNews] = useState(null);
//   const [relatedNews, setRelatedNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const loadNews = async () => {
//       try {
//         const data = await fetchNewsById(id);
//         setNews(data);

//         // Fetch related news from same category (or mock 6)
//         if (data?.related && data.related.length > 0) {
//           setRelatedNews(data.related.slice(0, 6));
//         } else {
//           setRelatedNews([
//             {
//               _id: "1",
//               title: "Best Cashback Credit Cards for 2025",
//               image:
//                 "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
//               summary: "Discover top cashback credit cards with exciting rewards.",
//             },
//             {
//               _id: "2",
//               title: "RBI’s New Credit Card Regulations Explained",
//               image:
//                 "https://cdn-icons-png.flaticon.com/512/2172/2172892.png",
//               summary: "Understand the latest RBI guidelines for card users.",
//             },
//             {
//               _id: "3",
//               title: "How to Boost Your Credit Score Quickly",
//               image:
//                 "https://cdn-icons-png.flaticon.com/512/2010/2010406.png",
//               summary: "Simple steps to increase your credit score effectively.",
//             },
//             {
//               _id: "4",
//               title: "Top 5 Travel Credit Cards in India",
//               image:
//                 "https://cdn-icons-png.flaticon.com/512/2331/2331953.png",
//               summary: "Earn miles and airport lounge access with these cards.",
//             },
//             {
//               _id: "5",
//               title: "Card Fraud Protection: What You Should Know",
//               image:
//                 "https://cdn-icons-png.flaticon.com/512/4903/4903921.png",
//               summary: "Tips to secure your card from online and offline fraud.",
//             },
//             {
//               _id: "6",
//               title: "Digital Banking Trends You Must Know",
//               image:
//                 "https://cdn-icons-png.flaticon.com/512/3214/3214679.png",
//               summary: "Explore innovations shaping the future of digital banking.",
//             },
//           ]);
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error("Error loading news:", err);
//         setLoading(false);
//       }
//     };
//     loadNews();
//   }, [id]);

//   if (loading) return <p className="loading">Loading news details...</p>;
//   if (!news) return <p className="error">News not found!</p>;

//   return (
//     <div className="news-detail-container">
//       <div className="news-detail-main">
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           ← Back
//         </button>

//         <div className="news-header">
//           <h1 className="news-title">{news.title}</h1>
//           <p className="news-meta">
//             🏦 {news.source || "Finance Today"} | 📅{" "}
//             {new Date(news.createdAt).toLocaleDateString()}
//           </p>
//         </div>

//         <div className="news-image-wrapper">
//           <img src={news.image} alt={news.title} className="news-image" />
//         </div>

//         <div className="news-content">
//           <p className="news-summary">{news.summary}</p>
//           <div
//             className="news-body"
//             dangerouslySetInnerHTML={{ __html: news.content }}
//           />

//           {news.tags && (
//             <div className="news-tags">
//               <h4>Tags:</h4>
//               {news.tags.map((tag, i) => (
//                 <span key={i} className="tag">
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           )}

//           <div className="share-section">
//             <h4>Share this article:</h4>
//             <div className="share-buttons">
//               <a
//                 href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
//                   news.title
//                 )}&url=${window.location.href}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 🐦 Twitter
//               </a>
//               <a
//                 href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 💼 LinkedIn
//               </a>
//               <a
//                 href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
//                   news.title + " " + window.location.href
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 💬 WhatsApp
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <aside className="news-sidebar">
//         <h3>📢 Latest News</h3>
//         <div className="related-grid">
//           {relatedNews.map((item) => (
//             <Link
//               key={item._id}
//               to={`/news/${item._id}`}
//               className="related-card"
//             >
//               <img src={item.image} alt={item.title} />
//               <h4>{item.title}</h4>
//             </Link>
//           ))}
//         </div>
//       </aside>
//     </div>
//   );
// }





// import React, { useEffect, useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { fetchNewsById, fetchAllCategories, fetchAllNews } from "../api";
// import "./NewsDetail.css";

// export default function NewsDetail() {
//   const { id } = useParams();
//   const [news, setNews] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [latestNews, setLatestNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const loadNews = async () => {
//       try {
//         const data = await fetchNewsById(id);
//         setNews(data);

//         // fetch all categories from backend (already connected)
//         const catRes = await fetchAllCategories();
//         setCategories(catRes || []);

//         // fetch 4 latest news (already from backend)
//         const allNews = await fetchAllNews();
//         setLatestNews(allNews.slice(0, 4));

//         setLoading(false);
//       } catch (err) {
//         console.error("Error loading news:", err);
//         setLoading(false);
//       }
//     };
//     loadNews();
//   }, [id]);

//   if (loading) return <p className="loading">Loading news details...</p>;
//   if (!news) return <p className="error">News not found!</p>;

//   return (
//     <div className="news-detail-layout">
//       {/* LEFT SIDEBAR - CATEGORIES */}
//       <aside className="left-sidebar">
//         <h3>🗂 Categories</h3>
//         {categories?.length ? (
//           <ul className="category-list">
//             {categories.map((cat) => (
//               <li key={cat._id}>
//                 <Link to={`/category/${cat._id}`}>{cat.name}</Link>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No categories found.</p>
//         )}
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="news-detail-main">
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           ← Back
//         </button>

//         <h1 className="news-title">{news.title}</h1>
//         <p className="news-meta">
//           🏦 {news.source || "Finance Today"} | 📅{" "}
//           {new Date(news.createdAt).toLocaleDateString()}
//         </p>

//         <div className="news-image-wrapper">
//           <img src={news.image} alt={news.title} className="news-image" />
//         </div>

//         <div className="news-content">
//           <p className="news-summary">{news.summary}</p>
//           <div
//             className="news-body"
//             dangerouslySetInnerHTML={{ __html: news.content }}
//           />
//         </div>
//       </main>

//       {/* RIGHT SIDEBAR - LATEST NEWS */}
//       <aside className="right-sidebar">
//         <h3>📰 Latest News</h3>
//         <div className="latest-grid">
//           {latestNews?.length ? (
//             latestNews.map((item) => (
//               <Link
//                 key={item._id}
//                 to={`/news/${item._id}`}
//                 className="latest-card"
//               >
//                 <img src={item.image} alt={item.title} />
//                 <div>
//                   <h4>{item.title}</h4>
//                   <p>{item.summary?.slice(0, 70)}...</p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No recent news available.</p>
//           )}
//         </div>
//       </aside>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { fetchNewsById, fetchCategories, fetchNews } from "../api";
// import "./NewsDetail.css";

// export default function NewsDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [news, setNews] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [latestPosts, setLatestPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const loadData = async () => {
//       try {
//         // Fetch main news
//         const newsData = await fetchNewsById(id);
//         setNews(newsData);

//         // Fetch categories (like navbar)
//         const categoriesData = await fetchCategories();
//         setCategories(categoriesData || []);

//         // Fetch 4 latest news posts (like Home page)
//         const newsList = await fetchNews();
//         setLatestPosts(newsList.slice(0, 4));

//         setLoading(false);
//       } catch (err) {
//         console.error("Error loading data:", err);
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [id]);

//   if (loading) return <p className="loading">Loading news details...</p>;
//   if (!news) return <p className="error">News not found!</p>;

//   return (
//     <div className="news-detail-layout">
//       {/* LEFT SIDEBAR - Categories */}
//       <aside className="left-sidebar">
//         <h3>🗂 Categories</h3>
//         {categories?.length ? (
//           <ul className="category-list">
//             {categories.map((cat) => (
//               <li key={cat._id} onClick={() => navigate(`/category/${cat._id}`)}>
//                 {cat.name}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No categories found.</p>
//         )}
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="news-detail-main">
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           ← Back
//         </button>

//         <h1 className="news-title">{news.title}</h1>
//         <p className="news-meta">
//           🏦 {news.source || "Finance Today"} | 📅{" "}
//           {new Date(news.createdAt).toLocaleDateString()}
//         </p>

//         <div className="news-image-wrapper">
//           <img src={news.image} alt={news.title} className="news-image" />
//         </div>

//         <div className="news-content">
//           <p className="news-summary">{news.summary}</p>
//           <div
//             className="news-body"
//             dangerouslySetInnerHTML={{ __html: news.content }}
//           />
//         </div>
//       </main>

//       {/* RIGHT SIDEBAR - Latest Posts (like Home page cards) */}
//       <aside className="right-sidebar">
//         <h3>📰 Latest Posts</h3>
//         <div className="latest-grid">
//           {latestPosts?.length ? (
//             latestPosts.map((item) => (
//               <Link
//                 key={item._id}
//                 to={`/news/${item._id}`}
//                 className="latest-card"
//               >
//                 <img src={item.image} alt={item.title} />
//                 <div>
//                   <h4>{item.title}</h4>
//                   <p>{item.summary?.slice(0, 70)}...</p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No latest posts available.</p>
//           )}
//         </div>
//       </aside>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchNewsById, fetchCategories, fetchNews } from "../api";
import "./NewsDetail.css";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState(null);
  const [categories, setCategories] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadData = async () => {
      try {
        // Fetch main news
        const newsData = await fetchNewsById(id);
        setNews(newsData);

        // Fetch categories (like navbar)
        const categoriesData = await fetchCategories();
        setCategories(categoriesData || []);

        // Fetch latest news (like Home page)
        const newsListData = await fetchNews();
        const newsArray = newsListData.news || newsListData; // ensure array
        setLatestPosts(newsArray.slice(0, 4));

        setLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) return <p className="loading">Loading news details...</p>;
  if (!news) return <p className="error">News not found!</p>;

  return (
    <div className="news-detail-layout">
      {/* LEFT SIDEBAR - Categories */}
      <aside className="left-sidebar">
        <h3>🗂 Categories</h3>
        {categories?.length ? (
          <ul className="category-list">
            {categories.map((cat) => (
              <li
                key={cat._id}
                onClick={() =>navigate(`/category/${encodeURIComponent(cat.name)}`)
}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No categories found.</p>
        )}
      </aside>

      {/* MAIN CONTENT */}
      <main className="news-detail-main">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1 className="news-title">{news.title}</h1>
        <p className="news-meta">
          🏦 {news.source || "Finance Today"} | 📅{" "}
          {new Date(news.createdAt).toLocaleDateString()}
        </p>

        <div className="news-image-wrapper">
          <img src={news.image} alt={news.title} className="news-image" />
        </div>

        <div className="news-content">
          <p className="news-summary">{news.summary}</p>
          <div
            className="news-body"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </div>
      </main>

      {/* RIGHT SIDEBAR - Latest Posts */}
      <aside className="right-sidebar">
        <h3>📰 Latest Posts</h3>
        <div className="latest-grid">
          {latestPosts?.length ? (
            latestPosts.map((item) => (
              <Link
                key={item._id}
                to={`/news/${item._id}`}
                className="latest-card"
              >
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.summary?.slice(0, 70)}...</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No latest posts available.</p>
          )}
        </div>
      </aside>
    </div>
  );
}
