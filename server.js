var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/html"});
    if('prenom' in params && 'nom' in params) {
        res.end('<p>Bonjour <strong>'+params['prenom']+' '+params['nom']+'</strong> !</p>');
    } else {
        res.end('<p>Qui est tu ?</p>');

    }
});

server.listen(8080);