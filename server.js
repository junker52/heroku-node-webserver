const express = require('express')
const app = express()

//Servir pagina estatica
app.use(express.static( __dirname+'/public'));

//Express Engine
app.set('view engine', 'hbs');

app.get('/', function (req, res) {

    //res.send(persona);
    res.render('home',{name: 'Ricard'});
})

 
app.get('/hola', function (req, res) {
    res.send('Hola Mundo');
})

app.listen(3000, () => {
    console.log('Listen to port 3000');
})