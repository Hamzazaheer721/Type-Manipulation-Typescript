
interface newType{
  start : number,
  finish: number
}


interface myCustomType {
  begin: keyof newType
}


const variable: myCustomType = {
  begin: "start"
}

const _var: keyof typeof variable = "begin"

