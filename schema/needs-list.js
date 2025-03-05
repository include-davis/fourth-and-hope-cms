const { ContentType, FieldType } = require('@include/hearth');

const programCards = new ContentType({
  name: 'needs-list',
  pluralDisplayName: 'Get Involved: Needs List',
});

programCards
  .createField({
    name: 'new',
    displayName: 'Brand New',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'used',
    displayName: 'Lightly Used',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = programCards;
