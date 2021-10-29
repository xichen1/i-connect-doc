'use strict';

var utils = require('../utils/writer.js');
var Liked = require('../service/LikedService');

module.exports.authorAUTHOR_IDLikedGET = function authorAUTHOR_IDLikedGET (req, res, next, aUTHOR_ID) {
  Liked.authorAUTHOR_IDLikedGET(aUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
