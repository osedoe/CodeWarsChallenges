import { checkPalindrome } from "../src/Palindrome/palindrome";

describe("Check Palindrome", () => {
    describe("should return either true or false depending if the passed string is a palindrome", () => {
        it("should return false since 'abac' it's NOT a palindrome", () => {
            expect(checkPalindrome("abac")).toBeFalsy();
        });
        it("should return true because 'aba' it's a palindrome", () => {
            expect(checkPalindrome("aba")).toBeTruthy();
        });
        it("should return true because 'abbcbba' it's a palidrome", () => {
            expect(checkPalindrome("abbcbba")).toBeTruthy();
        });
        it("should return false since 'acddc' it's NOT a palindrome", () => {
            expect(checkPalindrome("acddc")).toBeFalsy();
        });
    });
});