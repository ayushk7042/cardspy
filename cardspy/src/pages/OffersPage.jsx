import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OffersPage.css";

export default function OffersPage() {
  const navigate = useNavigate();

  // Dummy local data for offers
  const [offers] = useState([
    {
      id: "1",
      title: "50% Cashback on Shopping",
      summary: "Get 50% cashback on all online shopping using this card.",
      category: "Shopping Cards",
      bank: "HDFC Bank",
      image: "https://cdn-icons-png.flaticon.com/512/2169/2169862.png",
    },
    {
      id: "2",
      title: "Travel Miles Offer",
      summary:
        "Earn double travel miles on flights and hotels booked with this card.",
      category: "Travel Cards",
      bank: "ICICI Bank",
      image: "https://cdn-icons-png.flaticon.com/512/3104/3104796.png",
    },
    {
      id: "3",
      title: "Fuel Cashback Offer",
      summary: "Get 10% cashback on fuel purchases every month.",
      category: "Fuel Cards",
      bank: "SBI Bank",
      image: "https://cdn-icons-png.flaticon.com/512/8146/8146553.png",
    },
    {
      id: "4",
      title: "Premium Lounge Access",
      summary:
        "Enjoy free airport lounge access with select credit cards for luxury travelers.",
      category: "Luxury Cards",
      bank: "Axis Bank",
      image: "https://cdn-icons-png.flaticon.com/512/8139/8139374.png",
    },
    {
      id: "5",
      title: "Student Reward Cards",
      summary: "Special rewards and discounts for students on essentials.",
      category: "Student Cards",
      bank: "HDFC Bank",
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
    },
    {
      id: "6",
      title: "Low Interest Offer",
      summary:
        "Enjoy minimal interest rates and flexible repayment options on all spends.",
      category: "Low Interest Cards",
      bank: "ICICI Bank",
      image: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
    },
  ]);

  // Optional: filters (frontend-only)
  const categories = [
    "All Categories",
    "Shopping Cards",
    "Travel Cards",
    "Fuel Cards",
    "Luxury Cards",
    "Student Cards",
    "Low Interest Cards",
  ];

  const banks = ["All Banks", "HDFC Bank", "ICICI Bank", "SBI Bank", "Axis Bank"];

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedBank, setSelectedBank] = useState("All Banks");

  // Filtered offers
  const filteredOffers = offers.filter((offer) => {
    return (
      (selectedCategory === "All Categories" ||
        offer.category === selectedCategory) &&
      (selectedBank === "All Banks" || offer.bank === selectedBank)
    );
  });

  const handleOfferClick = (offerId) => {
    navigate(`/offers/${offerId}`);
  };

  return (
    <div className="offers-page">
      <header className="offers-header">
        <h1>🎁 Credit Card Offers & Promotions</h1>
        <p>
          Explore the latest offers, cashback deals, travel perks, and exclusive rewards
          from leading banks in India.
        </p>
      </header>

      {/* Filters */}
      <section className="offers-filters">
        <div className="filter-group">
          <label>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Bank:</label>
          <select
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            {banks.map((bank) => (
              <option key={bank} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>

        <button
          className="clear-filters"
          onClick={() => {
            setSelectedCategory("All Categories");
            setSelectedBank("All Banks");
          }}
        >
          Clear Filters
        </button>
      </section>

      {/* Offers Grid */}
      <section className="offers-grid-section">
        {filteredOffers.length === 0 ? (
          <p className="no-offers-text">No offers found.</p>
        ) : (
          <div className="offers-grid">
            {filteredOffers.map((offer) => (
              <div
                key={offer.id}
                className="offer-card"
                onClick={() => handleOfferClick(offer.id)}
              >
                <div className="offer-image">
                  <img src={offer.image} alt={offer.title} />
                </div>
                <div className="offer-content">
                  <h3>{offer.title}</h3>
                  <p>{offer.summary}</p>
                  <div className="offer-tags">
                    <span className="offer-bank">{offer.bank}</span>
                    <span className="offer-category">{offer.category}</span>
                  </div>
                  <button className="offer-btn">View Details →</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
