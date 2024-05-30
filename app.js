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

app.use((req, res, next) => {
  const error = {};
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log(error);
  if ((error.status = 404)) {
    res.render("pages/error/404");
  }
  res.render("pages/error/500");
});

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
