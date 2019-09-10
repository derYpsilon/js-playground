/**
 * Реализовать функцию суммирования
 * @param  {string} input
 * @return {number}
 */
function calc(input) {
    const result = Array.from(input.matchAll(/([\d{1,}\s]{1,})([(\*\+\-\/)\s*]{1,})/g))
    const stackOfOperands = []
    const stackOfOperators = []

    result.forEach(item => {
        stackOfOperands.push(item[1].trim().split(' ').map(item => parseInt(item)))
        stackOfOperators.push(item[2].trim().split(' ').map(item => item))
    })

    for (let i = 0; i < stackOfOperands.length; i++) {
        while (stackOfOperands[i].length > 1) {
            let stackLength = stackOfOperands[i].length - 1
            stackOfOperands[i][stackLength - 1] = doMath(stackOfOperands[i][stackLength - 1], stackOfOperands[i][stackLength], stackOfOperators[i].shift())
            stackOfOperands[i].pop()
        }
    }

    stackOfOperators.shift()

    while (stackOfOperands.length > 1) {
        stackOfOperands[1][0] = doMath(stackOfOperands[0][0], stackOfOperands[1][0], stackOfOperators.shift().shift())
        stackOfOperands.shift()
    }

    return stackOfOperands[0][0]
}
function doMath(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
    }
}

console.log(calc('4 7 + 1 -')); // (4 + 7) - 1 = 10
console.log(calc('3 6 8 * + 10 -')); // 3 + (6 * 8) - 10 = 41
console.log(calc('4 7 - 5 6 * + 7 9 1 + - - 5 +')); // -3 + 30 -(-3) + 5= 35
