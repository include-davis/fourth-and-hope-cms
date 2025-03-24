const { ContentType, FieldType } = require('@include/hearth');

const buttonLinks = new ContentType({
  name: 'buttons',
  pluralDisplayName: 'Button Links',
});

buttonLinks
  .createField({
    name: 'name',
    displayName: 'Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'link',
    displayName: 'Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = buttonLinks;
