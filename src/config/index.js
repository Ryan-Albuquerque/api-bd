const dotenv = require('dotenv');

dotenv.config()

const version = process.env.VERSION;
var mongoUrl = '';

if(version == 'development'){
    mongoUrl = 'mongodb://localhost:27017/dev-bemol-digital'
}
else if(version == 'production'){
    mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.7hk4c.mongodb.net/users?retryWrites=true&w=majority`
}

module.exports = {
    PORT: process.env.PORT || 8080,
    MONGO_URL: mongoUrl,
    TRANSPORTER_EMAIL: process.env.TRANSPORTER_EMAIL,
    TRANSPORTER_PASSWORD: process.env.TRANSPORTER_PASSWORD
}