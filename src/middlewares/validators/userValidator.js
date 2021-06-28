const userService = require('../../services/userService');
const validatorService = require('../../services/validatorService');

const moment = require('moment');
const cepService = require('../../services/cepService');
const adulthoodUtil = require('../../utils/adulthoodUtil');

let userValidator = {};

const _getUser = async (req, res, next) =>{

    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            message: 'Id não informado'
        })
    }

    if(!userService.isValidObjectId(id)){
        return res.status(400).json({
            message: "Id não é válido"
        })
    }

    if(!await userService.getUserById(id)){
        return res.status(400).json({
            message: "Usuário não existe no banco de dados"
        })
    }

    next();
}

const _createUser = async (req,res,next) => {
    const {name, email, phoneContacts, cep, bornDate} = req.body;

    if(!name){
        return res.status(400).json({
            message: "Nome não informado"
        })
    }

    if(name && name.length < 3){
        return res.status(400).json({
            message: "Nome deve ter mais que 3 caracteres"
        })
    }

    if(!email){
        return res.status(400).json({
            message: "Email não informado"
        })
    }

    if(await userService.getUserByEmail(email)){
        return res.status(400).json({
            message: "Email já cadastrado."
        })
    }

    if(!validatorService.verifyEmail(email)){
        return res.status(400).json({
            message: "Email inválido"
        })
    }

    if(!phoneContacts || typeof phoneContacts !== 'object'){
        return res.status(400).json({
            message: "Contatos não informado"
        })
    }

    if(phoneContacts.length < 1){
        return res.status(400).json({
            message: "Deve haver pelo menos um contato"
        })
    }
    
    if(!cep){
        return res.status(400).json({
            message: "CEP não informado"
        })
    }

    if(cep && cep.length < 8){
        return res.status(400).json({
            message: "CEP deve conter 8 caracteres"
        })
    }

    if (!await cepService.verifyValidCep(cep)) {
        return res.status(400).json({
            message: "CEP não é válido ou está fora do Amazonas"
        })
    }
    if(!bornDate){
        return res.status(400).json({
            message: "Data de nascimento não informado"
        })
    }
    
    if( typeof moment(bornDate).date() !== 'number' || typeof moment(bornDate).month() !== 'number' || typeof moment(bornDate).year() !== 'number'){
        return res.status(400).json({
            message: "Data de nascimento não é válida"
        })
    }

    if(!adulthoodUtil(moment(bornDate).month(), moment(bornDate).year())){
        return res.status(400).json({
            message: "Você deve ser maior de 18 anos para efeturar cadastro"
        })
    }

    next()
}

const _updateUser = async (req,res,next) =>{
    const {name, email, phoneContacts, cep, bornDate} = req.body;
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            message: 'Id não informado'
        })
    }

    if(!userService.isValidObjectId(id)){
        return res.status(400).json({
            message: "Id não é válido"
        })
    }

    if(!await userService.getUserById(id)){
        return res.status(400).json({
            message: "Usuário não existe no banco de dados"
        })
    }

    if(name && name.length < 3){
        return res.status(400).json({
            message: "Nome insuficiente"
        })
    }

    if(email && email.length < 5){
        return res.status(400).json({
            message: "Email deve ter mais que 5 caracteres"
        })
    }

    if(email && !validatorService.verifyEmail(email)){
        return res.status(400).json({
            message: "Email inválido"
        })
    }

    if(phoneContacts && phoneContacts.length < 1){
        return res.status(400).json({
            message: "Contatos não informado"
        })
    }

    if(cep && cep.length<8){
        return res.status(400).json({
            message: "CEP não é válido"
        })
    }

    if (cep && !await cepService.verifyValidCep(cep)) {
        return res.status(400).json({
            message: "CEP não é válido ou está fora do Amazonas"
        })
    }

    if(bornDate && (typeof moment(bornDate).date() !== 'number' || typeof moment(bornDate).month() !== 'number' || typeof moment(bornDate).year() !== 'number')){
        return res.status(400).json({
            message: "Data de nascimento não é válida"
        })
    }

    if(bornDate && !adulthoodUtil(moment(bornDate).month(), moment(bornDate).year())){
        return res.status(400).json({
            message: "Você deve ser maior de 18 anos para efeturar cadastro"
        })
    }
    

    next()
}

const _deleteUser = async (req,res,next) =>{
    const {id} = req.params;
    
    if(!id){
        return res.status(400).json({
            message: 'Id não informado'
        })
    }

    if(!userService.isValidObjectId(id)){
        return res.status(400).json({
            message: "Id não é válido"
        })
    }

    if(!await userService.getUserById(id)){
        return res.status(400).json({
            message: "Usuário não existe no banco de dados"
        })
    }

    next()
}


userValidator.get = _getUser;
userValidator.create = _createUser;
userValidator.update = _updateUser;
userValidator.delete = _deleteUser;

module.exports = userValidator;