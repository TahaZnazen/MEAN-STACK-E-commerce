const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
  name: String,
  discription: String,
  price: Number,
  available: Boolean,
});

const Item = mongoose.model("Item", ItemsSchema);

module.exports = Item;
