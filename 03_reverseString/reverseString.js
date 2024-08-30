const reverseString = function(text) {
    let reverseString = '';
    const textArray = [];
    for (let letter of text) {
        textArray.push(letter);
    }

    for (let i = textArray.length-1; i >= 0; i--) {
        reverseString += textArray[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
