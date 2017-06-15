/******************
 *  Dependencies  *
 ******************/

var https = require('https');
var fs = require('fs');
var ini = require('ini');
var crypto = require('crypto');

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

var content = `<html><head><title>Demo 5</title></head><body>
	<h1>${greeting}</h1>
	<h3><i>${firstName} ${lastName}</i></h3>
	<img src="${gravatarUrl}">
</body></html>`;

/*********
 *  TLS  *
 *********/

var options = {
	key  : fs.readFileSync('/etc/app/tls/private.key'),
	cert : fs.readFileSync('/etc/app/tls/public.cert')
};

/************
 *  Server  *
 ************/

https.createServer(options, (req, res) => {
	res.writeHead(200);
	res.end(content);
}).listen(port);

// Lazily get md5 of public cert to prove it's changed (a fingerprint would be cooler)
var md5hash = crypto.createHash('md5').update(options.cert).digest("hex");

console.log('Server running on port ' + port);
console.log('Certificate MD5: ' + md5hash);