'use strict';


/**
 * Get likes of the post by provided author and post id
 * GET a list of likes from other authors on author_id’s post post_id
 *
 * aUTHOR_ID UUID ID of the post's author
 * pOST_ID UUID ID of the post
 * returns PostLikeArray
 **/
exports.getLikesOfAPostByProvidedAuthorAndPostId = function(aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "post" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "Likes",
  "likes" : [ {
    "summary" : "summary string",
    "post" : {
      "visibility" : "PUBLIC",
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
    },
    "author" : {
      "github_name" : "this is github name",
      "user_name" : "this is user name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "author"
    },
    "comment" : { },
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "Like"
  }, {
    "summary" : "summary string",
    "post" : {
      "visibility" : "PUBLIC",
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
    },
    "author" : {
      "github_name" : "this is github name",
      "user_name" : "this is user name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "author"
    },
    "comment" : { },
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "Like"
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
 * aUTHOR_ID UUID ID of the post's author
 * pOST_ID UUID ID of the post
 * cOMMENT_ID UUID ID of the comment
 * returns CommentLikeArray
 **/
exports.getLikesOfAPostOfACommentByProvidedAuthorAndPostId = function(aUTHOR_ID,pOST_ID,cOMMENT_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comment" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "Likes",
  "likes" : [ {
    "summary" : "summary string",
    "post" : {
      "visibility" : "PUBLIC",
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
    },
    "author" : {
      "github_name" : "this is github name",
      "user_name" : "this is user name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "author"
    },
    "comment" : {
      "author" : {
        "github_name" : "this is github name",
        "user_name" : "this is user name",
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "type" : "author"
      },
      "comment" : "this is comment content",
      "published" : "2015-03-09T13:07:04+00:00",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "comment",
      "contentType" : "text"
    },
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "Like"
  }, {
    "summary" : "summary string",
    "post" : {
      "visibility" : "PUBLIC",
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
    },
    "author" : {
      "github_name" : "this is github name",
      "user_name" : "this is user name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "author"
    },
    "comment" : {
      "author" : {
        "github_name" : "this is github name",
        "user_name" : "this is user name",
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "type" : "author"
      },
      "comment" : "this is comment content",
      "published" : "2015-03-09T13:07:04+00:00",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "type" : "comment",
      "contentType" : "text"
    },
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "Like"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

