'use strict';


/**
 * Create a post with provided post_id
 *
 * body Post Pet object that needs to be added to the store
 * aUTHOR_ID UUID ID of author to return
 * pOST_ID UUID ID of post to return
 * returns Post
 **/
exports.createAPost = function(body,aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "visibility" : "PUBLIC",
  "author" : {
    "type" : "type"
  },
  "description" : "description",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "published" : "2000-01-23T04:56:07.000+00:00",
  "type" : "Post",
  "title" : "title",
  "contentType" : "contentType",
  "commentsSrc" : {
    "comment" : "comment",
    "published" : "2000-01-23T04:56:07.000+00:00",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "Comment",
    "contentType" : "contentType"
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
  "comments" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "visibility" : "PUBLIC",
  "author" : {
    "type" : "type"
  },
  "description" : "description",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "published" : "2000-01-23T04:56:07.000+00:00",
  "type" : "Post",
  "title" : "title",
  "contentType" : "contentType",
  "commentsSrc" : {
    "comment" : "comment",
    "published" : "2000-01-23T04:56:07.000+00:00",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "Comment",
    "contentType" : "contentType"
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
 * Delete a post by post and author id
 *
 * aUTHOR_ID UUID ID of author to return
 * pOST_ID UUID ID of post to return
 * no response value expected for this operation
 **/
exports.deletePost = function(aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one author's all posts
 *
 * aUTHOR_ID UUID ID of author to return
 * returns Post
 **/
exports.getAuthorRecentPosts = function(aUTHOR_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "visibility" : "PUBLIC",
  "author" : {
    "type" : "type"
  },
  "description" : "description",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "published" : "2000-01-23T04:56:07.000+00:00",
  "type" : "Post",
  "title" : "title",
  "contentType" : "contentType",
  "commentsSrc" : {
    "comment" : "comment",
    "published" : "2000-01-23T04:56:07.000+00:00",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "Comment",
    "contentType" : "contentType"
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
  "comments" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "visibility" : "PUBLIC",
  "author" : {
    "type" : "type"
  },
  "description" : "description",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "published" : "2000-01-23T04:56:07.000+00:00",
  "type" : "Post",
  "title" : "title",
  "contentType" : "contentType",
  "commentsSrc" : {
    "comment" : "comment",
    "published" : "2000-01-23T04:56:07.000+00:00",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "Comment",
    "contentType" : "contentType"
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
 * Update the post using the post's id and the author's id(not finished)
 * must be authenticated
 *
 * aUTHOR_ID UUID ID of author to return
 * pOST_ID UUID ID of post to return
 * returns Post
 **/
exports.updatePostByPostIdAndAuthorId = function(aUTHOR_ID,pOST_ID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "visibility" : "PUBLIC",
  "author" : {
    "type" : "type"
  },
  "description" : "description",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "published" : "2000-01-23T04:56:07.000+00:00",
  "type" : "Post",
  "title" : "title",
  "contentType" : "contentType",
  "commentsSrc" : {
    "comment" : "comment",
    "published" : "2000-01-23T04:56:07.000+00:00",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "Comment",
    "contentType" : "contentType"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

