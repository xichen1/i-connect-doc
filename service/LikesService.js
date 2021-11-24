'use strict';


/**
 * Get likes of the post by provided author and post id
 * GET a list of likes from other authors on author_id’s post post_id
 *
 * aUTHOR_ID UUID ID of the post's author
 * pOST_ID UUID ID of the post
 * returns List
 **/
exports.getLikesOfAPostByProvidedAuthorAndPostId = function(aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "summary" : "user1 likes your post",
  "author" : {
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  },
  "type" : "like",
  "object" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/123e4567-e12b-00d3-a456-426614174004"
}, {
  "summary" : "user1 likes your post",
  "author" : {
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  },
  "type" : "like",
  "object" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/123e4567-e12b-00d3-a456-426614174004"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get likes of the post by provided author, post and comment id
 * GET a list of likes from other authors on author_id’s post post_id
 *
 * aUTHOR_ID UUID ID of the post's author
 * pOST_ID UUID ID of the post
 * cOMMENT_ID UUID ID of the comment
 * returns List
 **/
exports.getLikesOfAPostOfACommentByProvidedAuthorAndPostId = function(aUTHOR_ID,pOST_ID,cOMMENT_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "summary" : "user1 likes your comment",
  "author" : {
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  },
  "type" : "like",
  "object" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/123e4567-e12b-00d3-a456-426614174004/comments/bb2f0537-c7b9-44c6-badc-a1ae37262254"
}, {
  "summary" : "user1 likes your comment",
  "author" : {
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  },
  "type" : "like",
  "object" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/123e4567-e12b-00d3-a456-426614174004/comments/bb2f0537-c7b9-44c6-badc-a1ae37262254"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

