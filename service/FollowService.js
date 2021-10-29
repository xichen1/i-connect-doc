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
 * no response value expected for this operation
 **/
exports.authorAUTHOR_IDFollowersFOREIGN_AUTHOR_IDPUT = function(aUTHOR_ID,fOREIGN_AUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * GET list of follower of the provided author
 *
 * aUTHOR_ID UUID ID of author who has followers
 * returns Liked
 **/
exports.authorAUTHOR_IDFollowersGET = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "type" : "liked",
  "items" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

