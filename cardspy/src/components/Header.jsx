
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
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

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const menuItems = [
//     {
//       title: "Card Categories",
//       options: [
//         { name: "Best Credit Card", icon: <FaCrown /> },
//         { name: "Lifetime Free", icon: <FaCreditCard /> },
//         { name: "Travel", icon: <FaPlane /> },
//         { name: "Reward", icon: <FaGift /> },
//         { name: "Forex Credit Card", icon: <FaGlobe /> },
//         { name: "Domestic Lounge", icon: <FaBuilding /> },
//         { name: "Cashback", icon: <FaMoneyBillWave /> },
//         { name: "RuPay Credit Card", icon: <FaRupeeSign /> },
//         { name: "International Lounge", icon: <FaSuitcase /> },
//         { name: "Fuel", icon: <FaGasPump /> },
//         { name: "International Travel", icon: <FaPlane /> },
//         { name: "Fintech Cards", icon: <FaCoins /> },
//       ],
//     },
//     {
//       title: "Card Issuers",
//       options: [
//         { name: "SBI Card", icon: <FaUniversity /> },
//         { name: "HDFC Bank", icon: <FaUniversity /> },
//         { name: "ICICI Bank", icon: <FaUniversity /> },
//         { name: "Axis Bank", icon: <FaUniversity /> },
//         { name: "Kotak Mahindra", icon: <FaUniversity /> },
//         { name: "Yes Bank", icon: <FaUniversity /> },
//         { name: "IndusInd Bank", icon: <FaUniversity /> },
//         { name: "IDFC FIRST Bank", icon: <FaUniversity /> },
//         { name: "Bank of Baroda", icon: <FaUniversity /> },
//         { name: "Federal Bank", icon: <FaUniversity /> },
//         { name: "Union Bank", icon: <FaUniversity /> },
//         { name: "Canara Bank", icon: <FaUniversity /> },
//         { name: "Indian Bank", icon: <FaUniversity /> },
//         { name: "Central Bank of India", icon: <FaUniversity /> },
//         { name: "UCO Bank", icon: <FaUniversity /> },
//         { name: "Indian Overseas Bank", icon: <FaUniversity /> },
//         { name: "Punjab National Bank", icon: <FaUniversity /> },
//         { name: "Bank of India", icon: <FaUniversity /> },
//         { name: "IDBI Bank", icon: <FaUniversity /> },
//         { name: "South Indian Bank", icon: <FaUniversity /> },
//       ],
//     },
//     {
//       title: "Comparison",
//       options: [
//         { name: "Compare Credit Cards", icon: <FaWallet /> },
//         { name: "Top Offers", icon: <FaGift /> },
//         { name: "Best Rewards", icon: <FaCoins /> },
//         { name: "New Cards", icon: <FaCreditCard /> },
//       ],
//     },
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
//                   <div className="dropdown-menu">
//                     {item.options.map((opt, i) => (
//                       <Link
//                         key={i}
//                         to={`/category/${opt.name.toLowerCase().replace(/\s+/g, "-")}`}
//                         className="dropdown-card"
//                       >
//                         {opt.icon}
//                         <span>{opt.name}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </li>
//             ))}

//             {/* Social Icons */}
//             <li className="social-icons">
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                 <FaTwitter />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
import { Link } from "react-router-dom";
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [categories, setCategories] = useState([]);
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const catData = await fetchCategories();
        setCategories(catData); // backend categories
        const bankData = await fetchBanks();
        setBanks(bankData); // backend banks
      } catch (err) {
        console.error("Failed to fetch categories or banks:", err);
      }
    };
    loadData();
  }, []);

  const menuItems = [
    {
      title: "Card Categories",
      options: categories.map((cat) => {
        // Pre-defined icons based on name
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
        return {
          name: cat.name,
          icon: iconMap[cat.name] || <FaCreditCard />,
        };
      }),
    },
    {
      title: "Card Issuers",
      options: banks.map((bank) => ({
        name: bank.name,
        icon: <FaUniversity />,
      })),
    },
    {
      title: "Comparison",
      options: [
        { name: "Compare Credit Cards", icon: <FaWallet /> },
        { name: "Top Offers", icon: <FaGift /> },
        { name: "Best Rewards", icon: <FaCoins /> },
        { name: "New Cards", icon: <FaCreditCard /> },
      ],
    },
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
              <li
                key={idx}
                className="dropdown-item"
                onMouseEnter={() => setDropdownOpen(idx)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <span className="menu-title">{item.title} ▼</span>
                {dropdownOpen === idx && (
                  <div className="dropdown-menu">
                    {item.options.map((opt, i) => (
                      <Link
                        key={i}
                        to={`/category/${opt.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="dropdown-card"
                      >
                        {opt.icon}
                        <span>{opt.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}

            {/* Social Icons */}
            <li className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
