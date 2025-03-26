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
    name: 'description',
    displayName: 'Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = storyCards;
