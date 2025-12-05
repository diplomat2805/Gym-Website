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

dotenv.config();
const app = express();

// Connect to Mongo
connectDB();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(morgan("dev"));

// Main API status route
app.get("/", (req, res) => {
  res.send("Fit Camp Gym API running 🚀");
});

// API endpoints
app.use("/api/programs", programRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/memberships", membershipRoutes);
app.use("/api/contact", contactRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Backend running on port ${process.env.PORT}`)
);
