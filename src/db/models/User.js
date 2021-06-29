const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phoneContacts:{
        type: Array,
        required: true
    },
    cep:{
        type: String,
        required: true
    },
    bornDate:{
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;