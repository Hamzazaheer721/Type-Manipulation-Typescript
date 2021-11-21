const ICustomObj = {
  name:  "Hamza",
  age: 21,
  city: "Islamabad",
  area: "Taramari"
}

const _objAssigned = Object.entries(ICustomObj)

console.info(_objAssigned)

// [ [ 'name', 'Hamza' ],
//   [ 'age', 21 ],
//   [ 'city', 'Islamabad' ],
//   [ 'area', 'Taramari' ] ]

for (const [key,value] of Object.entries(ICustomObj)){
  console.log(`Key => ${key}`)
}

console.log(Object.keys(ICustomObj))

// Object.keys returns only the own property names
// Object.entries returns the array of arrays with key and value 

// Object.keys returns the array of keys
// Object.entries returns the array of [key,value] pairs

