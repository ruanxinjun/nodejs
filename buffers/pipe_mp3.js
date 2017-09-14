var fs = require('fs');
fs.createReadStream('1_white_clip.mp4').pipe(fs.createWriteStream('1.mp4'));