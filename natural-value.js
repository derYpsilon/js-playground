// Написать функцию получения простых чисел.
// Число является простым, если делится на 1 и само себя.

const getNaturalNumbers = (max) => {
    const naturalValues = []
    for (let i = 2; i <= max; i++) {
        let isNatural = true
        for (let j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                isNatural = false
                break
            }
        }
        if (isNatural) naturalValues.push(i)
    }
    return naturalValues
};

console.log(getNaturalNumbers(500));