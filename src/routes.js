const express = require('express');
const routes = express.Router();
const multer = require("multer");
const multerConfig = require("./configs/multer");
const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");

routes.get('/', (req, res)=>{
    return res.send("<h2 style=\"font-family: sans-serif\">API is running!!</h2>");
});

// Skaibox CRUD
routes.post('/skaibox', BoxController.store);
routes.get('/skaibox/:id', BoxController.show);

// File management CRUD
routes.post('/skaibox/:id/file', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;