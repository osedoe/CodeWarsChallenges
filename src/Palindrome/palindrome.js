module.exports = checkPalindrome = str => {
    let rev = str.split("").reverse().join("");
    return (rev == str) ? true : false;
};

checkPalindrome("abac");