function checkPalindrome(inputString) {

    let str = inputString;
    let rev = str.split("").reverse().join("");
    console.log(`${str} \n${rev}`);
    if (rev == str) return true;
    else return false;
}

checkPalindrome("abac");