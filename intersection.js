/**
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */
function intersection(left, right) {
    const interSect = {}
    left.forEach(item => {
        interSect[item] = false
    })
    right.forEach(item => {
        if (item in interSect) {
            interSect[item] = !interSect[item]
        }
    })
    for (let key in interSect) {
        if (!interSect[key]) delete interSect[key]
    }
    return Array.from(Object.keys(interSect)).map((item) => parseInt(item))
}

console.log(intersection(
    [1, 2, 3, 4, 5],
    [2, 8, 3]
));