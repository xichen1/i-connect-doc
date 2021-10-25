'use strict';

var utils = require('../utils/writer.js');
var Likes = require('../service/LikesService');

module.exports.getLikesOfAPostByProvidedAuthorAndPostId = function getLikesOfAPostByProvidedAuthorAndPostId (req, res, next, aUTHOR_ID, pOST_ID) {
  Likes.getLikesOfAPostByProvidedAuthorAndPostId(aUTHOR_ID, pOST_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLikesOfAPostOfACommentByProvidedAuthorAndPostId = function getLikesOfAPostOfACommentByProvidedAuthorAndPostId (req, res, next, aUTHOR_ID, pOST_ID, cOMMENT_ID) {
  Likes.getLikesOfAPostOfACommentByProvidedAuthorAndPostId(aUTHOR_ID, pOST_ID, cOMMENT_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
