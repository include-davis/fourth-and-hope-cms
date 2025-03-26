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
    name: 'image_alt',
    displayName: 'Icon Alternative Text',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'type',
    displayName: 'Type: impact or numbers or donation',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'number',
    displayName: 'Number',
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
    name: 'donation_goal',
    displayName: 'Donation Goal',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'donation_current',
    displayName: 'Current Donation',
    type: FieldType.SHORT_TEXT,
    required: false,
  })
  .createField({
    name: 'recommended_donation',
    displayName: 'Recommended Donation',
    type: FieldType.SHORT_TEXT,
    required: false,
  });

module.exports = stats;
