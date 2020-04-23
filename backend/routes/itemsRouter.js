const express = require("express");
const router = express.Router();

const itemsController = require("../controllers/itemsController");

router.route("/").get(itemsController.findAllItems);
router
  .route("/:id")
  .get(itemsController.findOneItem)
  .patch(itemsController.updateItem)
  .delete(itemsController.deleteItem);
router.route("/addItem").post(itemsController.addItem);
module.exports = router;
