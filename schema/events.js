const { ContentType, FieldType } = require('@include/hearth');

const programCards = new ContentType({
  name: 'events',
  pluralDisplayName: 'Events: Events',
});

programCards
  .createField({
    name: 'image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'type',
    displayName: 'Type: Upcoming or Recap',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'title',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'date',
    displayName: 'Date',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = programCards;
