const { ContentType, FieldType } = require('@include/hearth');

const meetings = new ContentType({
  name: 'meetings',
  pluralDisplayName: 'About: Board Meetings Pop-up',
});

meetings
  .createField({
    name: 'year',
    displayName: 'Year',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'month',
    displayName: 'Month',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'link',
    displayName: 'PDF Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = meetings;
