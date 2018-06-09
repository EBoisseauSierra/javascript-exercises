var sumAll = function(fromNumber, toNumber) {
    // ensure both entries are positive integers
    if ( !(Number.isInteger(fromNumber) && fromNumber >= 0) || !(Number.isInteger(toNumber) && toNumber >= 0)) return 'ERROR';
    let lowerBoundary = Math.min(fromNumber, toNumber);
    let higherBoundary = Math.max(fromNumber, toNumber);
    let sumOfNumberBetweenLowAndHigh = 0;
    for (let i = lowerBoundary; i <= higherBoundary; i++) {
        sumOfNumberBetweenLowAndHigh += i;
    }
    return sumOfNumberBetweenLowAndHigh;
}

module.exports = sumAll
