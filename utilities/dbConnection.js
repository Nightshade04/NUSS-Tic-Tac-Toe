const mongoose = require('mongoose');
const env = require('dotenv')

env.config();

var mongoConnectionURI = process.env.MONGO_CONNECTION_URI || 'localhost:27017';

mongoose.connect(mongoConnectionURI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const dbConnection = mongoose.connection;

module.exports = dbConnection;