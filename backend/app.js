const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

const AppError = require("./utils/appError");
const itemsRouter = require("./routes/itemsRouter");
const globalErrorHandler = require("./controllers/errorController");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/items", itemsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
