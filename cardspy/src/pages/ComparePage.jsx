import React, { useState, useEffect } from "react";
import { fetchCards } from "../api.js"; // your API to get all cards
import "./ComparePage.css";

export default function ComparePage() {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([null, null]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const data = await fetchCards();
        setCards(data);
      } catch (err) {
        console.error("Failed to fetch cards:", err);
      } finally {
        setLoading(false);
      }
    };
    loadCards();
  }, []);

  const handleSelectCard = (card, index) => {
    const newSelection = [...selectedCards];
    newSelection[index] = card;
    setSelectedCards(newSelection);
  };

  const resetComparison = () => setSelectedCards([null, null]);

  if (loading) return <div className="loading">Loading cards...</div>;

  return (
    <div className="compare-page">
      <h1>Compare Credit Cards</h1>
      <p>Select up to 2 cards to see a detailed comparison.</p>

      <div className="compare-slots">
        {selectedCards.map((card, idx) => (
          <div key={idx} className="compare-slot">
            {card ? (
              <>
                <img
                  src={card.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png"}
                  alt={card.title}
                  className="card-image"
                />
                <h3>{card.title}</h3>
                <p className="bank-name">{card.bank}</p>
                <ul>
                  <li>
                    💸 <strong>Annual Fee:</strong> {card.fee || "₹499"}
                  </li>
                  <li>
                    🎁 <strong>Rewards:</strong> {card.rewards || "2X on dining & travel"}
                  </li>
                  <li>
                    ⭐ <strong>Rating:</strong> {card.rating || "4.5/5"}
                  </li>
                  <li>
                    💳 <strong>Category:</strong> {card.category?.name || "General"}
                  </li>
                </ul>
              </>
            ) : (
              <div className="select-placeholder">
                <p>Select Card {idx + 1}</p>
                <select
                  value=""
                  onChange={(e) => {
                    const cardObj = cards.find((c) => c._id === e.target.value);
                    handleSelectCard(cardObj, idx);
                  }}
                >
                  <option value="">-- Select Card --</option>
                  {cards.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.title} ({c.bank})
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedCards[0] && selectedCards[1] && (
        <div className="comparison-table">
          <h2>Feature Comparison</h2>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>{selectedCards[0].title}</th>
                <th>{selectedCards[1].title}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Annual Fee</td>
                <td>{selectedCards[0].fee || "₹499"}</td>
                <td>{selectedCards[1].fee || "₹499"}</td>
              </tr>
              <tr>
                <td>Rewards</td>
                <td>{selectedCards[0].rewards || "2X on dining & travel"}</td>
                <td>{selectedCards[1].rewards || "2X on dining & travel"}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>{selectedCards[0].rating || "4.5/5"}</td>
                <td>{selectedCards[1].rating || "4.5/5"}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{selectedCards[0].category?.name || "General"}</td>
                <td>{selectedCards[1].category?.name || "General"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="compare-actions">
        <button onClick={resetComparison} className="reset-btn">
          Reset Comparison
        </button>
      </div>
    </div>
  );
}
