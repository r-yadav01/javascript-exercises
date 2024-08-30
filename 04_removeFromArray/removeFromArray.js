const removeFromArray = function(...args) {
    let arr = args.shift();

    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < arr.length;) {
            if (arr[j] === args[i]) {
                arr.splice(j,1);
            }
            else {
                ++j;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
