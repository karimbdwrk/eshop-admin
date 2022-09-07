"use strict";

module.exports = function (_ref) {
  var env = _ref.env;
  return {
    url: env('MY_HEROKU_URL')
  };
};