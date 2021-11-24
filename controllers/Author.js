'use strict';

var utils = require('../utils/writer.js');
var Author = require('../service/AuthorService');

module.exports.authorsGET = function authorsGET (req, res, next) {
  Author.authorsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAuthorByAutherId = function getAuthorByAutherId (req, res, next, aUTHOR_ID) {
  Author.getAuthorByAutherId(aUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAuthorByAutherId = function updateAuthorByAutherId (req, res, next, body, aUTHOR_ID) {
  Author.updateAuthorByAutherId(body, aUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
