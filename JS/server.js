var http = require("http");

http.createServer(function(req,res) {
	res.writeHead(200);
	res.end('Hello Http');
}).listen(8888);

