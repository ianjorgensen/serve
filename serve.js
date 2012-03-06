var server = require('router').create();

server.all('*', function(request, response) {
	console.log(request.headers, request.url, request.method);
	response.writeHead(200);
	response.end('end');
});

var port = process.argv[2] || 3000;

server.listen(port);

console.log('server running on port',port);

process.on('uncaughtException', function(err) { console.log(err.stack) });