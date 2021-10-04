require("dotenv").config();

// System
define("HOST", process.env.HOST);
define("PORT", process.env.PORT);
define("PORT_AUTH", process.env.PORT_AUTH);
define("NODE_ENV", process.env.NODE_ENV);

// Common
define("success_code", 200);
define("success_create", 201);
define("accepted", 202);
define("no_info", 202);
define("no_content", 204);
define("reset_content", 204);
define("multiple_choice", 300);
define("mover_permanently", 301);
define("bad_request", 400);
define("unauthorized", 401);
define("forbiden", 403);
define("not_found", 404);
define("method_not_alolow", 405);
define("not_acceptable", 405);
define("request_timeout", 408);
define("conflict", 409);
define("internal_server", 500);
define("not_implement", 501);
define("bad_gateway", 502);
define("service_unvaliable", 503);
define("gateway_timeout", 504);
define("http_not_support", 505);

function define(key, value) {
  Object.defineProperty(exports, key, {
    value: value,
    enumerable: true,
  });
}
