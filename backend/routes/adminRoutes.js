import { Router } from "express";
import jwt from "jsonwebtoken";
import Membership from "../models/Membership.js";
import Program from "../models/Program.js";
import Trainer from "../models/Trainer.js";
import ContactMessage from "../models/ContactMessage.js";
import { adminAuth } from "../middleware/adminAuth.js";

const router = Router();

// 🔐 Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );

    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

// 📊 Overview stats
router.get("/overview", adminAuth, async (req, res) => {
  try {
    const totalLeads = await Membership.countDocuments();
    const pendingLeads = await Membership.countDocuments({ status: "pending" });
    const contactedLeads = await Membership.countDocuments({ status: "contacted" });
    const convertedLeads = await Membership.countDocuments({ status: "converted" });

    const totalPrograms = await Program.countDocuments();
    const totalTrainers = await Trainer.countDocuments();
    const totalMessages = await ContactMessage.countDocuments();

    res.json({
      totalLeads,
      pendingLeads,
      contactedLeads,
      convertedLeads,
      totalPrograms,
      totalTrainers,
      totalMessages,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// 📥 All membership leads
router.get("/memberships", adminAuth, async (req, res) => {
  try {
    const leads = await Membership.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Update membership status
router.patch("/memberships/:id/status", adminAuth, async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    const updated = await Membership.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
