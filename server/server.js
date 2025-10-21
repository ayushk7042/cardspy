
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cardRoutes from "./routes/cardRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import bankRoutes from "./routes/bankRoutes.js";
import connectDB from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import newsRoutes from "./routes/newsRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js"; 

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());

// ✅ Fix: allow multiple frontend origins safely
const allowedOrigins = [
  process.env.CLIENT_URL,          // from .env if set
  "http://localhost:5173",         // default Vite port
  "http://localhost:5174",         // alternate frontend port
  "http://127.0.0.1:5173",         // in case browser uses 127.0.0.1
  "http://127.0.0.1:5174"
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(morgan("dev"));

app.get("/", (req, res) => res.send("Card Spy API Running ✅"));

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/banks", bankRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/cards", cardRoutes);

app.use("/api/news", newsRoutes);
app.use("/api/reviews", reviewRoutes);
// Middleware for errors
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
