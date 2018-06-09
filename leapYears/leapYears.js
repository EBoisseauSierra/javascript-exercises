var leapYears = function(yearToTest) {
    return yearToTest % 4 === 0 && !(yearToTest % 100 === 0 && yearToTest % 400 !== 0) ? true : false;
}

module.exports = leapYears
