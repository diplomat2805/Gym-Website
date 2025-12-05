import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phone: String,
    age: Number,
    fitnessGoal: String,
    preferredTime: String
  },
  { timestamps: true }
);

export default mongoose.model("Membership", membershipSchema);
