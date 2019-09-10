/**
 * Найти min/max в произвольной строке
 * @param   {String} входные данные
 * @returns {{min:Number, max:Number}}  объект
 */
function getMinMax(string) {
    const values=string.match(/\-?\d{1,}(\.\d{1,})?/g).map(item=>parseFloat(item))
    return {
        min: values.reduce((prev,item)=>prev>item?item:prev),
        max: values.reduce((prev,item)=>prev<item?item:prev)
    }
}

const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
console.log(getMinMax(inputData));
