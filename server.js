const express = require('express')
const app = express()
const hbs = require('hbs');

//Servir pagina estatica
app.use(express.static( __dirname +'/public'));

//Express Engine
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

//Express Rendering Views
app.get('/', function (req, res) {

    res.render('home',{name: 'Ricard', title: "Home Page"});
})

app.get('/about', function (req, res) {

    res.render('about',{title: "About Page"});
})



//Express sending JSON
app.get('/hola', function (req, res) {
    let persona = {
        nombre: 'Juan',
        edad: 23,
        url: req.url
    };
    res.send(persona);
})

app.listen(3000, () => {
    console.log('Listen to port 3000');
})