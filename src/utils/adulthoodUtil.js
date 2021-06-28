const moment = require('moment');
const constants = require('./constants');

module.exports = (bornMonth, bornYear) => {

    const currentMonth = moment().month();
    const currentYear = moment().year();

    const yearsOldByYear = currentYear - bornYear;

    if (yearsOldByYear > constants.adulthood) {
        return true;
    }

    if (yearsOldByYear == constants.adulthood) {
        if (currentMonth > bornMonth) {
            return true;
        }
    }
}