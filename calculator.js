/* 
*   Не используем eval(), т.к. считаем задачу с написанием калькулятора выражения из строки логической
*/

function myCalculator(line) {
    line = line.replace(/\s/g, '')
    line = line.replace(/\(-/g, '(#')
    line = line.replace(/^-/g, '#')
    while (line.match(/\([^\(\)]+\)/g) !== null) {
        let phrase = Array.from(line.match(/\([^\(\)]+\)/g))
        phrase.forEach(item => {
            let calcRes = calc(item)
            calcRes = calcRes >= 0 ? calcRes : '#' + (calcRes * (-1))
            line = line.replace(item, calcRes)
        })
    }
    return parseFloat(calc(line))
}

function calc(input) {
    let result = input.replace(/(\(|\)|\s)*/g, '')
    result = result.replace('##', '')
    let operands = result.match(/(#)?\d{1,}(\.\d{0,})?/g).map(item => {
        item = item.replace('#', '-')
        return parseFloat(item)
    })
    let operators = result.match(/[\+\-\/\*]/g)

    if (operands.length === 1) {
        return operands[0]
    }

    let calcRes
    let flag = true

    while (flag) {
        for (let i = 0; i < operands.length; i++) {
            flag = false
            if (operators[i] === '*' || operators[i] === '/') {
                calcRes = doMath(operands[i], operands[i + 1], operators[i])
                operators.splice(i, 1)
                operands.splice(i, 2, calcRes)
                flag = true
                break
            }
        }
    }

    while (operands.length > 1) {
        operands.unshift(doMath(operands.shift(), operands.shift(), operators.shift()))
    }
    return operands[0]
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

const mathematics = ['1 + ((2 + 3) * 5 + 3) * 7',
    '-(-4)-1 + ((4 + 2 * 3 - 4 / 2) * 5 + (-3 - 2 * (6 - 7) / 1)) * 7',
    '2 + 3 * (-1)']
mathematics.forEach(item => console.log('\n' + item, ' = ', myCalculator(item) + '\n'))
