/******************
 *  Dependencies  *
 ******************/

var http = require('http');
var fs = require('fs');
var ini = require('ini');

/*******************
 *  Configuration  *
 *******************/

var config = ini.parse(fs.readFileSync('/etc/app/config.ini', 'utf-8'));

/***************
 *  Variables  *
 ***************/

var firstName   = config.default.first_name;
var lastName    = config.default.last_name;
var gravatarUrl = config.default.gravatar_url;
var port        = config.default.port;
var greeting    = config.default.page_greeting;

/*************
 *  Content  *
 *************/

var content = `<html><head><title>Demo 4</title></head><body>
	<h1>${greeting}</h1>
	<h3><i>${firstName} ${lastName}</i></h3>
	<img src="${gravatarUrl}">
</body></html>`;

/************
 *  Server  *
 ************/

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(content);
}).listen(port);

console.log('Server running on port ' + port);