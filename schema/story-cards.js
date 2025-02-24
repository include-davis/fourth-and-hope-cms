const { ContentType, FieldType } = require('@include/hearth');

const storyCards = new ContentType({
  name: 'story-cards',
  pluralDisplayName: 'Home: Our Stories',
});

storyCards
  .createField({
    name: 'main_image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'title',
    displayName: 'Title',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = storyCards;
