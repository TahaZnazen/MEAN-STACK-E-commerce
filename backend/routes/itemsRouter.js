const express = require("express");
const router = express.Router();

const itemsController = require("../controllers/itemsController");

router.route("/").get(itemsController.findAllItems);

module.exports = router;
