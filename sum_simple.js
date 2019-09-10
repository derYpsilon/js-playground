// Реализовать функцию суммы

const sum = function (...arg) {
    return arg.reduce((prev, item) => prev + item)
};

console.log("result:", sum(1, 2, 3, 4, 5));