// require routes
const { notFound } = require("./handler/responseHandler");

// exports routes
module.exports = (app) => {
  // all routes not found
  app.use("*", notFound);
};
