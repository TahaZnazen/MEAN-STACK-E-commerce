const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
  name: String,
  discription: String,
  price: Number,
  available: { type: Boolean, default: true },
  category: String,
  imageUrl: { type: String, default: "null" },
});

const Item = mongoose.model("Item", ItemsSchema);

module.exports = Item;
