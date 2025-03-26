const { ContentType, FieldType } = require('@include/hearth');

const sponsors = new ContentType({
  name: 'Sponsors',
  pluralDisplayName: 'Events: Sponsors',
});

sponsors.createField({
  name: 'images',
  displayName: 'Images',
  type: FieldType.MEDIA_LIST,
  required: true,
});

module.exports = sponsors;
