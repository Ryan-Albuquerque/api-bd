const validator = require('validator');

let validatorService = {};

const _verifyEmail = (email)=>{
    return validator.isEmail(email);
};


validatorService.verifyEmail = _verifyEmail;

module.exports = validatorService;