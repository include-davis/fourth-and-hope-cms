const { ContentType, FieldType } = require('@include/hearth');

const heroGallery = new ContentType({
  name: 'hero-gallery',
  pluralDisplayName: 'Home: Gallery Image',
});

heroGallery.createField({
  name: 'main_image',
  displayName: 'Image',
  type: FieldType.MEDIA_LIST,
  required: true,
});

module.exports = heroGallery;
