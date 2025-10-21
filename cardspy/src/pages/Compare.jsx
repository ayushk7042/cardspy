
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchCardById } from "../api";
// import "./Compare.css";

// export default function Compare() {
//   const { id1, id2 } = useParams(); // assuming your route is /compare/:id1/:id2
//   const navigate = useNavigate();

//   const [card1, setCard1] = useState(null);
//   const [card2, setCard2] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadCards = async () => {
//       try {
//         const c1 = await fetchCardById(id1);
//         const c2 = await fetchCardById(id2);
//         setCard1(c1);
//         setCard2(c2);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch cards for comparison:", err);
//         setLoading(false);
//       }
//     };
//     loadCards();
//   }, [id1, id2]);

//   if (loading) return <p>Loading cards for comparison...</p>;
//   if (!card1 || !card2) return <p>Cards not found!</p>;

//   const renderList = (arr) => arr && arr.length ? arr.join(", ") : "N/A";

//   return (
//     <div className="compare-page">
//       <h2>Compare Credit Cards</h2>
//       <button onClick={() => navigate(-1)} className="back-btn">← Back</button>

//       <div className="compare-table-wrapper">
//         <table className="compare-table">
//           <thead>
//             <tr>
//               <th>Feature</th>
//               <th>{card1.title}</th>
//               <th>{card2.title}</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Image</td>
//               <td><img src={card1.image} alt={card1.title} className="card-img"/></td>
//               <td><img src={card2.image} alt={card2.title} className="card-img"/></td>
//             </tr>
//             <tr>
//               <td>Bank</td>
//               <td>{card1.bank}</td>
//               <td>{card2.bank}</td>
//             </tr>
//             <tr>
//               <td>Category</td>
//               <td>{card1.category?.name}</td>
//               <td>{card2.category?.name}</td>
//             </tr>
//             <tr>
//               <td>Benefits</td>
//               <td>{renderList(card1.benefits)}</td>
//               <td>{renderList(card2.benefits)}</td>
//             </tr>
//             <tr>
//               <td>Rewards</td>
//               <td>{renderList(card1.rewards)}</td>
//               <td>{renderList(card2.rewards)}</td>
//             </tr>
//             <tr>
//               <td>Offers</td>
//               <td>{renderList(card1.offers)}</td>
//               <td>{renderList(card2.offers)}</td>
//             </tr>
//             <tr>
//               <td>Interest Rate</td>
//               <td>{card1.interestRate || "N/A"}</td>
//               <td>{card2.interestRate || "N/A"}</td>
//             </tr>
//             <tr>
//               <td>Fees</td>
//               <td>{card1.fees || "N/A"}</td>
//               <td>{card2.fees || "N/A"}</td>
//             </tr>
//             <tr>
//               <td>Description</td>
//               <td>{card1.description}</td>
//               <td>{card2.description}</td>
//             </tr>
//             <tr>
//               <td>Apply Link</td>
//               <td><a href={card1.applyLink} target="_blank" rel="noreferrer">Apply Now</a></td>
//               <td><a href={card2.applyLink} target="_blank" rel="noreferrer">Apply Now</a></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCardById } from "../api";
import "./Compare.css";

export default function Compare() {
  const { id1, id2 } = useParams(); 
  const navigate = useNavigate();

  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const c1 = await fetchCardById(id1);
        const c2 = await fetchCardById(id2);
        setCard1(c1);
        setCard2(c2);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch cards for comparison:", err);
        setLoading(false);
      }
    };
    loadCards();
  }, [id1, id2]);

  if (loading) return <p className="loading">Loading cards for comparison...</p>;
  if (!card1 || !card2) return <p className="loading">Cards not found!</p>;

  const renderList = (arr) => arr && arr.length ? arr.join(", ") : "N/A";

  return (
    <div className="compare-page">
      <div className="compare-header">
        <h2>Compare Credit Cards</h2>
        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      </div>

      <div className="compare-table-wrapper">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>{card1.title}</th>
              <th>{card2.title}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Image</td>
              <td><img src={card1.image} alt={card1.title} className="card-img"/></td>
              <td><img src={card2.image} alt={card2.title} className="card-img"/></td>
            </tr>
            <tr>
              <td>Bank</td>
              <td>{card1.bank}</td>
              <td>{card2.bank}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{card1.category?.name}</td>
              <td>{card2.category?.name}</td>
            </tr>
            <tr>
              <td>Benefits</td>
              <td>{renderList(card1.benefits)}</td>
              <td>{renderList(card2.benefits)}</td>
            </tr>
            <tr>
              <td>Rewards</td>
              <td>{renderList(card1.rewards)}</td>
              <td>{renderList(card2.rewards)}</td>
            </tr>
            <tr>
              <td>Offers</td>
              <td>{renderList(card1.offers)}</td>
              <td>{renderList(card2.offers)}</td>
            </tr>
            <tr>
              <td>Interest Rate</td>
              <td>{card1.interestRate || "N/A"}</td>
              <td>{card2.interestRate || "N/A"}</td>
            </tr>
            <tr>
              <td>Fees</td>
              <td>{card1.fees || "N/A"}</td>
              <td>{card2.fees || "N/A"}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{card1.description}</td>
              <td>{card2.description}</td>
            </tr>
            <tr>
              <td>Apply Link</td>
              <td>
                <a href={card1.applyLink} target="_blank" rel="noreferrer" className="apply-link">Apply Now →</a>
              </td>
              <td>
                <a href={card2.applyLink} target="_blank" rel="noreferrer" className="apply-link">Apply Now →</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
