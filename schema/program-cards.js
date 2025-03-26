const { ContentType, FieldType } = require('@include/hearth');

const programCards = new ContentType({
  name: 'program-cards',
  pluralDisplayName: 'Home: Program Cards',
});

programCards
  .createField({
    name: 'image',
    displayName: 'Image',
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
    name: 'title',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'subtitle',
    displayName: 'Subtitle',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'blurb',
    displayName: 'Blurb',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = programCards;
