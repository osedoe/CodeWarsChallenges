function checkPalindrome(inputString) {
    let arr = inputString.split("");
    let rev = inputString.split("").reverse();
    console.log(arr);
    console.log(rev);
    arr.equals(rev);
}

checkPalindrome("abaa");