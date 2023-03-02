var sth  = "Atez"
var number = 123
var bool = true
var arr = [1,2,3,4,5]
var obj = {name: "Atez", 
           age: 23}
console.log(sth)

//Unmutaded değiştirilemez

const globalScope = "global scope"

function scope(){
    const localScope = "local scope"
    let localScope2 = "local scope 2"
    console.log(globalScope)
    console.log(localScope)
    console.log(localScope2)

}

scope()

//Let bulunduğu konum içersinde değişikliğe izin verir dışarıdan okunamaz 
//Const ise sadece okunabilir

function returnSomething(){

    return "something"
}

const  returnSomething2 = () => "something"
console.log(typeof returnSomething2)
console.log(typeof globalScope)

//Arrow function
carArray = [];
carModels = ["porsche","volvo","tofaş"];

carModels.forEach((value,index) => {
    const carObject = {
        model: value,
        index: index
    }
    carArray.push(carObject)
});
console.log(carArray)

const carModel = carModels.map((value,index) => {
    return {
        model: value,
        index: index
    }
})  
console.log(carModel)

const HasInSaleCars = [
    {model: "porsche", inSale: true},
    {model: "volvo", inSale: false},
    {model: "tofaş", inSale: true}
]

const inSaleCars = HasInSaleCars.filter((value) => value.inSale)
console.log(inSaleCars)

const calculateSum = (a,b) => {
    return a+b
} 
const numberArray = [1,2] 
console.log(calculateSum(...numberArray))

carObject = { 
    model: "porsche",
}
newModelSpecs = {
    color: "red",
    year: 2020
}
const newCarObject = {...carObject, ...newModelSpecs}
console.log(newCarObject)


const [x,y,...rest] = [1,2,3,4,5,6,7,8,9,10]
console.log(x,y,rest)


const modelspec = {
    age : 23,
}

// eğer modelspec içerisinde speedInterval varsa forEach içerisindeki fonksiyonu çalıştır
console.log("Model", modelspec?.speedInterval?.forEach(x => console.log(x)))

// ternary operator
const age = 23
const isAdult = age > 18 ? true : false 
console.log(isAdult)



