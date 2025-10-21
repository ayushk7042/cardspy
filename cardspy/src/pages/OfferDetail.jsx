import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OfferDetail.css";

const OfferDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Local frontend-only offer data
  const offers = [
    {
      id: "1",
      title: "50% Cashback on Shopping",
      image: "https://cdn-icons-png.flaticon.com/512/2169/2169862.png",
      bank: "HDFC Bank",
      category: "Shopping Cards",
      content: `
        Enjoy 50% cashback on all online shopping using this card. 
        This offer is valid on all major e-commerce platforms.
        Benefits include:
        - Extra reward points for purchases above ₹5,000
        - Zero annual fee for the first year
        - Contactless payments
      `,
    },
    {
      id: "2",
      title: "Travel Miles Offer",
      image: "https://cdn-icons-png.flaticon.com/512/3104/3104796.png",
      bank: "ICICI Bank",
      category: "Travel Cards",
      content: `
        Earn double travel miles on flights and hotels booked with this card. 
        Features:
        - Complimentary airport lounge access
        - Travel insurance coverage up to ₹5,00,000
        - Reward points redeemable for flight tickets
      `,
    },
    {
      id: "3",
      title: "Fuel Cashback Offer",
      image: "https://cdn-icons-png.flaticon.com/512/8146/8146553.png",
      bank: "SBI Bank",
      category: "Fuel Cards",
      content: `
        Get 10% cashback on fuel purchases every month.
        Additional perks:
        - Discounts on fuel stations nationwide
        - Reward points for every ₹100 spent
        - Easy EMI options for big spends
      `,
    },
    {
      id: "4",
      title: "Premium Lounge Access",
      image: "https://cdn-icons-png.flaticon.com/512/8139/8139374.png",
      bank: "Axis Bank",
      category: "Luxury Cards",
      content: `
        Enjoy free airport lounge access with select credit cards.
        Premium benefits:
        - Complimentary meals and beverages
        - Priority boarding
        - Exclusive travel discounts
      `,
    },
    {
      id: "5",
      title: "Student Reward Cards",
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
      bank: "HDFC Bank",
      category: "Student Cards",
      content: `
        Special rewards and discounts for students.
        Benefits:
        - Cashback on daily expenses
        - Reward points for online learning subscriptions
        - Lower interest rates on credit limit
      `,
    },
    {
      id: "6",
      title: "Low Interest Offer",
      image: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
      bank: "ICICI Bank",
      category: "Low Interest Cards",
      content: `
        Minimal interest rates and flexible repayment options.
        Highlights:
        - Interest-free credit up to 50 days
        - Easy balance transfer options
        - Reward points on timely payments
      `,
    },
  ];

  const offer = offers.find((o) => o.id === id);

  if (!offer) {
    return (
      <div className="offer-detail-page">
        <p>Offer not found.</p>
        <button onClick={() => navigate("/offers")} className="back-btn">
          ← Back to Offers
        </button>
      </div>
    );
  }

  return (
    <div className="offer-detail-page">
      <button className="back-btn" onClick={() => navigate("/offers")}>
        ← Back to Offers
      </button>

      <div className="offer-detail-container">
        <div className="offer-image">
          <img src={offer.image} alt={offer.title} />
        </div>

        <div className="offer-text">
          <h1>{offer.title}</h1>
          <h3>Bank: {offer.bank}</h3>
          <h4>Category: {offer.category}</h4>
          <p>{offer.content}</p>
        </div>
      </div>
    </div>
  );
};

export default OfferDetail;
