const findTheOldest = function(objArr) {
    let oldestAge = objArr.reduce((acc, curr) => {
        let currYear = new Date().getFullYear();

        if (acc.age == undefined) {
            if (acc.yearOfDeath == undefined) {
                acc.age = currYear - acc.yearOfBirth;
            }
            else {
                acc.age = acc.yearOfDeath - acc.yearOfBirth;
            }
        }
        
        if (curr.yearOfDeath !== undefined) {
            curr.age = curr.yearOfDeath - curr.yearOfBirth;
        }
        else {
            curr.age = currYear - curr.yearOfBirth;
        }
        if (curr.age > acc.age) 
            return curr;
        else return acc;
    })
    return oldestAge;

};

// Do not edit below this line
module.exports = findTheOldest;
