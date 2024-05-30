const authHandler = require("./authRoutes");

const routes = [
  {
    path: "/auth",
    handler: authHandler,
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
