const obj = { a: 1, b: 2, c: 3, d: 4 }
const clone = (({ b, c, ...o }) => o)(obj) // remove b and c
console.log(clone)
