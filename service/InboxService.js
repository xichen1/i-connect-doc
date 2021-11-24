'use strict';


/**
 * Save a post/follow/like
 *
 * body Post Comment object that needs to be added to the post (optional)
 * aUTHOR_ID UUID ID of author of inbox
 * returns Inbox
 **/
exports.addItemToInboxByAuthorId = function(body,aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "inbox",
  "items" : [ {
    "comments" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd,",
    "visibility" : "PUBLIC",
    "author" : {
      "github" : "http://github.com/laracroft",
      "displayName" : "userName1",
      "host" : "https://i-connect.herokuapp.com/",
      "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
      "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
      "type" : "author",
      "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
    },
    "origin" : "https://i-connect.herokuapp.com/",
    "count" : 2,
    "description" : "new post",
    "source" : "https://i-connect.herokuapp.com/",
    "published" : "2021-11-23T14:35:54.516186Z",
    "type" : "post",
    "title" : "this is a title",
    "content" : "post centent",
    "commentSrc" : {
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
    },
    "unlisted" : false,
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "categories" : [ "c1", "c2" ],
    "contentType" : "text/plain"
  }, {
    "comments" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd,",
    "visibility" : "PUBLIC",
    "author" : {
      "github" : "http://github.com/laracroft",
      "displayName" : "userName1",
      "host" : "https://i-connect.herokuapp.com/",
      "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
      "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
      "type" : "author",
      "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
    },
    "origin" : "https://i-connect.herokuapp.com/",
    "count" : 2,
    "description" : "new post",
    "source" : "https://i-connect.herokuapp.com/",
    "published" : "2021-11-23T14:35:54.516186Z",
    "type" : "post",
    "title" : "this is a title",
    "content" : "post centent",
    "commentSrc" : {
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
    },
    "unlisted" : false,
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "categories" : [ "c1", "c2" ],
    "contentType" : "text/plain"
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
 * Delete all post/follow/like in {AUTHOR_ID}'s inbox
 *
 * aUTHOR_ID UUID ID of author to return
 * no response value expected for this operation
 **/
exports.deleteItemsInInboxByAuthorId = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of shared posts sent to {AUTHOR_ID}
 *
 * aUTHOR_ID UUID ID of author of the inbox
 * returns Inbox
 **/
exports.getInboxByAuthorId = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "inbox",
  "items" : [ {
    "comments" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd,",
    "visibility" : "PUBLIC",
    "author" : {
      "github" : "http://github.com/laracroft",
      "displayName" : "userName1",
      "host" : "https://i-connect.herokuapp.com/",
      "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
      "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
      "type" : "author",
      "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
    },
    "origin" : "https://i-connect.herokuapp.com/",
    "count" : 2,
    "description" : "new post",
    "source" : "https://i-connect.herokuapp.com/",
    "published" : "2021-11-23T14:35:54.516186Z",
    "type" : "post",
    "title" : "this is a title",
    "content" : "post centent",
    "commentSrc" : {
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
    },
    "unlisted" : false,
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "categories" : [ "c1", "c2" ],
    "contentType" : "text/plain"
  }, {
    "comments" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd,",
    "visibility" : "PUBLIC",
    "author" : {
      "github" : "http://github.com/laracroft",
      "displayName" : "userName1",
      "host" : "https://i-connect.herokuapp.com/",
      "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
      "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
      "type" : "author",
      "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
    },
    "origin" : "https://i-connect.herokuapp.com/",
    "count" : 2,
    "description" : "new post",
    "source" : "https://i-connect.herokuapp.com/",
    "published" : "2021-11-23T14:35:54.516186Z",
    "type" : "post",
    "title" : "this is a title",
    "content" : "post centent",
    "commentSrc" : {
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
    },
    "unlisted" : false,
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "categories" : [ "c1", "c2" ],
    "contentType" : "text/plain"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

