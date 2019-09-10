/**
 * Проверка на сбалансированность фигурных скобкок
 * @param  {string}  input
 * @return {boolean}
 */
function isBalanced(input) {
    if (input.length === 0 || !(input[0] === '{' && input[input.length - 1] === '}')) {
        return false
    }
    const bracketsArray = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '{') {
            bracketsArray.push(input[i]);
        }
        if (input[i] === '}') {
            if (bracketsArray.length === 0) {
                return false
            } else {
                bracketsArray.pop()
            }
        }
    }
    if (bracketsArray.length !== 0) {
        return false
    }
    return true
}
console.log('not balanced:', isBalanced('{{}{}{}}{{{}'));
console.log('not balanced:', isBalanced('{{}{}{}}}'));
console.log('balanced:', isBalanced('{{}{}}{}')); // true
console.log('not balanced:', isBalanced('{}{{}')); // false