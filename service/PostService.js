'use strict';


/**
 * Create a post with provided post object
 *
 * body Post Post object that needs to be added
 * aUTHOR_ID UUID ID of author to use
 * pOST_ID UUID ID of post to create
 * returns Post
 **/
exports.createAPost = function(body,aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "type" : "post",
  "title" : "this is a title",
  "id" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd",
  "source" : "https://i-connect.herokuapp.com/",
  "origin" : "https://i-connect.herokuapp.com/",
  "description" : "new post",
  "contentType" : "text/plain",
  "content" : "post centent",
  "author" : {
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  },
  "categories" : [ "c1", "c2" ],
  "count" : 2,
  "comments" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd",
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
  "published" : "2021-11-23T14:35:54.516186Z",
  "visibility" : "PUBLIC",
  "unlisted" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a post and generate id by backend itself
 *
 * body Post Post object that needs to be created
 * aUTHOR_ID UUID ID of author of the post
 * returns Post
 **/
exports.createAPostAndGenerateId = function(body,aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "type" : "post",
  "title" : "this is a title",
  "id" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd",
  "source" : "https://i-connect.herokuapp.com/",
  "origin" : "https://i-connect.herokuapp.com/",
  "description" : "new post",
  "contentType" : "text/plain",
  "content" : "post centent",
  "author" : {
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  },
  "categories" : [ "c1", "c2" ],
  "count" : 2,
  "comments" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd",
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
  "published" : "2021-11-23T14:35:54.516186Z",
  "visibility" : "PUBLIC",
  "unlisted" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a post by post and author id
 *
 * aUTHOR_ID UUID ID of author for the post
 * pOST_ID UUID ID of post
 * no response value expected for this operation
 **/
exports.deletePost = function(aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one author's all public posts
 *
 * aUTHOR_ID UUID ID of author to return
 * returns Post
 **/
exports.getAuthorRecentPosts = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "type" : "post",
  "title" : "this is a title",
  "id" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd",
  "source" : "https://i-connect.herokuapp.com/",
  "origin" : "https://i-connect.herokuapp.com/",
  "description" : "new post",
  "contentType" : "text/plain",
  "content" : "post centent",
  "author" : {
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  },
  "categories" : [ "c1", "c2" ],
  "count" : 2,
  "comments" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd",
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
  "published" : "2021-11-23T14:35:54.516186Z",
  "visibility" : "PUBLIC",
  "unlisted" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the public post using the post's id and the author's id
 *
 * aUTHOR_ID UUID ID of author to return
 * pOST_ID UUID ID of post to return
 * returns Post
 **/
exports.getPostByPostIdAndAuthorId = function(aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "type" : "post",
  "title" : "this is a title",
  "id" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd",
  "source" : "https://i-connect.herokuapp.com/",
  "origin" : "https://i-connect.herokuapp.com/",
  "description" : "new post",
  "contentType" : "text/plain",
  "content" : "post centent",
  "author" : {
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  },
  "categories" : [ "c1", "c2" ],
  "count" : 2,
  "comments" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd",
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
  "published" : "2021-11-23T14:35:54.516186Z",
  "visibility" : "PUBLIC",
  "unlisted" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the post using the post's id and the author's id
 * must be authenticated
 *
 * body Post Pet object that needs to be added to the store (optional)
 * aUTHOR_ID UUID ID of author for this post
 * pOST_ID UUID ID of post
 * returns Post
 **/
exports.updatePostByPostIdAndAuthorId = function(body,aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "type" : "post",
  "title" : "this is a title",
  "id" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd",
  "source" : "https://i-connect.herokuapp.com/",
  "origin" : "https://i-connect.herokuapp.com/",
  "description" : "new post",
  "contentType" : "text/plain",
  "content" : "post centent",
  "author" : {
    "github" : "http://github.com/laracroft",
    "displayName" : "userName1",
    "host" : "https://i-connect.herokuapp.com/",
    "id" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a",
    "profileImage" : "https://i.imgur.com/k7XVwpB.jpeg",
    "type" : "author",
    "url" : "https://i-connect.herokuapp.com/service/author/625bc8b7-0ce0-420a-a4b4-ce1e70046e6a"
  },
  "categories" : [ "c1", "c2" ],
  "count" : 2,
  "comments" : "https://i-connect.herokuapp.com/service/author/b049e294-7850-4e6b-8222-a20533074947/posts/9754714d-5d45-40b8-80e3-07e102ff59fd",
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
  "published" : "2021-11-23T14:35:54.516186Z",
  "visibility" : "PUBLIC",
  "unlisted" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

