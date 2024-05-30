const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const setMiddlewares = require("./middlewares/middlewares");
const setRoutes = require("./routes/routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

setMiddlewares(app);

setRoutes(app);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.DATABASE_URI, {
    dbName: "manageStaff",
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((e) => console.log(e));
