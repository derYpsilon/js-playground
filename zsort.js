/**
 * Перенос нулей в конец массива
 * @param  {number[]} input
 * @return {number[]}
 */
function zsort(input) {
    const zeroes = input.join(',').match(/(,|^)0/g).join('').replace(/,/g, '').split('').map(item => parseInt(item))
    const otherDigits = input.join(',').replace(/(,|^)0/g, '').replace(/^,/, '').split(',').map(item => parseInt(item))
    return otherDigits.concat(zeroes)
}

// Проверка
console.log(zsort([1, 0, 2, 3, 0, 4, 0])); // [1, 2, 3, 4, 0, 0, 0]
console.log(zsort([0, 0, 1]))
console.log(zsort([1, 0, 2, 10]))
console.log(zsort([1, 0, 3, 0]))