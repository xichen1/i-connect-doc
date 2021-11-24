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
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  },
  "comment" : "this is comment content",
  "published" : "2015-03-09T13:07:04+00:00",
  "id" : "id",
  "type" : "comment",
  "contentType" : "text/markdown"
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
 * returns CommentSrc
 **/
exports.createCommentByProvidedUserAndPost = function(aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : [ {
    "author" : {
      "github" : "http://github.com/laracroft",
      "displayName" : "userName1",
      "host" : "https://i-connect.herokuapp.com/",
      "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
      "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
      "type" : "author",
      "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
    },
    "comment" : "this is comment content",
    "published" : "2015-03-09T13:07:04+00:00",
    "id" : "id",
    "type" : "comment",
    "contentType" : "text/markdown"
  }, {
    "author" : {
      "github" : "http://github.com/laracroft",
      "displayName" : "userName1",
      "host" : "https://i-connect.herokuapp.com/",
      "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
      "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
      "type" : "author",
      "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
    },
    "comment" : "this is comment content",
    "published" : "2015-03-09T13:07:04+00:00",
    "id" : "id",
    "type" : "comment",
    "contentType" : "text/markdown"
  } ],
  "size" : 5,
  "post" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd",
  "page" : 1,
  "id" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd/comments",
  "type" : "comments"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

