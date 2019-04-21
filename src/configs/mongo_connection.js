const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://skai-api:skai1234@skaibox-ld9xc.mongodb.net/test?retryWrites=true');

module.exports = mongoose;