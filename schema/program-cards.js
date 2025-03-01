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
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = programCards;
