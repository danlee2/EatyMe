// Teddy: so basically, you can start here and rename this to be assignments.js; same goes for the current users files in collections and collections-helpers

Meteor.publish('teachers', function (skipCount) {
  return Users.find({roles: 'teacher'}, {
    limit: 15, 
    skip: skipCount
  });
});