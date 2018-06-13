import { Meteor } from 'meteor/meteor';
import { Posts } from "./collections/posts";
import './methods';

Meteor.startup(() => {
  // code to run on server at startup
  // process.env['MONGO_URL'] = 'MONGO_URL=mongodb://localhost:27017/simple_posts'
});