import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    burrowId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      min: 1,
      required: true,
      max: 5,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
    expectedAvailable: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", reviewSchema);
