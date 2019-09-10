/**
 * Найти пропущеное значение в неотсортированном массиве.
 * @param  {number[]} values
 * @return {boolean}
 */
function missing(values) {
    if (values.length===0) return 'nothing to find'
    const veryfyObj = {}
    for (let i = 1; i <= values.length+1; i++) {
        veryfyObj[i] = false
    }
    for (let i = 0; i < values.length; i++) {
        veryfyObj[values[i]] = true
    }
    const missingValueIndex = Array.from(Object.values(veryfyObj)).indexOf(false)
    if (missingValueIndex===values.length) return undefined
    return missingValueIndex+1
}

console.log(missing([1, 4, 3])); // 2
console.log(missing([5, 1, 4, 2])); // 3
console.log(missing([1, 2, 3, 4])); // undefined
console.log(missing([]));