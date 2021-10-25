'use strict';

var utils = require('../utils/writer.js');
var Comment = require('../service/CommentService');

module.exports.authorAUTHOR_IDPostsPOST_IDCommentsPOST = function authorAUTHOR_IDPostsPOST_IDCommentsPOST (req, res, next, body, aUTHOR_ID, pOST_ID) {
  Comment.authorAUTHOR_IDPostsPOST_IDCommentsPOST(body, aUTHOR_ID, pOST_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCommentByProvidedUserAndPost = function createCommentByProvidedUserAndPost (req, res, next, aUTHOR_ID, pOST_ID) {
  Comment.createCommentByProvidedUserAndPost(aUTHOR_ID, pOST_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
