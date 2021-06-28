const axios = require('axios');
const constants = require('../utils/constants');

let cepService = {};

const _verifyValidCep = async (cep) => {
    try {
        const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`)

        return response.data.uf == constants.uf;
    } catch (error) {
        return false;
    }
};


cepService.verifyValidCep = _verifyValidCep;

module.exports = cepService;