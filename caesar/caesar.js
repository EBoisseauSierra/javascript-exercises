var caesar = function(stringToEncrypt, cipherShift) {
    let encryptedString = '';
    for (let index = 0; index < stringToEncrypt.length; index++) {
        // transform negative shift into positive one, as it otherwise messes with wraping
        if (cipherShift < 0) cipherShift = 26 + (cipherShift % 25);
        // if character is lowerCase
        if (stringToEncrypt.charCodeAt(index) >= 97 && stringToEncrypt.charCodeAt(index) <= 122) {
            encryptedString += String.fromCharCode((stringToEncrypt.charCodeAt(index) - 97 + cipherShift) % 26 + 97);
        } else if (stringToEncrypt.charCodeAt(index) >= 65 && stringToEncrypt.charCodeAt(index) <= 90) { // if character is UpperCase
            encryptedString += String.fromCharCode((stringToEncrypt.charCodeAt(index) - 65 + cipherShift) % 26 + 65);
        } else { // every other character
            encryptedString += String.fromCharCode(stringToEncrypt.charCodeAt(index));
        }
    }
    return encryptedString
}

module.exports = caesar
