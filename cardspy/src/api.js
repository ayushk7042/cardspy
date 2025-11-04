



import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  withCredentials: true, // send JWT cookie automatically
});

// ======================
// 📰 POSTS / INSIGHTS
// ======================
export async function fetchPosts(page = 1, limit = 12) {
  const res = await API.get(`/posts?page=${page}&limit=${limit}`);
  return res.data;
}

export async function fetchPostById(id) {
  const res = await API.get(`/posts/${id}`);
  return res.data;
}

// For latest card insights (alias)
export async function fetchInsights(page = 1, limit = 12) {
  return fetchPosts(page, limit);
}

export async function fetchInsightById(id) {
  return fetchPostById(id);
}

export async function createPost(formData) {
  const token = localStorage.getItem("adminToken");
  const res = await API.post(`/posts`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function updatePost(id, formData) {
  const token = localStorage.getItem("adminToken");
  const res = await API.put(`/posts/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function deletePost(id) {
  const token = localStorage.getItem("adminToken");
  const res = await API.delete(`/posts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

// ======================
// 💳 CREDIT CARDS
// ======================
// export async function fetchCards() {
//   const res = await API.get(`/cards`);
//   return res.data;
// }

// export async function fetchCardById(id) {
//   const res = await API.get(`/cards/${id}`);
//   return {
//     ...res.data,
//     image: res.data.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
//   };
// }

// export async function fetchCardsByCategory(categoryId) {
//   const res = await API.get(`/cards?category=${categoryId}`);
//   return res.data;
// }

// export async function fetchCardsByBank(bankName) {
//   const res = await API.get(`/cards?bank=${bankName}`);
//   return res.data;
// }

// export async function createCard(formData) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.post(`/cards`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// }

// export async function updateCard(id, formData) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.put(`/cards/${id}`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// }

// export async function deleteCard(id) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.delete(`/cards/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// }

// ======================
// 💳 CREDIT CARDS
// ======================
export async function fetchCards() {
  const res = await API.get(`/cards`);
  return res.data;
}

export async function fetchCardById(id) {
  const res = await API.get(`/cards/${id}`);
  return {
    ...res.data,
    image: res.data.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
    rewards: res.data.rewards || [],
    benefits: res.data.benefits || [],
    offers: res.data.offers || [],
    interestRate: res.data.interestRate || "",
    applyLink: res.data.applyLink || "",
  };
}

// Fetch cards by category
export async function fetchCardsByCategory(categoryId) {
  const res = await API.get(`/cards?category=${categoryId}`);
  return res.data;
}

// Fetch cards by bank
export async function fetchCardsByBank(bankName) {
  const res = await API.get(`/cards?bank=${bankName}`);
  return res.data;
}

// Admin: Create card
export async function createCard(formData) {
  const token = localStorage.getItem("adminToken");
  const res = await API.post(`/cards`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

// Admin: Update card
export async function updateCard(id, formData) {
  const token = localStorage.getItem("adminToken");
  const res = await API.put(`/cards/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

// Admin: Delete card
export async function deleteCard(id) {
  const token = localStorage.getItem("adminToken");
  const res = await API.delete(`/cards/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}


// ======================
// 🏦 BANKS / PARTNERS
// ======================
export async function fetchBanks() {
  const res = await API.get(`/banks`);
  return res.data;
}

export async function fetchBankById(id) {
  const res = await API.get(`/banks/${id}`);
  return {
    ...res.data,
    logo: res.data.logo || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  };
}

export async function createBank(formData) {
  const token = localStorage.getItem("adminToken");
  const res = await API.post(`/banks`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function updateBank(id, formData) {
  const token = localStorage.getItem("adminToken");
  const res = await API.put(`/banks/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function deleteBank(id) {
  const token = localStorage.getItem("adminToken");
  const res = await API.delete(`/banks/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

// ======================
// 🗂️ CATEGORIES
// ======================
export async function fetchCategories() {
  const res = await API.get(`/categories`);
  return res.data;
}

export async function fetchCategoryById(id) {
  const res = await API.get(`/categories/${id}`);
  return res.data;
}

export async function createCategory(data) {
  const token = localStorage.getItem("adminToken");
  const res = await API.post(`/categories`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function updateCategory(id, data) {
  const token = localStorage.getItem("adminToken");
  const res = await API.put(`/categories/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function deleteCategory(id) {
  const token = localStorage.getItem("adminToken");
  const res = await API.delete(`/categories/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

// ======================
// 👨‍💼 ADMIN AUTH
// ======================
export async function loginAdmin(credentials) {
  const res = await API.post(`/auth/login`, credentials);
  return res.data;
}

export async function logoutAdmin() {
  const res = await API.post(`/auth/logout`);
  return res.data;
}

export async function authMe() {
  const res = await API.get(`/auth/me`);
  return res.data;
}

// ======================
// 📰 NEWS
// ======================
export async function fetchNews(page = 1, limit = 12) {
  const res = await API.get(`/news?page=${page}&limit=${limit}`);
  return res.data;
}

export async function fetchNewsById(id) {
  const res = await API.get(`/news/${id}`);
  return {
    ...res.data,
    image: res.data.image || "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  };
}

export async function createNewsArticle(formData) {
  const token = localStorage.getItem("adminToken");
  const res = await API.post(`/news`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function updateNewsArticle(id, formData) {
  const token = localStorage.getItem("adminToken");
  const res = await API.put(`/news/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function deleteNewsArticle(id) {
  const token = localStorage.getItem("adminToken");
  const res = await API.delete(`/news/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

// ======================
// 💬 REVIEWS / COMMENTS
// ======================

// Fetch all reviews for a card
export async function fetchReviews(cardId) {
  const res = await API.get(`/reviews/${cardId}`);
  return res.data; // array of reviews
}

// Add a new review for a card
export async function addReview(cardId, reviewData) {
  const token = localStorage.getItem("adminToken"); // or user token if needed
  const res = await API.post(`/reviews/${cardId}`, reviewData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data; // created review object
}

// Delete a review (optional, admin only)
export async function deleteReview(reviewId) {
  const token = localStorage.getItem("adminToken");
  const res = await API.delete(`/reviews/${reviewId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}


export default API;












// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || "http://admin.credspy.com/api",
//   withCredentials: true, // send JWT cookie automatically
// });

// // ======================
// // 📰 POSTS / INSIGHTS
// // ======================
// export async function fetchPosts(page = 1, limit = 12) {
//   const res = await API.get(`/posts?page=${page}&limit=${limit}`);
//   return res.data;
// }

// export async function fetchPostById(id) {
//   const res = await API.get(`/posts/${id}`);
//   return res.data;
// }

// // For latest card insights (alias)
// export async function fetchInsights(page = 1, limit = 12) {
//   return fetchPosts(page, limit);
// }

// export async function fetchInsightById(id) {
//   return fetchPostById(id);
// }

// export async function createPost(formData) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.post(`/posts`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// }

// export async function updatePost(id, formData) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.put(`/posts/${id}`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// }

// export async function deletePost(id) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.delete(`/posts/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// }

// // ======================
// // 💳 CREDIT CARDS
// // ======================
// // export async function fetchCards() {
// //   const res = await API.get(`/cards`);
// //   return res.data;
// // }

// // export async function fetchCardById(id) {
// //   const res = await API.get(`/cards/${id}`);
// //   return {
// //     ...res.data,
// //     image: res.data.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
// //   };
// // }

// // export async function fetchCardsByCategory(categoryId) {
// //   const res = await API.get(`/cards?category=${categoryId}`);
// //   return res.data;
// // }

// // export async function fetchCardsByBank(bankName) {
// //   const res = await API.get(`/cards?bank=${bankName}`);
// //   return res.data;
// // }

// // export async function createCard(formData) {
// //   const token = localStorage.getItem("adminToken");
// //   const res = await API.post(`/cards`, formData, {
// //     headers: {
// //       "Content-Type": "multipart/form-data",
// //       Authorization: `Bearer ${token}`,
// //     },
// //   });
// //   return res.data;
// // }

// // export async function updateCard(id, formData) {
// //   const token = localStorage.getItem("adminToken");
// //   const res = await API.put(`/cards/${id}`, formData, {
// //     headers: {
// //       "Content-Type": "multipart/form-data",
// //       Authorization: `Bearer ${token}`,
// //     },
// //   });
// //   return res.data;
// // }

// // export async function deleteCard(id) {
// //   const token = localStorage.getItem("adminToken");
// //   const res = await API.delete(`/cards/${id}`, {
// //     headers: { Authorization: `Bearer ${token}` },
// //   });
// //   return res.data;
// // }

// // ======================
// // 💳 CREDIT CARDS
// // ======================
// export async function fetchCards() {
//   const res = await API.get(`/cards`);
//   return res.data;
// }

// export async function fetchCardById(id) {
//   const res = await API.get(`/cards/${id}`);
//   return {
//     ...res.data,
//     image: res.data.image || "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
//     rewards: res.data.rewards || [],
//     benefits: res.data.benefits || [],
//     offers: res.data.offers || [],
//     interestRate: res.data.interestRate || "",
//     applyLink: res.data.applyLink || "",
//   };
// }

// // Fetch cards by category
// export async function fetchCardsByCategory(categoryId) {
//   const res = await API.get(`/cards?category=${categoryId}`);
//   return res.data;
// }

// // Fetch cards by bank
// export async function fetchCardsByBank(bankName) {
//   const res = await API.get(`/cards?bank=${bankName}`);
//   return res.data;
// }

// // Admin: Create card
// export async function createCard(formData) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.post(`/cards`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// }

// // Admin: Update card
// export async function updateCard(id, formData) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.put(`/cards/${id}`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// }

// // Admin: Delete card
// export async function deleteCard(id) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.delete(`/cards/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// }


// // ======================
// // 🏦 BANKS / PARTNERS
// // ======================
// export async function fetchBanks() {
//   const res = await API.get(`/banks`);
//   return res.data;
// }

// export async function fetchBankById(id) {
//   const res = await API.get(`/banks/${id}`);
//   return {
//     ...res.data,
//     logo: res.data.logo || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//   };
// }

// export async function createBank(formData) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.post(`/banks`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// }

// export async function updateBank(id, formData) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.put(`/banks/${id}`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// }

// export async function deleteBank(id) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.delete(`/banks/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// }

// // ======================
// // 🗂️ CATEGORIES
// // ======================
// export async function fetchCategories() {
//   const res = await API.get(`/categories`);
//   return res.data;
// }

// export async function fetchCategoryById(id) {
//   const res = await API.get(`/categories/${id}`);
//   return res.data;
// }

// export async function createCategory(data) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.post(`/categories`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// }

// export async function updateCategory(id, data) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.put(`/categories/${id}`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// }

// export async function deleteCategory(id) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.delete(`/categories/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// }

// // ======================
// // 👨‍💼 ADMIN AUTH
// // ======================
// export async function loginAdmin(credentials) {
//   const res = await API.post(`/auth/login`, credentials);
//   return res.data;
// }

// export async function logoutAdmin() {
//   const res = await API.post(`/auth/logout`);
//   return res.data;
// }

// export async function authMe() {
//   const res = await API.get(`/auth/me`);
//   return res.data;
// }

// // ======================
// // 📰 NEWS
// // ======================
// export async function fetchNews(page = 1, limit = 12) {
//   const res = await API.get(`/news?page=${page}&limit=${limit}`);
//   return res.data;
// }

// export async function fetchNewsById(id) {
//   const res = await API.get(`/news/${id}`);
//   return {
//     ...res.data,
//     image: res.data.image || "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
//   };
// }

// export async function createNewsArticle(formData) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.post(`/news`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// }

// export async function updateNewsArticle(id, formData) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.put(`/news/${id}`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data;
// }

// export async function deleteNewsArticle(id) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.delete(`/news/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// }

// // ======================
// // 💬 REVIEWS / COMMENTS
// // ======================

// // Fetch all reviews for a card
// export async function fetchReviews(cardId) {
//   const res = await API.get(`/reviews/${cardId}`);
//   return res.data; // array of reviews
// }

// // Add a new review for a card
// export async function addReview(cardId, reviewData) {
//   const token = localStorage.getItem("adminToken"); // or user token if needed
//   const res = await API.post(`/reviews/${cardId}`, reviewData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   });
//   return res.data; // created review object
// }

// // Delete a review (optional, admin only)
// export async function deleteReview(reviewId) {
//   const token = localStorage.getItem("adminToken");
//   const res = await API.delete(`/reviews/${reviewId}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// }


// export default API;
