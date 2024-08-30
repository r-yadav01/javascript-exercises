const removeFromArray = function(...args) {
    let arr = args.shift();
    let newArr = [];

    // for (let i = 0; i < args.length; i++) {
    //     for (let j = 0; j < arr.length;) {
    //         if (arr[j] === args[i]) {
    //             arr.splice(j,1);
    //         }
    //         else {
    //             ++j;
    //         }
    //     }
    // }

    arr.forEach(element => {
        if (!args.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
