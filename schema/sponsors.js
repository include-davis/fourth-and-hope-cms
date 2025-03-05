const { ContentType, FieldType } = require('@include/hearth');

const programCards = new ContentType({
  name: 'Sponsors',
  pluralDisplayName: 'Events: Sponsors',
});

programCards.createField({
  name: 'icon',
  displayName: 'Icon',
  type: FieldType.MEDIA_LIST,
  required: true,
});

module.exports = programCards;
