const emailService = require('../services/emailService');
const userService = require('../services/userService');

let userController = {};


const _listUser = async (req,res, next) => {
    try {
        const users = await userService.listUsers();

        return res.json({
            users
        })
    } catch (error) {
        next(error)
    }
}

const _getUser = async (req,res,next) => {
    try {
        const user = await userService.getUserById(req.params.id)

        return res.json({
            user
        })
    } catch (error) {
        next(error)
    }
}

const _createUser = async (req,res,next) => {
    try {
        const created = await userService.createUser(req.body)

        emailService.sendEmail(created);

        return res.status(201).json({
            message: 'Criado com sucesso',
            created
        })
    } catch (error) {
        next(error)
    }
}

const _updateUser = async (req,res) => {
    try {
        const updated = await userService.updateUser(req.params.id, req.body)

        return res.json({
            message: 'Atualizado com sucesso',
            updated
        })
    } catch (error) {
        next(error)
    }
}

const _deleteUser = async (req,res) => {
    try {
        const deleted = await userService.deleteUser(req.params.id)

        return res.json({
            message: 'Deletado com sucesso',
            deleted
        })
    } catch (error) {
        next(error)
    }
}


userController.list = _listUser;
userController.get = _getUser;
userController.create = _createUser;
userController.update = _updateUser;
userController.delete = _deleteUser;


module.exports= userController;