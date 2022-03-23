const mongoose = require('mongoose');
const env = require('dotenv')

env.config();

var mongoConnectionURI = process.env.MONGO_CONNECTION_URI || 'mongodb://localhost:27017/NUSS-Tic-Tac-Toe';

mongoose.connect(mongoConnectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log('Connected to MongoDb!');
} );

const dbConnection = mongoose;

module.exports = dbConnection;