import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./InsightDetail.css";

const InsightDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const insights = [
    {
      id: "1",
      title: "Best Credit Cards for 2025",
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
      content:
        "Discover India’s top-performing credit cards of 2025. Get amazing cashback, travel perks, and reward points from the leading issuers. Compare features, eligibility, and rewards to choose the card best suited for your lifestyle. Stay ahead with expert insights and latest offers to maximize your benefits and smart spending.",
      highlights: [
        {
          heading: "💳 Top Cashback Cards",
          description: "Maximize your cashback on groceries, fuel, and online shopping.",
        },
        {
          heading: "✈️ Best Travel Rewards",
          description: "Earn reward points on flight and hotel bookings across India.",
        },
        {
          heading: "🎁 Lifetime Free Cards",
          description: "Enjoy cards with zero annual fees and lifelong benefits.",
        },
        {
          heading: "🏦 High Credit Limit Cards",
          description: "Compare cards offering higher limits based on your profile.",
        },
      ],
      tips: [
        "Check eligibility carefully before applying.",
        "Use reward cards to maximize benefits.",
        "Track your expenses to avoid overspending.",
        "Redeem points regularly for better value.",
      ],
    },
    {
      id: "2",
      title: "RBI’s New Credit Card Rules Explained",
      image: "https://cdn-icons-png.flaticon.com/512/3104/3104796.png",
      rules: [
        {
          heading: "1️⃣ Transparent Fees & Charges",
          description:
            "RBI mandates issuers to clearly display annual fees, late payment charges, and interest rates.",
        },
        {
          heading: "2️⃣ Interest-Free Credit Period",
          description:
            "Minimum 45-day interest-free period for purchases helps manage repayments.",
        },
        {
          heading: "3️⃣ Maximum Credit Limits",
          description:
            "Banks must set transparent credit limits based on income & credit score.",
        },
        {
          heading: "4️⃣ Responsible Lending Guidelines",
          description:
            "Evaluation of creditworthiness to prevent excessive debt accumulation.",
        },
        {
          heading: "5️⃣ Billing & Statement Transparency",
          description:
            "Clear monthly statements with breakdowns reduce disputes.",
        },
        {
          heading: "6️⃣ Reward Points & Cashback Disclosure",
          description:
            "All rewards programs must be fully disclosed with no hidden conditions.",
        },
        {
          heading: "7️⃣ Secure Transactions",
          description:
            "Enhanced OTP, tokenization, and 2FA to protect users from fraud.",
        },
      ],
      tips: [
        "Check fees before applying.",
        "Use cards within limits to maintain credit score.",
        "Redeem points regularly.",
        "Pay dues on time to avoid interest.",
      ],
    },
    {
      id: "3",
      title: "Top 5 Travel Cards with Lounge Access",
      image: "https://cdn-icons-png.flaticon.com/512/8146/8146553.png",
      content:
        "If you love to travel, these credit cards offer the best lounge access, travel insurance, and perks. Compare the top cards for free airport lounges, reward points on travel bookings, and exclusive privileges. Make your travel experience luxurious and rewarding with smart card choices.",
      highlights: [
        {
          heading: "🛫 Free Airport Lounge Access",
          description: "Relax before your flights with complimentary lounge passes.",
        },
        {
          heading: "🎁 Travel Insurance",
          description: "Get coverage for trip cancellations, delays, and baggage loss.",
        },
        {
          heading: "💳 Reward Points",
          description: "Earn points on travel and hotel bookings to redeem for free trips.",
        },
        {
          heading: "💼 Premium Travel Perks",
          description:
            "Enjoy concierge services, priority check-in, and complimentary upgrades.",
        },
      ],
      tips: [
        "Carry both travel and reward cards for maximum benefits.",
        "Book flights & hotels using reward points for best value.",
        "Check card lounge network before traveling.",
        "Always pay full due to avoid interest on travel spends.",
      ],
    },
    {
      id: "4",
      title: "Credit Card vs Debit Card — Which is Better?",
      image: "https://cdn-icons-png.flaticon.com/512/8139/8139374.png",
      content:
        "A detailed breakdown of differences between credit and debit cards — from rewards, cashback, and interest-free credit to safety, spending control, and fees. Understand which card aligns with your spending habits, lifestyle, and financial goals for smarter management.",
      comparisons: [
        {
          heading: "Credit Card Advantages",
          description:
            "Offers reward points, cashback, higher credit limits, and short-term loans with interest-free periods.",
        },
        {
          heading: "Debit Card Advantages",
          description:
            "Directly linked to bank account, no interest, easy spending control, safer for daily expenses.",
        },
        {
          heading: "Best Use Case",
          description:
            "Credit cards for rewards & larger spends; debit cards for daily purchases & budgeting.",
        },
      ],
      tips: [
        "Use credit cards for rewards & timely payments.",
        "Use debit cards for controlling daily expenses.",
        "Check benefits before applying for either card.",
      ],
    },
  ];

  const insight = insights.find((item) => item.id === id);

  return (
    <div className="insight-detail-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      {insight ? (
        <div className="insight-detail-container">
          <div className="insight-image">
            <img src={insight.image} alt={insight.title} />
          </div>
          <div className="insight-text">
            <h1>{insight.title}</h1>

            {/* Render different structures per insight */}
            {insight.rules ? (
              <>
                {insight.rules.map((rule, idx) => (
                  <div key={idx} className="rule-card">
                    <h3>{rule.heading}</h3>
                    <p>{rule.description}</p>
                  </div>
                ))}
              </>
            ) : null}

            {insight.highlights ? (
              <>
                {insight.highlights.map((hl, idx) => (
                  <div key={idx} className="rule-card">
                    <h3>{hl.heading}</h3>
                    <p>{hl.description}</p>
                  </div>
                ))}
              </>
            ) : null}

            {insight.comparisons ? (
              <>
                {insight.comparisons.map((comp, idx) => (
                  <div key={idx} className="rule-card">
                    <h3>{comp.heading}</h3>
                    <p>{comp.description}</p>
                  </div>
                ))}
              </>
            ) : null}

            <p>{insight.content}</p>

            {insight.tips ? (
              <div className="insight-tips">
                <h2>💡 Pro Tips</h2>
                <ul>
                  {insight.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <p>Insight not found.</p>
      )}
    </div>
  );
};

export default InsightDetail;
