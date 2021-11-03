'use strict';


/**
 * Save a post/follow/like
 *
 * body FriendPost Comment object that needs to be added to the post (optional)
 * aUTHOR_ID UUID ID of author to return
 * returns Inbox
 **/
exports.addItemToInboxByAuthorId = function(body,aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "inbox",
  "items" : [ {
    "visibility" : "FRIENDS",
    "author" : {
      "github_name" : "this is github name",
      "user_name" : "this is user name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "author"
    },
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "published" : { },
    "type" : "post",
    "title" : "this is a title",
    "content" : "aaaaabbbbbbcccc"
  }, {
    "visibility" : "FRIENDS",
    "author" : {
      "github_name" : "this is github name",
      "user_name" : "this is user name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "author"
    },
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "published" : { },
    "type" : "post",
    "title" : "this is a title",
    "content" : "aaaaabbbbbbcccc"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a post/follow/like to {AUTHOR_ID}'s inbox
 *
 * aUTHOR_ID UUID ID of author to return
 * no response value expected for this operation
 **/
exports.deleteItemsInInboxByAuthorId = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of shared posts sent to {AUTHOR_ID}
 *
 * aUTHOR_ID UUID ID of author to return
 * returns Inbox
 **/
exports.getInboxByAuthorId = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "inbox",
  "items" : [ {
    "visibility" : "FRIENDS",
    "author" : {
      "github_name" : "this is github name",
      "user_name" : "this is user name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "author"
    },
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "published" : { },
    "type" : "post",
    "title" : "this is a title",
    "content" : "aaaaabbbbbbcccc"
  }, {
    "visibility" : "FRIENDS",
    "author" : {
      "github_name" : "this is github name",
      "user_name" : "this is user name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "author"
    },
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "published" : { },
    "type" : "post",
    "title" : "this is a title",
    "content" : "aaaaabbbbbbcccc"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

