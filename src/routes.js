const express = require('express');
const routes = express.Router();
const boxController = require("./controllers/BoxController");

routes.get('/', (req, res)=>{
    return res.send("<h2 style=\"font-family: sans-serif\">API is running!!</h2>");
});

routes.post('/skaibox', boxController.store);

module.exports = routes;