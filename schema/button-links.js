const { ContentType, FieldType } = require('@include/hearth');

const programCards = new ContentType({
  name: 'buttons',
  pluralDisplayName: 'Button Links',
});

programCards.createField({
  name: 'link',
  displayName: 'Link',
  type: FieldType.LONG_TEXT,
  required: true,
});

module.exports = programCards;
