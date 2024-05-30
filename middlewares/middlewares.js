const express = require("express");
const path = require("path");

const middlewares = [express.static("public")];

const setMiddlewares = (app) => {
  app.use(middlewares);
};

module.exports = setMiddlewares;
