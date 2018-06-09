var repeatString = function(stringToRepeat, numberOfRepetition) {
    if (numberOfRepetition < 0) return 'ERROR';
    let stringRepeated = '';
    for (let i = 0; i < numberOfRepetition; i++) {
        stringRepeated += stringToRepeat;
    }
    return stringRepeated;
}

module.exports = repeatString
