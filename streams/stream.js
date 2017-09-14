var fs = require('fs');
var source = fs.readFileSync('../buffers/logo_new.png');
fs.writeFileSync('sm.png',source);

