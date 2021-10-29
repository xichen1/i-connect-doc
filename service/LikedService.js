'use strict';


/**
 * GET list what public things author_id liked
 *
 * aUTHOR_ID UUID ID of author who liked
 * returns Liked
 **/
exports.authorAUTHOR_IDLikedGET = function(aUTHOR_ID) {
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

