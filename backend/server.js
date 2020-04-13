const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config();

const localDB = process.env.LOCAL_DATABASE;

mongoose
  .connect(localDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE connected");
  });

const server = app.listen(4000, () =>
  console.log("server is running on ", "4k")
);
