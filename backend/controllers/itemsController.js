const Items = require("../models/ItemsModel");

exports.findAllItems = async (req, res) => {
  try {
    const items = await Items.find();
    res.status(201).json(items);
  } catch (err) {
    res.json(err);
  }
};

exports.findOneItem = async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);
    res.json({ item });
  } catch (err) {
    res.json(err);
  }
};

exports.addItem = async (req, res) => {
  try {
    await Items.create(req.body);

    res.json({ message: "item added" });
  } catch (err) {
    res.json(err);
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Items.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json({ updatedItem });
  } catch (err) {
    res.json({ err });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Items.findByIdAndRemove(req.params.id);
    res.json({ message: "done" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
