import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";

import programRoutes from "./routes/programRoutes.js";
import trainerRoutes from "./routes/trainerRoutes.js";
import membershipRoutes from "./routes/membershipRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
const app = express();

// 🔥 MUST COME BEFORE CORS — Body Parser
app.use(express.json());

// 🔥 FINAL CORS FIX — All POST Accepted
app.use(cors({
  origin: "*",  // for development — allow all
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));
app.options("*", cors()); // allow preflight

// Logger
app.use(morgan("dev"));

// Connect to MongoDB
connectDB();

// Status Route
app.get("/", (req, res) => {
  res.send("Fit Camp Gym API running 🚀");
});

// API Routes
app.use("/api/programs", programRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/memberships", membershipRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

// Error Handlers
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend running on port ${PORT} 🔥`)
);
