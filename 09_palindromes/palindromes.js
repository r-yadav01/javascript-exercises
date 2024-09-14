const palindromes = function (str) {
    let arr = str.split('');
    let strArr = arr.filter((charac) => {
        // charac = charac.toLowerCase();
        const charCode = charac.charCodeAt(0);
        return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57);
    })
    
    let leng = strArr.length;
    if (leng % 2 !== 0) {
        for (let i = 0; i < Math.ceil(leng/2); i++) {
            if (strArr[i].toLowerCase() !== strArr[leng-1-i].toLowerCase()) return false;
        }
    }
    else {
        for (let i = 0; i < leng/2; i++) {
            if (strArr[i].toLowerCase() !== strArr[leng-1-i].toLowerCase()) return false; 
        }
    }
    return true;
};

// console.log(palindromes('rohanahor'));       
// palindromes('rohan');
// Do not edit below this line
module.exports = palindromes;
