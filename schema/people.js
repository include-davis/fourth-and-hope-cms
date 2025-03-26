const { ContentType, FieldType } = require('@include/hearth');

const people = new ContentType({
  name: 'people',
  pluralDisplayName: 'About: People',
});

people
  .createField({
    name: 'image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: false,
  })
  .createField({
    name: 'image_alt',
    displayName: 'Image Alternative Text',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'name',
    displayName: 'Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'type',
    displayName: 'Type: trustee or exec',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'position',
    displayName: 'Position',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'email',
    displayName: 'Email',
    type: FieldType.SHORT_TEXT,
    required: false,
  });

module.exports = people;
