const { ContentType, FieldType } = require('@include/hearth');

const stats = new ContentType({
  name: 'stats',
  pluralDisplayName: 'Statistics',
});

stats
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
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'donation-goal',
    displayName: 'Donation Goal',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'recommended-donation',
    displayName: 'Recommended Donation',
    type: FieldType.SHORT_TEXT,
    required: false,
  });

module.exports = stats;
