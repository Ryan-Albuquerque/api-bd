const moment = require('moment');
const constants = require('./constants');

module.exports = (bornDay, bornMonth, bornYear) => {

    const currentDay = moment().date();
    const currentMonth = moment().month();
    const currentYear = moment().year();

    const yearsOldByYear = currentYear - bornYear;

    if (yearsOldByYear > constants.adulthood) {
        return true;
    }

    if (yearsOldByYear == constants.adulthood) {
        if (currentMonth > bornMonth) {
            if(currentDay >= bornDay)
                return true;
        }
    }
}