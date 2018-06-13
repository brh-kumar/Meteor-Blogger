import { Meteor } from 'meteor/meteor';
import Posts from "./collections/posts"; 

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  'insertPost': function (data) {
    console.log(data)
    return data;
  }

});