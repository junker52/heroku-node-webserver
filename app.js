const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});
    let persona = {
        nombre: 'Juan',
        edad: 23,
        url: req.url
    };
    res.write(JSON.stringify(persona));
    res.end();
})
.listen(8080);

console.log('Escuchando a 8080');