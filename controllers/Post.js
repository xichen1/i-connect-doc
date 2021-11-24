'use strict';

var utils = require('../utils/writer.js');
var Post = require('../service/PostService');

module.exports.createAPost = function createAPost (req, res, next, body, aUTHOR_ID, pOST_ID) {
  Post.createAPost(body, aUTHOR_ID, pOST_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createAPostAndGenerateId = function createAPostAndGenerateId (req, res, next, body, aUTHOR_ID) {
  Post.createAPostAndGenerateId(body, aUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePost = function deletePost (req, res, next, aUTHOR_ID, pOST_ID) {
  Post.deletePost(aUTHOR_ID, pOST_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAuthorRecentPosts = function getAuthorRecentPosts (req, res, next, aUTHOR_ID) {
  Post.getAuthorRecentPosts(aUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPostByPostIdAndAuthorId = function getPostByPostIdAndAuthorId (req, res, next, aUTHOR_ID, pOST_ID) {
  Post.getPostByPostIdAndAuthorId(aUTHOR_ID, pOST_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePostByPostIdAndAuthorId = function updatePostByPostIdAndAuthorId (req, res, next, body, aUTHOR_ID, pOST_ID) {
  Post.updatePostByPostIdAndAuthorId(body, aUTHOR_ID, pOST_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
