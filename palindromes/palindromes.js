var palindromes = function(textToTest) {
    arrayToTest = textToTest.toLowerCase().split('').filter(character =>{
        if (character.charCodeAt(0) >= "a".charCodeAt(0) && character.charCodeAt(0) <= "z".charCodeAt(0)) return true;
    });
    for (let i=0, len = arrayToTest.length, half = Math.floor(len / 2) + 1; i < half; i++){
        if (arrayToTest[i] !== arrayToTest[len-(i+1)]) return false;
    }
    return true;
}

module.exports = palindromes
