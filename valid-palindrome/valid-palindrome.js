/**
 * @param {string} s
 * @return {boolean}
 */
    const isPalindrome = (string) => {
        string = string.toLowerCase();
        let cleanString = [];
        for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i)
            if (isLetter(charCode)) {
                cleanString.push(string[i])
            }
        }
        let start = 0;
        let end = cleanString.length - 1;
        while (start < end) {
            if (cleanString[start] !== cleanString[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

var isLetter = function(code) {
    if (((code >= 48) && (code <= 57))  // numbers
    || ((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase
        return true
    }
    else {
        return false
    }
}