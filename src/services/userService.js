const mongoose = require('mongoose')
const User = require('../db/models/User');

let userService = {}

const _listUsers = async () => {
    const users = await User.find();
    return users;
}

const _createUser = async (user) =>{
    const create = await User.create(user);
    return create;
}

const _getUserById = async (id) =>{
    const user = await User.findOne({_id: id})
    return user
}

const _getUserByEmail = async (email) =>{
    const user = await User.findOne({email: email})
    return user
}

const _isValidMongooseId = (id) =>{
    return mongoose.isValidObjectId(id);
}

const _updateUser = async (id, body) =>{
    const updated = await User.updateOne({_id: id}, body);
    return updated;
}

const _deleteUser = async (id) =>{
    const deleted = await User.findOneAndDelete({_id: id});
    return deleted;
}

userService.listUsers = _listUsers;
userService.createUser = _createUser;
userService.isValidObjectId = _isValidMongooseId;
userService.getUserById = _getUserById;
userService.getUserByEmail = _getUserByEmail;
userService.updateUser = _updateUser;
userService.deleteUser = _deleteUser;

module.exports = userService;