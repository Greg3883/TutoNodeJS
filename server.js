//MES MODULES
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;

//CREATION SERVEUR
var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/html"});
    if('prenom' in params && 'nom' in params) {
        res.end('<p>Bonjour <strong>'+params['prenom']+' '+params['nom']+'</strong> !</p>');
    } else {
        res.end('<p>Qui est tu ?</p>');
    }
});


//VARIABLES
var jeu = new EventEmitter();


//EVENEMENTS
server.on('close', function() {
    console.log('Au revoir.');
});

jeu.on('gameover', function(message) {
    console.log(message);
});


//ACTIONS
jeu.emit('gameover', 'Vous avez perdu !');
server.listen(8080);

