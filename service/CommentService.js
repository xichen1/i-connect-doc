'use strict';


/**
 * Create a comments of the post by provided author and post id
 *
 * body Comment Comment object that needs to be added to the post
 * aUTHOR_ID UUID ID of author to return
 * pOST_ID UUID Pet object that needs to be added to the store
 * returns Comment
 **/
exports.authorAUTHOR_IDPostsPOST_IDCommentsPOST = function(body,aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : {
    "github_name" : "this is github name",
    "user_name" : "this is user name",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "author"
  },
  "comment" : "this is comment content",
  "published" : "”2015-03-09T13:07:04+00:00”",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "comment",
  "contentType" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get comments of the post by provided author and post id
 *
 * aUTHOR_ID UUID ID of the post's author
 * pOST_ID UUID ID of the post
 * returns CommentArray
 **/
exports.createCommentByProvidedUserAndPost = function(aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : [ {
    "author" : {
      "github_name" : "this is github name",
      "user_name" : "this is user name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "author"
    },
    "comment" : "this is comment content",
    "published" : "”2015-03-09T13:07:04+00:00”",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "comment",
    "contentType" : "text"
  }, {
    "author" : {
      "github_name" : "this is github name",
      "user_name" : "this is user name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "author"
    },
    "comment" : "this is comment content",
    "published" : "”2015-03-09T13:07:04+00:00”",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "comment",
    "contentType" : "text"
  } ],
  "id" : "id",
  "type" : "comments"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

