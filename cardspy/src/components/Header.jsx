

// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   FaWallet,
// //   FaBars,
// //   FaTimes,
// //   FaInstagram,
// //   FaTwitter,
// //   FaLinkedin,
// //   FaGift,
// //   FaPlane,
// //   FaCoins,
// //   FaGlobe,
// //   FaGasPump,
// //   FaCreditCard,
// //   FaUniversity,
// //   FaBuilding,
// //   FaMoneyBillWave,
// //   FaSuitcase,
// //   FaRupeeSign,
// //   FaCrown,
// // } from "react-icons/fa";
// // import { fetchCategories, fetchBanks } from "../api.js";
// // import "./Header.css";


// // export default function Header() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [dropdownOpen, setDropdownOpen] = useState(null);
// //   const [categories, setCategories] = useState([]);
// //   const [banks, setBanks] = useState([]);

// //   useEffect(() => {
// //     const loadData = async () => {
// //       try {
// //         const catData = await fetchCategories();
// //         setCategories(catData); // backend categories
// //         const bankData = await fetchBanks();
// //         setBanks(bankData); // backend banks
// //       } catch (err) {
// //         console.error("Failed to fetch categories or banks:", err);
// //       }
// //     };
// //     loadData();
// //   }, []);

// //   const menuItems = [
// //     {
// //       title: "Card Categories",
// //       options: categories.map((cat) => {
// //         // Pre-defined icons based on name
// //         const iconMap = {
// //           "Best Credit Card": <FaCrown />,
// //           "Lifetime Free": <FaCreditCard />,
// //           Travel: <FaPlane />,
// //           Reward: <FaGift />,
// //           "Forex Credit Card": <FaGlobe />,
// //           "Domestic Lounge": <FaBuilding />,
// //           Cashback: <FaMoneyBillWave />,
// //           "RuPay Credit Card": <FaRupeeSign />,
// //           "International Lounge": <FaSuitcase />,
// //           Fuel: <FaGasPump />,
// //           "International Travel": <FaPlane />,
// //           "Fintech Cards": <FaCoins />,
// //         };
// //         return {
// //           name: cat.name,
// //           icon: iconMap[cat.name] || <FaCreditCard />,
// //         };
// //       }),
// //     },
// //     {
// //       title: "Card Issuers",
// //       options: banks.map((bank) => ({
// //         name: bank.name,
// //         icon: <FaUniversity />,
// //       })),
// //     },
// //     {
// //       title: "Comparison",
// //       options: [
// //         { name: "Compare Credit Cards", icon: <FaWallet /> },
// //         { name: "Top Offers", icon: <FaGift /> },
// //         { name: "Best Rewards", icon: <FaCoins /> },
// //         { name: "New Cards", icon: <FaCreditCard /> },
// //       ],
// //     },
// //   ];

// //   return (
// //     <header>
// //       <div className="container">
// //         {/* Logo */}
// //         <Link to="/" className="logo">
// //           <FaWallet size={30} color="#1d4ed8" />
// //           <span>Card Spy</span>
// //         </Link>

// //         {/* Navigation */}
// //         <nav>
// //           <ul className={menuOpen ? "active" : ""}>
// //             {menuItems.map((item, idx) => (
// //               <li
// //                 key={idx}
// //                 className="dropdown-item"
// //                 onMouseEnter={() => setDropdownOpen(idx)}
// //                 onMouseLeave={() => setDropdownOpen(null)}
// //               >
// //                 <span className="menu-title">{item.title} ▼</span>
// //                 {dropdownOpen === idx && (
// //                   <div className="dropdown-menu">
// //                     {item.options.map((opt, i) => (
// //                       <Link
// //                         key={i}
// //                         to={`/category/${opt.name.toLowerCase().replace(/\s+/g, "-")}`}
// //                         className="dropdown-card"
// //                       >
// //                         {opt.icon}
// //                         <span>{opt.name}</span>
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}
// //               </li>
// //             ))}

// //             {/* Social Icons */}
// //             <li className="social-icons">
// //               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
// //                 <FaInstagram />
// //               </a>
// //               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
// //                 <FaTwitter />
// //               </a>
// //               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
// //                 <FaLinkedin />
// //               </a>
// //             </li>
// //           </ul>
// //         </nav>

// //         {/* Mobile Menu Button */}
// //         <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
// //           {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
// //         </button>
// //       </div>
// //     </header>
// //   );
// // }



// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaWallet,
//   FaBars,
//   FaTimes,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedin,
//   FaGift,
//   FaPlane,
//   FaCoins,
//   FaGlobe,
//   FaGasPump,
//   FaCreditCard,
//   FaUniversity,
//   FaBuilding,
//   FaMoneyBillWave,
//   FaSuitcase,
//   FaRupeeSign,
//   FaCrown,
// } from "react-icons/fa";
// import { fetchCategories, fetchBanks } from "../api.js";
// import "./Header.css";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [banks, setBanks] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const catData = await fetchCategories();
//         setCategories(catData);
//         const bankData = await fetchBanks();
//         setBanks(bankData);
//       } catch (err) {
//         console.error("Failed to fetch categories or banks:", err);
//       }
//     };
//     loadData();
//   }, []);

//   // Handlers for navigation
//   const handleCategoryClick = (name) => {
//     navigate(`/category/${name.toLowerCase().replace(/\s+/g, "-")}`);
//     setDropdownOpen(null); // close dropdown
//     setMenuOpen(false); // close mobile menu
//   };

//   const handleBankClick = (bankId) => {
//     navigate(`/bank/${bankId}`);
//     setDropdownOpen(null);
//     setMenuOpen(false);
//   };

//   const menuItems = [
//     { title: "Card Categories", type: "categories" },
//     { title: "Card Issuers", type: "banks" },
//     { title: "Comparison", type: "comparison" },
//   ];

//   return (
//     <header>
//       <div className="container">
//         {/* Logo */}
//         <Link to="/" className="logo">
//           <FaWallet size={30} color="#1d4ed8" />
//           <span>Card Spy</span>
//         </Link>

//         {/* Navigation */}
//         <nav>
//           <ul className={menuOpen ? "active" : ""}>
//             {menuItems.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="dropdown-item"
//                 onMouseEnter={() => setDropdownOpen(idx)}
//                 onMouseLeave={() => setDropdownOpen(null)}
//               >
//                 <span className="menu-title">{item.title} ▼</span>

//                 {dropdownOpen === idx && (
//                   <div className="dropdown-menu mega-dropdown">
//                     {/* Card Categories */}
//                     {item.type === "categories" &&
//                       categories.map((cat) => {
//                         const iconMap = {
//                           "Best Credit Card": <FaCrown />,
//                           "Lifetime Free": <FaCreditCard />,
//                           Travel: <FaPlane />,
//                           Reward: <FaGift />,
//                           "Forex Credit Card": <FaGlobe />,
//                           "Domestic Lounge": <FaBuilding />,
//                           Cashback: <FaMoneyBillWave />,
//                           "RuPay Credit Card": <FaRupeeSign />,
//                           "International Lounge": <FaSuitcase />,
//                           Fuel: <FaGasPump />,
//                           "International Travel": <FaPlane />,
//                           "Fintech Cards": <FaCoins />,
//                         };
//                         return (
//                           <div
//                             key={cat._id}
//                             className="dropdown-card"
//                             onClick={() => handleCategoryClick(cat.name)}
//                           >
//                             {iconMap[cat.name] || <FaCreditCard />}
//                             <span>{cat.name}</span>
//                           </div>
//                         );
//                       })}

//                     {/* Card Issuers */}
//                     {item.type === "banks" &&
//                       banks.map((bank) => (
//                         <div
//                           key={bank._id}
//                           className="dropdown-card"
//                           onClick={() => handleBankClick(bank._id)}
//                         >
//                           <FaUniversity />
//                           <span>{bank.name}</span>
//                         </div>
//                       ))}

//                     {/* Comparison */}
//                     {item.type === "comparison" &&
//                       [
//                         { name: "Compare Credit Cards", icon: <FaWallet />, route: "/compare" },
//                         { name: "Top Offers", icon: <FaGift />, route: "/offers" },
//                         { name: "Best Rewards", icon: <FaCoins />, route: "/rewards" },
//                         { name: "New Cards", icon: <FaCreditCard />, route: "/new-cards" },
//                       ].map((opt, i) => (
//                         <div
//                           key={i}
//                           className="dropdown-card"
//                           onClick={() => navigate(opt.route)}
//                         >
//                           {opt.icon}
//                           <span>{opt.name}</span>
//                         </div>
//                       ))}
//                   </div>
//                 )}
//               </li>
//             ))}

//             {/* Social Icons */}
//             <li className="social-icons">
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaTwitter />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin />
//               </a>
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>
//     </header>
//   );
// }



import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaBars,
  FaTimes,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGift,
  FaPlane,
  FaCoins,
  FaGlobe,
  FaGasPump,
  FaCreditCard,
  FaUniversity,
  FaBuilding,
  FaMoneyBillWave,
  FaSuitcase,
  FaRupeeSign,
  FaCrown,
} from "react-icons/fa";
import { fetchCategories, fetchBanks } from "../api.js";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // clicked dropdown
  const [categories, setCategories] = useState([]);
  const [banks, setBanks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const catData = await fetchCategories();
        setCategories(catData);
        const bankData = await fetchBanks();
        setBanks(bankData);
      } catch (err) {
        console.error("Failed to fetch categories or banks:", err);
      }
    };
    loadData();
  }, []);

  // Handlers for navigation
  const handleCategoryClick = (name) => {
    navigate(`/category/${name}`);
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleBankClick = (bankId) => {
    navigate(`/bank/${bankId}`);
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // Toggle dropdown open/close on click
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const menuItems = [
    { title: "Card Categories", type: "categories" },
    { title: "Card Issuers", type: "banks" },
    { title: "Comparison", type: "comparison" },
  ];

  return (
    <header>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          <FaWallet size={30} color="#1d4ed8" />
          <span>Card Spy</span>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className={menuOpen ? "active" : ""}>
            {menuItems.map((item, idx) => (
              <li key={idx} className="dropdown-item">
                <span
                  className="menu-title"
                  onClick={() => toggleDropdown(idx)}
                >
                  {item.title} ▼
                </span>

                {activeDropdown === idx && (
                  <div className="dropdown-menu mega-dropdown">
                    {/* Card Categories */}
                    {item.type === "categories" &&
                      categories.map((cat) => {
                        const iconMap = {
                          "Best Credit Card": <FaCrown />,
                          "Lifetime Free": <FaCreditCard />,
                          Travel: <FaPlane />,
                          Reward: <FaGift />,
                          "Forex Credit Card": <FaGlobe />,
                          "Domestic Lounge": <FaBuilding />,
                          Cashback: <FaMoneyBillWave />,
                          "RuPay Credit Card": <FaRupeeSign />,
                          "International Lounge": <FaSuitcase />,
                          Fuel: <FaGasPump />,
                          "International Travel": <FaPlane />,
                          "Fintech Cards": <FaCoins />,
                        };
                        return (
                          <div
                            key={cat._id}
                            className="dropdown-card"
                            onClick={() => handleCategoryClick(cat.name)}
                          >
                            {iconMap[cat.name] || <FaCreditCard />}
                            <span>{cat.name}</span>
                          </div>
                        );
                      })}

                    {/* Card Issuers */}
                    {item.type === "banks" &&
                      banks.map((bank) => (
                        <div
                          key={bank._id}
                          className="dropdown-card"
                          onClick={() => handleBankClick(bank._id)}
                        >
                          <FaUniversity />
                          <span>{bank.name}</span>
                        </div>
                      ))}

                    {/* Comparison */}
                    {item.type === "comparison" &&
                      [
                        { name: "Compare Credit Cards", icon: <FaWallet />, route: "/compare" },
                        { name: "Top Offers", icon: <FaGift />, route: "/offers" },
                        { name: "Best Rewards", icon: <FaCoins />, route: "/rewards" },
                        { name: "New Cards", icon: <FaCreditCard />, route: "/new-cards" },
                      ].map((opt, i) => (
                        <div
                          key={i}
                          className="dropdown-card"
                          onClick={() => navigate(opt.route)}
                        >
                          {opt.icon}
                          <span>{opt.name}</span>
                        </div>
                      ))}
                  </div>
                )}
              </li>
            ))}

            {/* Social Icons */}
            <li className="social-icons">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </header>
  );
}
