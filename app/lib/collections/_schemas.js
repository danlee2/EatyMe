Schemas = {};
Schemas.Common = {};

Schemas.Common.Counts = new SimpleSchema({
  courseCount: {
    type: Number,
    defaultValue: 0,
  },
  unitCount: {
    type: Number,
    defaultValue: 0,
  },
  cardCount: {
    type: Number,
    defaultValue: 0,
  },
});

Schemas.Common.Dates = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
      else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      }
      this.unset();
    },
    denyInsert: true,
    optional: true,
  },   
});

Schemas.Common.Parent = new SimpleSchema({
  parentId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
  },
});