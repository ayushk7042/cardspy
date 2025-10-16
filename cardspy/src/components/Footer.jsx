import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Info */}
        <div className="footer-section about">
          <h2 className="footer-logo">CardSpy</h2>
          <p>
            Your trusted platform to explore, compare, and choose the best
            credit cards from top banks. We help you make smarter financial
            decisions — effortlessly.
          </p>
          <div className="contact-info">
            <p><FaEnvelope /> support@cardspy.com</p>
            <p><FaPhoneAlt /> +91 98765 43210</p>
            <p><FaMapMarkerAlt /> New Delhi, India</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cards">Credit Cards</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a href="/news">News & Insights</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Card Categories */}
        <div className="footer-section links">
          <h3>Popular Categories</h3>
          <ul>
            <li><a href="/category/best-credit-card">Best Credit Cards</a></li>
            <li><a href="/category/travel">Travel Cards</a></li>
            <li><a href="/category/lifetime-free">Lifetime Free Cards</a></li>
            <li><a href="/category/reward">Reward Cards</a></li>
            <li><a href="/category/cashback">Cashback Cards</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <span>CardSpy</span> | Built with ❤️ for smarter finance.</p>
      </div>
    </footer>
  );
};

export default Footer;
