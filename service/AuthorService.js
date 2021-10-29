'use strict';


/**
 * Get all authors
 *
 * returns Authors
 **/
exports.authorsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "github_name" : "this is github name",
  "user_name" : "this is user name",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "author"
}, {
  "github_name" : "this is github name",
  "user_name" : "this is user name",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "author"
} ];
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
  "github_name" : "this is github name",
  "user_name" : "this is user name",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "author"
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
 * aUTHOR_ID UUID ID of author to return
 * returns Author
 **/
exports.updateAuthorByAutherId = function(body,aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "github_name" : "this is github name",
  "user_name" : "this is user name",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "author"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Login up a user
 *
 * body LoginUser Update author object (optional)
 * returns Author
 **/
exports.usersLoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "github_name" : "this is github name",
  "user_name" : "this is user name",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "author"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sign up a user
 *
 * body SignUpAuthor Create a author object (optional)
 * returns Author
 **/
exports.usersSignupPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "github_name" : "this is github name",
  "user_name" : "this is user name",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "author"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

