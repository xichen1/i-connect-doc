'use strict';


/**
 * Delete a follower
 *
 * aUTHOR_ID UUID ID of author who is followee
 * fOREIGN_AUTHOR_ID UUID ID of author who is follower
 * no response value expected for this operation
 **/
exports.authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDDELETE = function(aUTHOR_ID,fOREIGN_AUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * check if follower
 *
 * aUTHOR_ID UUID ID of author who is followee
 * fOREIGN_AUTHOR_ID UUID ID of author who is follower
 * no response value expected for this operation
 **/
exports.authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDGET = function(aUTHOR_ID,fOREIGN_AUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a follower
 *
 * aUTHOR_ID UUID ID of author who is followee
 * fOREIGN_AUTHOR_ID UUID ID of author who is follower
 * returns Follow
 **/
exports.authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDPUT = function(aUTHOR_ID,fOREIGN_AUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Following" : {
    "github" : "http://github.com/laracroftfollowing",
    "displayName" : "following",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  },
  "Follower" : {
    "github" : "http://github.com/laracroft",
    "displayName" : "follower",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6b",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6b"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GET list of follower of the provided author
 *
 * aUTHOR_ID UUID ID of author who has followers
 * returns Followers
 **/
exports.authorAUTHOR_IDFollowersGET = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "type" : "followers",
  "items" : [ {
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  }, {
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

