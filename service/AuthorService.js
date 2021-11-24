'use strict';


/**
 * Get all authors
 *
 * returns AuthorList
 **/
exports.authorsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "type" : "authors",
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


/**
 * Get a author object by provided author_id
 *
 * aUTHOR_ID UUID ID of author to return
 * returns Author
 **/
exports.getAuthorByAutherId = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "github" : "http://github.com/laracroft",
  "displayName" : "userName1",
  "host" : "https://i-connect.herokuapp.com/",
  "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
  "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
  "type" : "author",
  "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a author object by provided author_id
 *
 * body Author Update author object (optional)
 * aUTHOR_ID UUID ID of author to update
 * returns Author
 **/
exports.updateAuthorByAutherId = function(body,aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "github" : "http://github.com/laracroft",
  "displayName" : "userName1",
  "host" : "https://i-connect.herokuapp.com/",
  "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
  "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
  "type" : "author",
  "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

