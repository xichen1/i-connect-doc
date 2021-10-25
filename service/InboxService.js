'use strict';


/**
 * Save a post/follow/like to {AUTHOR_ID}'s inbox
 *
 * body InboxItem Post/follow/like object that needs to be added to the inbox
 * aUTHOR_ID UUID ID of author to return
 * returns Inbox
 **/
exports.addItemToInboxByAuthorId = function(body,aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : {
    "type" : "type"
  },
  "type" : "inbox",
  "items" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a post/follow/like to {AUTHOR_ID}'s inbox(not finished)
 *
 * aUTHOR_ID UUID ID of author to return
 * returns Inbox
 **/
exports.deleteItemsInInboxByAuthorId = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : {
    "type" : "type"
  },
  "type" : "inbox",
  "items" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of posts/likes/follows sent to {AUTHOR_ID}
 *
 * aUTHOR_ID UUID ID of author to return
 * returns Inbox
 **/
exports.getInboxByAuthorId = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : {
    "type" : "type"
  },
  "type" : "inbox",
  "items" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

