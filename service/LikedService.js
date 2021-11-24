'use strict';


/**
 * GET list what posts/commenets the author_id liked
 *
 * aUTHOR_ID UUID ID of author who liked
 * returns Liked
 **/
exports.authorAUTHOR_IDLikedGET = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "type" : "liked",
  "items" : {
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
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

