const { ContentType, FieldType } = require('@include/hearth');

const programCards = new ContentType({
  name: 'stats',
  pluralDisplayName: 'Statistics',
});

programCards
  .createField({
    name: 'icon',
    displayName: 'Icon',
    type: FieldType.MEDIA_LIST,
    required: false,
  })
  .createField({
    name: 'number',
    displayName: 'Number',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'donation-goal',
    displayName: 'Donation Goal',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'recommended-donation',
    displayName: 'Recommended Donation',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = programCards;
