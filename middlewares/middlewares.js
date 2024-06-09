const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const { bindUserWithRequest } = require("./authMiddleware");

const store = new MongoDBStore({
  uri: process.env.DATABASE_URI,
  databaseName: "manageStaff",
  collection: "userSession",
});

const middlewares = [
  session({
    secret: "This is a secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: false,
  }),
  express.static("public"),
  bodyParser.urlencoded({ extended: true }),
  bindUserWithRequest(),
];

const setMiddlewares = (app) => {
  app.use(middlewares);
};

module.exports = setMiddlewares;
