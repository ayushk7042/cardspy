import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String }, // optional full content
    image: { type: String },   // URL from Cloudinary
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, // optional if news is linked to card category
    author: { type: String },  // optional
  },
  { timestamps: true }
);

export default mongoose.model("News", newsSchema);
