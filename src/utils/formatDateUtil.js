module.exports = (date) =>{
    let regex = /^\d{4}-\d{2}-\d{2}$/;

    return regex.test(date);
}