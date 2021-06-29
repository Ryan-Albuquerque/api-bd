const moment = require('moment');
const constants = require('./constants');

module.exports = (bornDate) => {

    const currentDay = moment().date();
    const currentMonth = moment().month();
    const currentYear = moment().year();

    const bornYear = moment(bornDate).year();
    const bornMonth = moment(bornDate).month()+1;
    const bornDay = moment(bornDate).date();

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