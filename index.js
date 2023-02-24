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