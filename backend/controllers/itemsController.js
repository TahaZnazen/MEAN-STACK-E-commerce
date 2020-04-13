const Items = require("../models/ItemsModel");

exports.findAllItems = async (req, res) => {
  try {
    const items = await Items.find();
    res.status(201).json(items);
  } catch (err) {
    res.json(err);
  }
};
