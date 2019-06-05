const express = require('express');
const routes = express.Router();
const multer = require("multer");
const path = require("path");
const multerConfig = require("./configs/multer");
const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");

routes.get('/', (req, res)=>{
    return res.sendFile(path.resolve(__dirname, 'index.html'));
});

routes.get('/wakemydyno.txt', (req, res)=>{
    return res.sendFile(path.resolve(__dirname, '..', 'wakemydyno.txt'));
});

// Skaibox CRUD
routes.post('/skaibox', BoxController.store);
routes.get('/skaibox/:id', BoxController.show)

// File management CRUD
routes.post('/skaibox/:id/file', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;