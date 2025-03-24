const { ContentType, FieldType } = require('@include/hearth');

const needsList = new ContentType({
  name: 'needs-list',
  pluralDisplayName: 'Get Involved: Needs List',
});

needsList
  .createField({
    name: 'new',
    displayName: 'Brand New',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'used',
    displayName: 'Lightly Used',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = needsList;
