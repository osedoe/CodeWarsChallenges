const checkPalindrome = str => {
    let rev = str.split("").reverse().join("");
    return (rev == str) ? true : false;
};

module.exports = checkPalindrome;