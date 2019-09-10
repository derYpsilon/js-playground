/**
 * Получение свойства объекта
 * @param {object} src
 * @param {string} path
 */
function get(src, path) {
    const thePath = path.split('.')
    let pointer = src
    for (let i = 0; i < thePath.length; i++) {
        if (isNaN(parseInt(thePath[i]))) {
            if (!(thePath[i] in pointer)) return false
            pointer = pointer[thePath[i]]
        }
        else {
            if (!pointer[parseInt(thePath[i])]) return false
            pointer = pointer[parseInt(thePath[i])]
        }
    }
    return pointer
}

const fixture = {
    foo: {
        bar: [
            { qux: 'bingo' },
        ],
    },
};

// Проверка
console.log(get(fixture, 'foo.bar.0.qux') === 'bingo');
