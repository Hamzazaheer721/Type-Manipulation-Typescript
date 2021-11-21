const numbers: number[] = [1,2,3,4,5]

let sum: number = 0;
for (let n of numbers) {
  sum += n;
}

console.log("Sum: ", sum)
// Sum: 15

// we could do the same thing with array.reduce 

const callback = (accumulatior, currentValue) => {
  return accumulatior + currentValue
}

sum = numbers.reduce(callback, 0);

console.log("Updated Sum :", sum)

// Updated Sum : 15