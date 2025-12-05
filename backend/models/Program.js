import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    level: String,
    durationWeeks: Number,
    price: Number
  },
  { timestamps: true }
);

export default mongoose.model("Program", programSchema);
