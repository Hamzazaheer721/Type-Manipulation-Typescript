//value of the x in _obj_2 will be set back to x: 1 because we are destructuring _obj in _obj_two

const _obj = {
  x: 1,
  y: 2
}


const _obj_two = {
  x : 2,
  ..._obj
}

console.log("x value : ", _obj_two) //x:1 here Object => {x:1, y: 2} 

//In order for us to retain the value of x: 2 in _obj_two, all we have to do is to change the destructuring position

const _obj_three = {
  ..._obj,
  x: 2
}

console.log("x value: ", _obj_three) //here x value will be retained