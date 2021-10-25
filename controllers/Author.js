'use strict';

var utils = require('../utils/writer.js');
var Author = require('../service/AuthorService');

module.exports.getAuthorByAutherId = function getAuthorByAutherId (req, res, next, aUTHOR_ID) {
  Author.getAuthorByAutherId(aUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
