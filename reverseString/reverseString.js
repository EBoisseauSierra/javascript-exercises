var reverseString = function(stringToReverse) {
    if (stringToReverse.length > 0) {
        return stringToReverse.slice(-1) + reverseString(stringToReverse.slice(0,-1));
    } else {
        return '';
    }
}

module.exports = reverseString
