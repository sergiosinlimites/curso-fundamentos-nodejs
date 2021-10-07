const sharp = require('sharp');

sharp('original.webp')
    .resize(100)
    .toFile('resized.png');