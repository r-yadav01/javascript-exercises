const getTheTitles = function(objArr) {
    let titleArr = [];
    objArr.forEach(obj => {
        titleArr.push(obj["title"]);
    });
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
