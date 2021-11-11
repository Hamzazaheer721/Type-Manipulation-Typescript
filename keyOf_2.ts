interface googleType{
  lat: number
  lng: number
}

interface IType {
  type: keyof googleType
}

const _var: IType = {
  type: "lat" 
}

console.log(_var) //{type: "lat"}

type ICustomType<T> = {[ P in keyof T]: true}

const __var : ICustomType<typeof _var> = {
  type: true  // only true, false will give error
}

console.log(__var)  // {type : true}