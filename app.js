/*
    require modules
**/
var express = require("express");
var cors = require("cors");
var rateLimit = require("express-rate-limit");
var helmet = require("helmet");

// define limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

/*
    require common
**/
var app = express();
var logger = require("./src/helper/logger.helper");
var constans = require("./constants");
var index = require("./src/index");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(limiter);
app.use(helmet());

// initial all routes
index(app);

/*
    initial http or https
**/
var httpServer = require("http");
httpServer
  .createServer(app)
  .listen(constans.PORT, () =>
    logger.info(`Server start on port ${constans.PORT}`)
  );

module.exports = app;
