const express = require('express');
const mongoose = require('./configs/mongo_connection');
const app = express();
const port = process.env.port || 3000;
const routes = require('./routes');

app.listen(port, () => {
    console.log("* Servidor iniciado na porta " + port + ".");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);