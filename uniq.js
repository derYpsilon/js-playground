/**
 * Получения массива уникальных значений
 * @param  {number[]} values
 * @return {*}
 */
function uniq(values) {
    let tmpUniqStorage = {};
    values.forEach((item) => {
        tmpUniqStorage[item] = true
    })
    return Array.from(Object.keys(tmpUniqStorage)).map((item) => parseInt(item))
}

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]))