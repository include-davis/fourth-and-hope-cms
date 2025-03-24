const { ContentType, FieldType } = require('@include/hearth');

const programCards = new ContentType({
  name: 'careers',
  pluralDisplayName: 'Get Involved: Careers',
});

programCards
  .createField({
    name: 'position',
    displayName: 'Position',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'link',
    displayName: 'Link to Job',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = programCards;
