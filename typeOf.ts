type IPersonInformation = {
  name: string
  age: string
  password: string
  city: string
  company: string
}
const _obj: Partial<IPersonInformation> = {}

const makeIterator = (function* (key: keyof IPersonInformation, value: string) {
  _obj[key] = value
  yield _obj
})

const handlePersonInformation = (
  key: keyof IPersonInformation,
  value: string
) => {
  _obj[key] = value
}

console.log(makeIterator("age","25").next())
console.log(makeIterator("city","lahore").next())
console.log(makeIterator("company","grafdom").next())
console.log(makeIterator("name","Hamza").next())
console.log(makeIterator("password","Jabw24").next())
