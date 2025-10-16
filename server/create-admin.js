import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js"; // adjust if models path different

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ Please add MONGO_URI in .env");
  process.exit(1);
}

const createAdmin = async (email, password, name = "Admin") => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const exists = await Admin.findOne({ email });
    if (exists) {
      console.log("⚠️ Admin already exists:", email);
      process.exit(0);
    }

    const hashed = await bcrypt.hash(password, 10);
    const admin = new Admin({ name, email, password: hashed });
    await admin.save();

    console.log("🎉 Admin created successfully:");
    console.log({ id: admin._id, email: admin.email, name: admin.name });
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
};

// Usage: node create-admin.js email password [name]
const [,, email, password, name] = process.argv;
if (!email || !password) {
  console.error("Usage: node create-admin.js <email> <password> [name]");
  process.exit(1);
}

createAdmin(email, password, name || "Admin");
