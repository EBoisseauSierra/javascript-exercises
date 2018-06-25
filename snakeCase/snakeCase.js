let snakeCase = function(text) {
    arr = text.split('').map(char => {
        // console.log('> '+char);
        if (/[a-zA-z]/.test(char)) {
            return char.toLowerCase();
        }
        if (/[ -]/.test(char)){
            return '_'
        }
        return '';
    })
    return arr.join('');
}

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

module.exports = snakeCase
