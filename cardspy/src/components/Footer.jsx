



// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   FaFacebookF,
// //   FaTwitter,
// //   FaInstagram,
// //   FaLinkedinIn,
// //   FaYoutube,
// //   FaEnvelope,
// //   FaPhoneAlt,
// //   FaMapMarkerAlt,
// // } from "react-icons/fa";
// // import "./Footer.css";

// // const Footer = ({ banks = [], popularCards = [] }) => {
// //   const navigate = useNavigate();

// //   const popularCategories = [
// //     { name: "Best Credit Cards", route: "/category/best-credit-card" },
// //     { name: "Travel Cards", route: "/category/travel" },
// //     { name: "Lifetime Free Cards", route: "/category/lifetime-free" },
// //     { name: "Reward Cards", route: "/category/reward" },
// //     { name: "Cashback Cards", route: "/category/cashback" },
// //   ];

// //   return (
// //     <footer className="footer-premium">
// //       <div className="footer-container">

// //         {/* Brand Info */}
// //         <div className="footer-section about">
// //           <h2 className="footer-logo">CredSpy</h2>
// //           <p>
// //             Your trusted platform to explore, compare, and choose the best
// //             credit cards from top banks. Make smarter financial decisions —
// //             effortlessly.
// //           </p>
// //           <div className="contact-info">
// //             <p><FaEnvelope /> affiliate@credspy.com</p>
// //             <p><FaPhoneAlt /> +91 98765 43210</p>
// //             <p><FaMapMarkerAlt /> Gurgaon Sec-62, Haryana, India</p>
// //           </div>
// //         </div>

// //         {/* Quick Links */}
// //         <div className="footer-section links">
// //           <h3>Quick Links</h3>
// //           <ul>
// //             <li onClick={() => navigate("/")}>Home</li>
// //             <li onClick={() => navigate("/offers")}>Offers</li>
// //             <li onClick={() => navigate("/news")}>News & Insights</li>
// //             <li onClick={() => navigate("/contact")}>Contact Us</li>
// //           </ul>
// //         </div>

// //         {/* Popular Categories */}
// //         <div className="footer-section links">
// //           <h3>Popular Categories</h3>
// //           <ul>
// //             {popularCategories.map((cat) => (
// //               <li key={cat.name} onClick={() => navigate(cat.route)}>
// //                 {cat.name}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Banks Section */}
// //         {banks.length > 0 && (
// //           <div className="footer-section banks-preview">
// //             <h3>Our Banking Partners</h3>
// //             <div className="banks-logos">
// //               {banks.map((bank) => (
// //                 <img
// //                   key={bank._id}
// //                   src={bank.logo || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
// //                   alt={bank.name}
// //                   onClick={() => navigate(`/bank/${bank._id}`)}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Social Media */}
// //         <div className="footer-section social">
// //           <h3>Follow Us</h3>
// //           <div className="social-icons">
// //             <a href="#"><FaFacebookF /></a>
// //             <a href="#"><FaTwitter /></a>
// //             <a href="#"><FaInstagram /></a>
// //             <a href="#"><FaLinkedinIn /></a>
// //             <a href="#"><FaYoutube /></a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Popular Cards Preview */}
// //       {popularCards.length > 0 && (
// //         <div className="cards-preview-container">
// //           <h3>Top Cards</h3>
// //           <div className="cards-preview-grid">
// //             {popularCards.map((card) => (
// //               <div key={card._id} className="card-preview" onClick={() => navigate(`/card/${card._id}`)}>
// //                 <img
// //                   src={card.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"}
// //                   alt={card.title}
// //                 />
// //                 <span>{card.title}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* Footer Bottom */}
// //       <div className="footer-bottom">
// //         <p>
// //           © {new Date().getFullYear()} <span>Affalliances</span> | Built with ❤️ for smarter finance.
// //         </p>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaShieldAlt,
//   FaUsers,
//   FaUserFriends,
//   FaHandshake,
// } from "react-icons/fa";
// import "./Footer.css";

// const Footer = ({ banks = [], popularCards = [] }) => {
//   const navigate = useNavigate();

//   const popularCategories = [
//     { name: "Best Credit Cards", route: "/category/best-credit-card" },
//     { name: "Travel Cards", route: "/category/travel" },
//     { name: "Lifetime Free Cards", route: "/category/lifetime-free" },
//     { name: "Reward Cards", route: "/category/reward" },
//     { name: "Cashback Cards", route: "/category/cashback" },
//   ];

//   return (
//     <footer className="footer-premium">
//       <div className="footer-container">

//         {/* Brand Info */}
//         <div className="footer-section about">
//           <h2 className="footer-logo">CredSpy</h2>
//           <p>
//             Your trusted platform to explore, compare, and choose the best
//             credit cards from top banks. Make smarter financial decisions —
//             effortlessly.
//           </p>

//           {/* Contact + Social + Trust */}
//           <div className="footer-info-row">
//             {/* Contact Info */}
//             <div className="contact-info">
//               <p><FaEnvelope /> affiliate@credspy.com</p>
//               <p><FaPhoneAlt /> +91 98765 43210</p>
//               <p><FaMapMarkerAlt /> Gurgaon Sec-62, Haryana, India</p>
//             </div>

//             {/* Follow Us */}
//             <div className="footer-social-side">
//               <h4>Follow Us</h4>
//               <div className="side-social-icons">
//                 <a href="#"><FaFacebookF /></a>
//                 <a href="#"><FaTwitter /></a>
//                 <a href="#"><FaInstagram /></a>
//                 <a href="#"><FaLinkedinIn /></a>
//                 <a href="#"><FaYoutube /></a>
//               </div>
//               <div className="footer-highlights">
//                 <p><FaShieldAlt /> Secure & Verified</p>
//                 <p><FaUsers /> Trusted by 1L+ Users</p>
//               </div>
//             </div>

//             {/* Trust & Security */}
//             <div className="footer-trust-inline">
//               <h4>Why Choose CredSpy</h4>
//               <ul>
//                 <li><FaShieldAlt /> 100% Secure Comparison</li>
//                 <li><FaUserFriends /> Trusted by 10,000+ Users</li>
//                 <li><FaHandshake /> Partnered with Major Banks</li>
//               </ul>
//             </div>
//           </div> {/* footer-info-row end */}
//         </div> {/* footer-section about end */}

//         {/* Quick Links */}
//         <div className="footer-section links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li onClick={() => navigate("/")}>Home</li>
//             <li onClick={() => navigate("/offers")}>Offers</li>
//             <li onClick={() => navigate("/news")}>News & Insights</li>
//             <li onClick={() => navigate("/contact")}>Contact Us</li>
//           </ul>
//         </div>

//         {/* Popular Categories */}
//         <div className="footer-section links">
//           <h3>Popular Categories</h3>
//           <ul>
//             {popularCategories.map(cat => (
//               <li key={cat.name} onClick={() => navigate(cat.route)}>
//                 {cat.name}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Banks Section */}
//         {banks.length > 0 && (
//           <div className="footer-section banks-preview">
//             <h3>Our Banking Partners</h3>
//             <div className="banks-logos">
//               {banks.map(bank => (
//                 <img
//                   key={bank._id}
//                   src={bank.logo || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
//                   alt={bank.name}
//                   onClick={() => navigate(`/bank/${bank._id}`)}
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//       </div> {/* footer-container end */}

//       {/* Top Cards Preview */}
//       {popularCards.length > 0 && (
//         <div className="cards-preview-container">
//           <h3>Top Cards</h3>
//           <div className="cards-preview-grid">
//             {popularCards.map(card => (
//               <div
//                 key={card._id}
//                 className="card-preview"
//                 onClick={() => navigate(`/card/${card._id}`)}
//               >
//                 <img
//                   src={card.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"}
//                   alt={card.title}
//                 />
//                 <span>{card.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Footer Bottom */}
//       <div className="footer-bottom">
//         <p>
//           © {new Date().getFullYear()} <span>Affalliances</span> | Built with ❤️ for smarter finance.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUsers,
  FaUserFriends,
  FaHandshake,
} from "react-icons/fa";
import "./Footer.css";

const Footer = ({ banks = [], popularCards = [] }) => {
  const navigate = useNavigate();

  const popularCategories = [
    { name: "Best Credit Cards", route: "/category/best-credit-card" },
    { name: "Travel Cards", route: "/category/travel" },
    { name: "Lifetime Free Cards", route: "/category/lifetime-free" },
    { name: "Reward Cards", route: "/category/reward" },
    { name: "Cashback Cards", route: "/category/cashback" },
  ];

  return (
    <footer className="footer-premium">
      <div className="footer-container">

        {/* Brand Info */}
        <div className="footer-section about">
          <h2 className="footer-logo">CredSpy</h2>
          <p>
            Your trusted platform to explore, compare, and choose the best
            credit cards from top banks. Make smarter financial decisions — effortlessly.
          </p>

          <div className="footer-info-row">
            <div className="contact-info">
              <p><FaEnvelope /> affiliate@credspy.com</p>
              <p><FaPhoneAlt /> +91 98765 43210</p>
              <p><FaMapMarkerAlt /> Gurgaon Sec-62, Haryana, India</p>
            </div>

            <div className="footer-social-side">
              <h4>Follow Us</h4>
              <div className="side-social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaYoutube /></a>
              </div>
              <div className="footer-highlights">
                <p><FaShieldAlt /> Secure & Verified</p>
                <p><FaUsers /> Trusted by 1L+ Users</p>
              </div>
            </div>

            <div className="footer-trust-inline">
              <h4>Why Choose CredSpy</h4>
              <ul>
                <li><FaShieldAlt /> 100% Secure Comparison</li>
                <li><FaUserFriends /> Trusted by 10,000+ Users</li>
                <li><FaHandshake /> Partnered with Major Banks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/offers")}>Offers</li>
            <li onClick={() => navigate("/news")}>News & Insights</li>
            <li onClick={() => navigate("/contact")}>Contact Us</li>
          </ul>

          {/* New Section: Quick Tips */}
          <div className="footer-extra-section">
            <h4>Quick Credit Tips</h4>
            <ul>
              <li>Check rewards before applying for a card.</li>
              <li>Pay bills on time to avoid interest charges.</li>
              <li>Use travel cards for flight & hotel bookings.</li>
            </ul>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="footer-section links">
          <h3>Popular Categories</h3>
          <ul>
            {popularCategories.map(cat => (
              <li key={cat.name} onClick={() => navigate(cat.route)}>
                {cat.name}
              </li>
            ))}
          </ul>

          {/* New Section: Top Features */}
          <div className="footer-extra-section">
            <h4>Top Features</h4>
            <ul>
              <li>Trusted by 1L+ Users</li>
              <li>Compare cards instantly</li>
              <li>Exclusive rewards & cashback info</li>
            </ul>

            {/* New Section: FAQs */}
            <h4>FAQs</h4>
            <ul>
              <li onClick={() => navigate("/faq#apply")}>How to apply?</li>
              <li onClick={() => navigate("/faq#rewards")}>Maximize rewards?</li>
              <li onClick={() => navigate("/faq#support")}>Need support?</li>
            </ul>
          </div>
        </div>

        {/* Banks Section */}
        {banks.length > 0 && (
          <div className="footer-section banks-preview">
            <h3>Our Banking Partners</h3>
            <div className="banks-logos">
              {banks.map(bank => (
                <img
                  key={bank._id}
                  src={bank.logo || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                  alt={bank.name}
                  onClick={() => navigate(`/bank/${bank._id}`)}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Top Cards Preview */}
      {popularCards.length > 0 && (
        <div className="cards-preview-container">
          <h3>Top Cards</h3>
          <div className="cards-preview-grid">
            {popularCards.map(card => (
              <div
                key={card._id}
                className="card-preview"
                onClick={() => navigate(`/card/${card._id}`)}
              >
                <img
                  src={card.image || "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"}
                  alt={card.title}
                />
                <span>{card.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <span>Affalliances</span> | Built with ❤️ for smarter finance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
