Users = Meteor.users;

var Profile = new SimpleSchema({
  name: {
    type: String,
  },
  service: {
    type: String,
    allowedValues: [
      'edmodo', 'google',
    ],
    optional: true,
  },
});

var Email = new SimpleSchema({
  address: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: true,
  },
  verified: {
    type: Boolean,
    defaultValue: false,
  },
});

Schemas.User = new SimpleSchema([Schemas.Common.Dates, {
  services: {
    type: Object,
    blackbox: true,
  },
  profile: {
    type: Profile,
  },
  roles: {
    type: [String],
    optional: true,
  },
  'roles.$': {
    allowedValues: [
      /* user type */
      'student',
      'teacher',
      'parent',
      'admin',
      /* subscription type */
      'demo',
      'trial',
      'full',
    ],
  },
  status: {
    type: Object,
    blackbox: true,
    defaultValue: {},
  },
  emails: {
    type: [Email],
    defaultValue: [{}],
  },
}]);