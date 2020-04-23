const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
// const itemsRouter = require("./routes/itemsRoute");
const itemsRouter = require("./routes/itemsRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/items", itemsRouter);

module.exports = app;
