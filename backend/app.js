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

// Routes
app.use("/api/items", itemsRouter);

app.all("*", (req, res, next) => {
  //   res.status(404).json({
  //     status: "fail",
  //     message: `Can't find ${req.originalUrl} on this server`,
  //   });
  const err = new Error();
  err.status = "fail";
  err.statusCode = 404;
  err.message = `Can't find ${req.originalUrl} on this server`;
  next();
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
module.exports = app;
