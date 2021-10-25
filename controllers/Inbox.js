'use strict';

var utils = require('../utils/writer.js');
var Inbox = require('../service/InboxService');

module.exports.addItemToInboxByAuthorId = function addItemToInboxByAuthorId (req, res, next, body, aUTHOR_ID) {
  Inbox.addItemToInboxByAuthorId(body, aUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteItemsInInboxByAuthorId = function deleteItemsInInboxByAuthorId (req, res, next, aUTHOR_ID) {
  Inbox.deleteItemsInInboxByAuthorId(aUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInboxByAuthorId = function getInboxByAuthorId (req, res, next, aUTHOR_ID) {
  Inbox.getInboxByAuthorId(aUTHOR_ID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
