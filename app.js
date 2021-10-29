//Grabs HTTP server to listen to server and give respones back
const http = require('http');
//Grabs Web Framework Express
const express = require('express');

const app = express();

//Middleware
app.use('/', (req, res, next) => {
    console.log('This always run')
    next();
})

app.use('/add-product',(req, res, next) => {
    console.log("Inside the app.js again");
    res.send('<form action="/product"><input type="text" name="title"><button type="submit">Add</button></form>')
});

app.use('/products', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    console.log("Inside the app.js again");
    res.send('<h1>Hello everyone</h1>')
});

const server = http.createServer(app);

server.listen(3000);