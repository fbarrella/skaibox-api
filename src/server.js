const express = require('express');
const app = express();
const port = process.env.port || 3000;
const routes = require('./routes');

app.listen(port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);