Users.helpers({
  units: function () {
    var unitIds = UserUnits.find({userId: Meteor.userId()})
      .map(function (doc) {
        return doc.unitId;
      });

    var units = Units.find({_id: {$in: unitIds}}, {sort: {createdAt: - 1}});
    return units;
  },
  game: function () {
    var game = Games.findOne({
      userId: Meteor.userId(),
      courseId: Session.get('courseId'),
      unitId: Session.get('unitId'),
      finished: false,
    });
    return game;
  },
  iep: function () {
    var iep = UserCourses.findOne({
      userId: Meteor.userId(),
      courseId: Session.get('courseId'),
    }).iep;
    return iep;
  },
  service: function () {
    return this.profile.service && _.capitalize(this.profile.service);
  }, 
});