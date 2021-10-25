'use strict';


/**
 * Get likes of the post by provided author and post id
 * GET a list of likes from other authors on author_id’s post post_id
 *
 * aUTHOR_ID UUID ID of author to return
 * pOST_ID UUID Pet object that needs to be added to the store
 * returns PostLikeArray
 **/
exports.getLikesOfAPostByProvidedAuthorAndPostId = function(aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "post" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "Likes",
  "likes" : [ {
    "author" : {
      "type" : "type"
    },
    "type" : "Like",
    "object" : { }
  }, {
    "author" : {
      "type" : "type"
    },
    "type" : "Like",
    "object" : { }
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
 * Get likes of the post by provided author and post id
 * GET a list of likes from other authors on author_id’s post post_id
 *
 * aUTHOR_ID UUID ID of author to return
 * pOST_ID UUID Pet object that needs to be added to the store
 * cOMMENT_ID UUID Pet object that needs to be added to the store
 * returns CommentLikeArray
 **/
exports.getLikesOfAPostOfACommentByProvidedAuthorAndPostId = function(aUTHOR_ID,pOST_ID,cOMMENT_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comment" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "Likes",
  "likes" : [ {
    "author" : {
      "type" : "type"
    },
    "type" : "Like",
    "object" : { }
  }, {
    "author" : {
      "type" : "type"
    },
    "type" : "Like",
    "object" : { }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

