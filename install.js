var path = require('path');
var fs = require('fs');

var staticFolderPath = 'subsystems/webui/static';
var vaguePath = path.relative(path.join(__dirname, staticFolderPath), require.resolve('vague-time'));
var newVaguePath = path.join(staticFolderPath, 'vagueTime.js');
if (!fs.existsSync(newVaguePath)) {
    fs.symlinkSync(vaguePath, newVaguePath);
}