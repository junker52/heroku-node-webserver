const express = require('express')
const app = express()

//Servir pagina estatica
app.use(express.static( __dirname+'/public'));

app.get('/', function (req, res) {

    let persona = {
        nombre: 'Juan',
        edad: 23,
        url: req.url
    };
    res.send(persona);
})

 
app.get('/hola', function (req, res) {
    res.send('Hola Mundo');
})

app.listen(3000, () => {
    console.log('Listen to port 3000');
})