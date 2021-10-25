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
  "comment" : "comment",
  "published" : "2000-01-23T04:56:07.000+00:00",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "Comment",
  "contentType" : "contentType"
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
 * aUTHOR_ID UUID ID of author to return
 * pOST_ID UUID Pet object that needs to be added to the store
 * returns CommentArray
 **/
exports.createCommentByProvidedUserAndPost = function(aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : [ {
    "comment" : "comment",
    "published" : "2000-01-23T04:56:07.000+00:00",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "Comment",
    "contentType" : "contentType"
  }, {
    "comment" : "comment",
    "published" : "2000-01-23T04:56:07.000+00:00",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "Comment",
    "contentType" : "contentType"
  } ],
  "id" : "id",
  "type" : "Comments"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

