// in js, the symbol data type is referred to as symbol value,
// the symbol value in js runtime env, is created by invoking a Symbol method.
// This Symbol method will dynamically generate an anonymous, unique value.
// A Symbol can be used as object property


let _val: Symbol = Symbol("val")

if (_val === "val") {
  console.log("true")
} else {
  console.log("false") /* THis will be executed */
}

console.log("Symbol value is :", String(_val)) // Symbol value is : Symbol(val)
console.log("Symbol value is ", _val.toString())  // Symbol value is : Symbol(val) 
if(String(_val) === "val") {
  console.log("true") 
}else {
  console.log("false")   //this will be executed 
}

console.log("Symbol value is ", _val.description) //Symbol Value is val

if(_val.description === "val"){
  console.log("This time I will be executed")
}else {
  console.log("I won't be executed this time")
}