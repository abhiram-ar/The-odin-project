const removeFromArray = function(arr, ...item) {
    return arr.filter(e => !item.includes(e))
};

// Do not edit below this line
module.exports = removeFromArray;
