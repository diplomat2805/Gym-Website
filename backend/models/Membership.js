import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    fitnessGoal: { type: String, required: true },
    trainingTime: { type: String, required: true },

    // 🔥 New fields must come AFTER a comma
    status: {
      type: String,
      enum: ["pending", "contacted", "converted", "lost"],
      default: "pending",
    },

    source: {
      type: String,
      default: "join-form",
    }
  },
  { timestamps: true }
);

const Membership = mongoose.model("Membership", membershipSchema);
export default Membership;
