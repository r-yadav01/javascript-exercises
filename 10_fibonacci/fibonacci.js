const fibonacci = function(index) {
    let sequence = [0,1];
    if (index < 0) return "OOPS";
    else if (index == 0) return sequence[0];
    for (let i = 0; i < index-1; i++) {
        let next = sequence[i] + sequence[i+1];
        sequence.push(next);
    }
    sequence.shift();
    // console.log(sequence);
    return sequence.pop();
};

console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
