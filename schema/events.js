const { ContentType, FieldType } = require('@include/hearth');

const events = new ContentType({
  name: 'events',
  pluralDisplayName: 'Events: Events',
});

events
  .createField({
    name: 'images',
    displayName: 'Images',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'image_alt',
    displayName: 'Image Alternative Text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'type',
    displayName: 'Type: upcoming or recap',
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

module.exports = events;
