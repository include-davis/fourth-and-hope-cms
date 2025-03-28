const { ContentType, FieldType } = require('@include/hearth');

const meetings = new ContentType({
  name: 'meetings',
  pluralDisplayName: 'About: Board Meetings Pop-up',
});

// Required field for the year
meetings.createField({
  name: 'year',
  displayName: 'Year',
  type: FieldType.SHORT_TEXT,
  required: true,
});

// Optional media-list fields for each month (for PDF links)
meetings.createField({
  name: 'january',
  displayName: 'January PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

meetings.createField({
  name: 'february',
  displayName: 'February PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

meetings.createField({
  name: 'march',
  displayName: 'March PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

meetings.createField({
  name: 'april',
  displayName: 'April PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

meetings.createField({
  name: 'may',
  displayName: 'May PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

meetings.createField({
  name: 'june',
  displayName: 'June PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

meetings.createField({
  name: 'july',
  displayName: 'July PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

meetings.createField({
  name: 'august',
  displayName: 'August PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

meetings.createField({
  name: 'september',
  displayName: 'September PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

meetings.createField({
  name: 'october',
  displayName: 'October PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

meetings.createField({
  name: 'november',
  displayName: 'November PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

meetings.createField({
  name: 'december',
  displayName: 'December PDF',
  type: FieldType.SHORT_TEXT,
  required: false,
});

module.exports = meetings;
