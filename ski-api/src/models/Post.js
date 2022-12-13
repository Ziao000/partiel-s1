const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  weight: {
    type: Number,
    default: 0,
  },
  size: {
    type: Number,
  },
  style: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],

  booking: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],

  isAvailable: {
    type: Boolean,
    default: true,
  }

});

module.exports = mongoose.model("Post", postSchema);
