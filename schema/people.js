const { ContentType, FieldType } = require('@include/hearth');

const people = new ContentType({
  name: 'people',
  pluralDisplayName: 'About: People',
});

people
  .createField({
    name: 'main_image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: false,
  })
  .createField({
    name: 'name',
    displayName: 'Name',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'position',
    displayName: 'Position',
    type: FieldType.LONG_TEXT,
    required: false,
  })
  .createField({
    name: 'type',
    displayName: 'Type: Trustee or Exec',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = people;
