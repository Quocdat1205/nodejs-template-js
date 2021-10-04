"use strict";
const constant = require("../../constants");
const logger = require("../helper/logger.helper");

exports.notFound = function (req, res) {
  logger.info(`Request ip is ${req.ip}`);
  return res.status(constant.not_found).send("Endpoint sipher not found!");
};

exports.success = function (res, message = "") {
  return res
    .status(constant.success_code)
    .json({ success: true, message: message });
};

exports.bad_request = function (res, error = {}, message = "") {
  return res
    .status(constant.bad_request)
    .json({ success: false, message: message, error: error });
};

exports.unauthorized = function (res, error = {}, message = "Unauthorized") {
  return res
    .status(constant.unauthorized_code)
    .json({ success: false, message: message, error: error });
};

exports.forbiden = function (res, error = {}, message = "Forbiden") {
  return res
    .status(constant.forbiden)
    .json({ success: false, message: message, error: error });
};

exports.error_server = function (res) {
  return res
    .status(constant.error_server)
    .json({ error: "Server have problem! Please try again later!" });
};
