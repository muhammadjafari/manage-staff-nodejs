const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const middlewares = [
  express.static("public"),
  bodyParser.urlencoded({ extended: true }),
];

const setMiddlewares = (app) => {
  app.use(middlewares);
};

module.exports = setMiddlewares;
