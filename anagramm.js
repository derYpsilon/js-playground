/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
function getAnagrams(list) {
    let arr=[]
    list.forEach((item)=>{
        for (let i=list.indexOf(item)+1; i<list.length;i++) {
            if (item.toLowerCase().split('').sort().join('')===list[i].toLowerCase().split('').sort().join('')) {
                arr.push([item,list[i]])
            }
        }
    })
    return arr
}

const inputList = [
	'кот', 'пила', 'барокко',
	'стоп', 'ток', 'кошка',
	'липа', 'коробка', 'пост'
];

// Проверка (лучше смотреть в консоль)
console.log(getAnagrams(inputList));
// [
//   ['кот', 'ток'],
//   ['пила', 'липа'],
//   ['барокко', 'коробка'],
//   ['стоп', 'пост'],
// ]