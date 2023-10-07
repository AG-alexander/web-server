require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT;


//   handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });

app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.send('Hello World, guapo');
// });

app.get('/', function (req, res) {
    //   res.send('Hello World, guapo');
    res.render('home', {
        nombre: 'Alex el magnifico',
        titulo: 'Curso de node'
    });
});

app.get('/generic', function (req, res) {
    //   res.send('Hello World, guapo');
    res.render('generic', {
        nombre: 'Alex el magnifico',
        titulo: 'Curso de node'
    });
});

// app.get('/generic', function (req, res) {
//     res.sendFile(__dirname + '/public/generic.html');
// });

app.get('/elements', function (req, res) {
    //   res.send('Hello World, guapo');
    res.render('elements', {
        nombre: 'Alex el magnifico',
        titulo: 'Curso de node'
    });
});

// app.get('/elements', function (req, res) {
//     res.sendFile(__dirname + '/public/elements.html');
// });

app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/hola-mundo', function (req, res) {
    res.send('Hello World, querido programador!');
});

//   app.get('*', function (req, res) {
//     res.send('guapo, esa ruta no existe');
//   });

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});