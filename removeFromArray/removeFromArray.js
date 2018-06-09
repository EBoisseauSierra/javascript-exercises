var removeFromArray = function(arrayToRemoveFrom, ...elementsToRemove) {
    for (let elementToRemove of elementsToRemove) {
        // ensure all instances of elementToRemove are removed
        while (arrayToRemoveFrom.indexOf(elementToRemove) !== -1) {
            arrayToRemoveFrom.splice(arrayToRemoveFrom.indexOf(elementToRemove),    1);
        }
    }
    return arrayToRemoveFrom;
}

module.exports = removeFromArray
