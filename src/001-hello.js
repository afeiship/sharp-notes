const sharp = require('sharp');

// will create
sharp('__tests__/input.png')
  .resize(300, 200)
  .toFile('__tests__/output.jpg', function(err) {
    console.log(err);
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });
