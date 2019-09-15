// Реализоватьсвойство `size`  у всех массивов,
// которое работало бы точно так же, как и `length`.
// [1,2,3].size -- 3
// [1,2,3].size=2 -- [1,2]

if (!Array.prototype.size) {
    Object.defineProperty(Array.prototype, 'size', {
        get() {
            return this.length
        },
        set(value) {
            if (value < this.length) {
                this.splice(0 + value, this.length)
                return true
            }

            return false
        }
    })
}

let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.size)
arr.size = 5
console.log(arr)