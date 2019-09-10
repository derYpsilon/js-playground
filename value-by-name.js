// Получить значение аргумента по его имени

function myFunc(a, b, c) {
    const argName = 'b'; // название аргумента
    let argValue; // значение полученное по `argName`
    const names = myFunc.toString().match(/\((\s{0,}\w{1,}\s{0,},*){1,}\)/m)[0].match(/\w{1,}/g)
    const params = {}
    for (let i = 0; i < arguments.length; i++) {
        params[names[i]] = arguments[i]
    }
    argValue = params[argName]
    return argValue
}

console.log(myFunc('fail', 'bingo!', 'no!'));