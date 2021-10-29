//Grabs HTTP server to listen to server and give respones back
const http = require('http');
//Grabs Web Framework Express
const express = require('express');

const app = express();

app.use((req, res, next) => {

})

const server = http.createServer(app);

server.listen(3000);