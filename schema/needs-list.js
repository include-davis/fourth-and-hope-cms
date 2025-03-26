const { ContentType, FieldType } = require('@include/hearth');

const needsList = new ContentType({
  name: 'needs-list',
  pluralDisplayName: 'Get Involved: Needs List',
});

needsList
  .createField({
    name: 'type',
    displayName: 'Type: new or used',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'item',
    displayName: 'Item Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = needsList;
