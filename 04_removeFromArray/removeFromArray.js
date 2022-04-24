// ...sRemoveArgs = rest_parameters
const removeFromArray = function(sArray, ...sRemoveArgs) {
    const userArray = new Set(Array.from(sRemoveArgs));
    const newArray = sArray.filter(x => !userArray.has(x));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
