const sumAll = function(fromInt, toInt) {
    let sum = 0;

    // if (typeof fromInt === 'number' && typeof toInt === 'number') {
    //     if (fromInt < 0 || toInt < 0) return 'ERROR';
    //     else if (Math.floor(fromInt) !== fromInt || Math.floor(toInt) !== toInt) return 'ERROR';

    //     if (fromInt > toInt) {
    //         let temp = fromInt;
    //         fromInt = toInt;
    //         toInt = temp;
    //     }

    //     for (let i = fromInt; i <= toInt; i++) {
    //         sum += i;
    //     }
    // }
    // else {
    //     return 'ERROR';
    // }

    if (!Number.isInteger(fromInt) || !Number.isInteger(toInt)) return "ERROR";
    if (fromInt < 0 || toInt < 0) return "ERROR";
    if (fromInt > toInt) {
        let temp = fromInt;
        fromInt = toInt;
        toInt = temp;
    }

    for (let i = fromInt; i <= toInt; i++) {
        sum += i;
    }
    return sum;
};

// console.log(sumAll(1,5));

// why is this 'false' fromInt instanceof Number
// but this is 'number' by typeof fromInt

// Do not edit below this line
module.exports = sumAll;
