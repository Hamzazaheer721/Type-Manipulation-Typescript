type CustomType <T, K extends keyof T> = Partial <K>

interface ICountryWithCheckbox {
  country: string
  city: string
  continent: string
  description: string
}

//Making key of the type optional as well as adding another type
type ICustomType <T, K extends keyof T, U> =  Omit <T, K> & Partial<Pick<T,K>> & U

type ICountry = ICustomType<ICountryWithCheckbox, "description", {hours:string}> 

const _obj : ICountry = {
  country: "Pakistan",
  city: "Lahore",
  description: "Lahore is cultural city",
  continent: "Asia",
  hours: "12 hours"
}

console.log(_obj)
