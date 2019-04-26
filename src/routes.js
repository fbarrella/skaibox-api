const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    return res.send("<h2 style=\"font-family: sans-serif\">API is running!!</h2>");
});

routes.get('/teste', (req, res)=>{
    return res.send("Hello World!");
});

module.exports = routes;