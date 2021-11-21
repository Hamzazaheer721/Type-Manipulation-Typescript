const numbers: number[] = [1,2,3,4,5]

let sum: number = 0;
for (let n of numbers) {
  sum += n;
}

console.log("Sum: ", sum)