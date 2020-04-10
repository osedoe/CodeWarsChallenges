export function checkPalindrome(str :string) {
    let rev = str.split("").reverse().join("");
    return (rev == str);
}