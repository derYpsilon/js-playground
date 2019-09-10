/**
 * Является ли строка палиндромом
 * @param  {string}  value
 * @return {boolean}
 */
function isPalindrome(value) {
    let tempLine = value.replace(/\s{1,}/g, '').toLowerCase()
    if (tempLine === tempLine.split('').reverse().join('')) {
        return true
    }
    return false
}

console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama'));// true