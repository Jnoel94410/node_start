var http = require('http');

var server = http.createServer(function(req, res) { 
    res.writeHead(200);
    res.end('Salut tout le monde');
});

server.on('close', function() {
    console.log("bye bye!");
});

server.listen(8080);
server.close();

// var http = require('http');
// var url = require('url');
// var querystring = require('querystring');

// var server = http.createServer(function(req, res) {
//     var page = url.parse(req.url).pathname;
//     var params = querystring.parse(url.parse(req.url).query);
//     console.log(page);
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     if ('prenom' in params && 'nom' in params) {
//         res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
//     }
//     else { 
//         res.write('Vous devez bien avoir un prénom et un nom');
//     }
//     res.end();
// });
// server.listen(8080);

// var server = http.createServer(function(req, res) {
//    res.writeHead(200, {'Content-Type': "text/html"});
//    res.end('<p>Voici un paragraphe <strong>HTML</strong></p>');
// });
// server.listen(8080);

// Le code en dessous fonctionne aussi :

// var instructionsNouveauVisiteur = function(req, res) {
//    res.writeHead(200);
//    res.end('Salut tout le monde !');
// }

// var server = http.createServer(instructionNouveauVisiteur);
