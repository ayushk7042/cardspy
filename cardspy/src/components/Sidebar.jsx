// import React from "react";
// import { FaCreditCard, FaUniversity, FaList, FaNewspaper } from "react-icons/fa";
// import "./Sidebar.css";

// export default function Sidebar({ activeTab, setActiveTab }) {
//   const menu = [
//     { key: "cards", label: "Manage Cards", icon: <FaCreditCard /> },
//     { key: "banks", label: "Manage Banks", icon: <FaUniversity /> },
//     { key: "categories", label: "Manage Categories", icon: <FaList /> },
//     { key: "posts", label: "Manage Posts", icon: <FaNewspaper /> },
//   ];

//   return (
//     <aside className="sidebar">
//       <h2 className="sidebar-title">Admin Panel</h2>
//       <ul>
//         {menu.map((m) => (
//           <li
//             key={m.key}
//             className={activeTab === m.key ? "active" : ""}
//             onClick={() => setActiveTab(m.key)}
//           >
//             {m.icon} {m.label}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }
import React from "react";
import {
  FaCreditCard,
  FaUniversity,
  FaList,
  FaNewspaper,
} from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar({ activeTab, setActiveTab }) {
  const menu = [
    { key: "cards", label: "Manage Cards", icon: <FaCreditCard /> },
    { key: "banks", label: "Manage Banks", icon: <FaUniversity /> },
    { key: "categories", label: "Manage Categories", icon: <FaList /> },
    { key: "news", label: "Manage News", icon: <FaNewspaper /> }, // ✅ Added Manage News
    { key: "posts", label: "Manage Posts", icon: <FaNewspaper /> },
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul>
        {menu.map((m) => (
          <li
            key={m.key}
            className={activeTab === m.key ? "active" : ""}
            onClick={() => setActiveTab(m.key)}
          >
            {m.icon} <span>{m.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
