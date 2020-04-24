const Items = require("../models/ItemsModel");
const catchAsync = require("../utils/catchAsync");

exports.findAllItems = catchAsync(async (req, res) => {
  const items = await Items.find();
  res.status(201).json(items);
});

exports.findOneItem = catchAsync(async (req, res) => {
  const item = await Items.findById(req.params.id);
  res.json({ item });
});

exports.addItem = catchAsync(async (req, res) => {
  await Items.create(req.body);
  res.json({ message: "item added" });
});

exports.updateItem = catchAsync(async (req, res) => {
  const updatedItem = await Items.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ updatedItem });
});

exports.deleteItem = catchAsync(async (req, res) => {
  await Items.findByIdAndRemove(req.params.id);
  res.json({ message: "item deleted" });
});
