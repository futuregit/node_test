//Grabs HTTP server to listen to server and give respones back
const http = require('http');
//Grabs Web Framework Express
const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');

const userRoutes = require('./routes/user')

app.use(express.urlencoded({ extended: true }));


//Middleware

app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000);