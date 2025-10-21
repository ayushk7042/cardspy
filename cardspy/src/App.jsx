import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Header from "./components/Header";
import AdminDashboard from "./pages/AdminDashboard";
import ComparePage from "./pages/ComparePage.jsx";
import Compare from "./pages/Compare.jsx";

import NewCardsPage from "./pages/NewCardsPage.jsx";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import ProtectedRoute from "./ProtectedRoute.jsx";

import CardDetail from "./pages/CardDetail.jsx";
import CategoryPage from "./pages/CategoryPage";
import BankPage from "./pages/BankPage";
import NewsDetail from "./pages/NewsDetail";
import InsightDetail from "./pages/InsightDetail";

import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer";
import RewardsPage from "./pages/RewardsPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import OffersPage from "./pages/OffersPage.jsx";
import OfferDetail from "./pages/OfferDetail.jsx";
export default function App() {
return (
 <div className="min-h-screen bg-gray-50 text-gray-900">
<Header /> 
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/post/:id" element={<PostDetail />} />
  <Route path="/card/:id" element={<CardDetail />} />
        {/* <Route path="/category/:id" element={<CategoryPage />} /> */}
      <Route path="/category/:name" element={<CategoryPage />} />

<Route path="/offers/:id" element={<OfferDetail />} />
<Route path="/offers" element={<OffersPage />} />
<Route path="/news" element={<NewsPage />} />
<Route path="/rewards" element={<RewardsPage />} />
<Route path="/new-cards" element={<NewCardsPage />} />
<Route path="/compare" element={<ComparePage />} />
 {/* <Route path="/compare/:card1Id/:card2Id" element={<Compare />} /> */}
 <Route path="/compare/:id1/:id2" element={<Compare />} />

<Route path="/contact" element={<Contact />} />
        <Route path="/bank/:id" element={<BankPage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/insight/:id" element={<InsightDetail />} />
 {/* Protected admin routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <ProtectedRoute>
            <EditPost />
          </ProtectedRoute>
        }
      />
<Route path="/login" element={<Login />} />
</Routes>
 <Footer />
</main>
</div>
);
}