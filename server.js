//var connect = require('connect');
var port = 9900;
//connect.createServer(connect.static(__dirname ) ).listen(port);
//console.log('Server running on port ' + port);


var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(port);
console.log('Server running on port ' + port);