/**
 * Вывод чисел в колонках
 * @param   {Number}  max    от 0 до max
 * @param   {Number}  cols   количество колонок
 * @returns {String}
 */
const printNumbers = function (max, cols) {
   const rows = Math.ceil(max / cols)
   let line = ''
   for (let i = 0; i < rows; i++) {
      let value = 0;
      for (j = 0; j < cols; j++) {
         value = j * rows + i
         if (value >= max) break
         line += (j === 0 ? '' : ' ') + value
      }
      line += '\n'
   }
   return line
}


console.log(printNumbers(12, 3));
console.log(printNumbers(25, 7));
 /*
Пример работы:
0 4 8
1 5 9
2 6 10
3 7 11
*/