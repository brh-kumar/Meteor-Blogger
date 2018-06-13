import { Meteor } from 'meteor/meteor';
import { Posts } from "./collections/posts";

Meteor.methods({
  'insertPost': function (data) {
    var id = Posts.insert(data);
    return id;
  },

  'fetchPosts': function () {
    var posts = Posts.find({});
    return posts;
  },

  'fetchPost': function (postId) {
    var post = Posts.find({ _id: postId });
    return post;
  },

  'updatePost': function (pObj = {}) {
    var { postId, data} = pObj;
    var posts = Posts.update({ _id: postId }, data);
    
    return posts;
  },

  'deletePost': function (postId) {
    var isRemoved = Posts.remove({ _id: postId });

    return (isRemoved && 'Post has been removed') || 'Sorry, something went wrong';
  }
});