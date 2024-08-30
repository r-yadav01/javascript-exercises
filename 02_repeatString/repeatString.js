const repeatString = function(text, times) {
    let repeat = times;
    let result = '';
    while (repeat > 0) {
        result += text;
        repeat--;
    }
    if (times < 0) return 'ERROR';
    return result;
};

// console.log(repeatString('bye', 0));

// Do not edit below this line
module.exports = repeatString;
