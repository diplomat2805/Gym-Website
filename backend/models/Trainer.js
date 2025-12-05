import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema(
  {
    name: String,
    specialty: String,
    experienceYears: Number,
    bio: String,
    photoUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Trainer", trainerSchema);
