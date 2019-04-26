/* 
    Arquivo de exemplo.
    Ao utilizar o projeto, insira corretamente a url de conexão com o banco de dados
    e renomeie este arquivo para "mongo_connection.js".
*/

const mongoose = require('mongoose');
mongoose.connect('URL DO BANCO DE DADOS AQUI');

module.exports = mongoose;