const authHandler = require("./authRoutes");
const contentHandler = require("./contentRoutes");

const routes = [
  {
    path: "/auth",
    handler: authHandler,
  },
  {
    path: "/content",
    handler: contentHandler,
  },
  {
    path: "/",
    handler: (req, res) => {
      res.render("pages/index");
    },
  },
];

const setRoutes = (app) => {
  routes.forEach((route) => {
    if (route.path === "/") {
      app.get(route.path, route.handler);
    } else {
      app.use(route.path, route.handler);
    }
  });
};

module.exports = setRoutes;
