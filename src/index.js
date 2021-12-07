// require routes
const { notFound } = require("./handler/responseHandler");

const userTest = [
  { user1: "nguyen quoc dat", age: 21 },
  { user2: "hello", age: 22 },
];

// exports routes
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("hello from simple server :)");
  });

  app.get("/user", (req, res) => {
    res.json(userTest);
  });

  // all routes not found
  app.use("*", notFound);
};
