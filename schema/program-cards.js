const { ContentType, FieldType } = require('@include/hearth');

const programCards = new ContentType({
  name: 'program-cards',
  pluralDisplayName: 'Home: Program Cards',
});

programCards
  .createField({
    name: 'main_image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: false,
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
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.SHORT_TEXT,
    required: false,
  });

module.exports = programCards;
