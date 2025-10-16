
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ManageCards from "./ManageCards";
import ManageBanks from "./ManageBanks";
import ManageCategories from "./ManageCategories";
import ManagePosts from "./ManagePosts";
import ManageNews from "./ManageNews";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("cards");

  return (
    <div className="admin-dashboard">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="admin-content">
        {activeTab === "cards" && <ManageCards />}
        {activeTab === "banks" && <ManageBanks />}
        {activeTab === "categories" && <ManageCategories />}
       {activeTab === "news" && <ManageNews />}
        {activeTab === "posts" && <ManagePosts />}
      </main>
    </div>
  );
}
