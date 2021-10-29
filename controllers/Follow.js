'use strict';

var utils = require('../utils/writer.js');
var Follow = require('../service/FollowService');

module.exports.authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDDELETE = function authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDDELETE (req, res, next, aUTHOR_ID, fOREIGN_AUTHOR_ID) {
  Follow.authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDDELETE(aUTHOR_ID, fOREIGN_AUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDGET = function authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDGET (req, res, next, aUTHOR_ID, fOREIGN_AUTHOR_ID) {
  Follow.authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDGET(aUTHOR_ID, fOREIGN_AUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDPUT = function authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDPUT (req, res, next, aUTHOR_ID, fOREIGN_AUTHOR_ID) {
  Follow.authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDPUT(aUTHOR_ID, fOREIGN_AUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorAUTHOR_IDFollowersGET = function authorAUTHOR_IDFollowersGET (req, res, next, aUTHOR_ID) {
  Follow.authorAUTHOR_IDFollowersGET(aUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
