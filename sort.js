/**
 * Релизуйте сортировку массива
 * @param   {any[]}     values  сортируемый массив
 * @returns {any[]}
 */
function sort(values) {
    const filter = [...values]
    const result = []
    while (filter.length > 0) {
        let min = parseInt(filter[0])
        filter.forEach(item => {
            if (parseInt(item) < min) {
                min = parseInt(item)
            }
        })
        while (filter.includes(min)) {
            result.push(min)
            filter.splice(filter.indexOf(min), 1)
        }
    }
    return result
}

console.log(sort([7, 2, 99, 5, 99, 1, 3, -2, 4, -1])); // [-1, 1, 2, 3, 4, 5, 7, 99]
