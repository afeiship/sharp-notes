const sharp = require('sharp');

// will create
sharp('__tests__/input.png')
  .composite([{ input: '__tests__/envs/prod_s.png', gravity: 'southeast' }])
  .toFile('__tests__/output1.jpg', function (err) {
    console.log(err);
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });


sharp('__tests__/input.png')
  .composite([{ input: '__tests__/envs/beta_s.png', gravity: 'southeast' }])
  .toFile('__tests__/output2.jpg', function (err) {
    console.log(err);
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });


sharp('__tests__/input.png')
  .composite([{ input: '__tests__/envs/stag_s.png', gravity: 'southeast' }])
  .toFile('__tests__/output3.jpg', function (err) {
    console.log(err);
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });

