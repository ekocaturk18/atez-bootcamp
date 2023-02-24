function multiply() {
    let result = 1 
    for (let i = 0; i < arguments.length; i++) {
        if (typeof (arguments[i]) != "number" ){
            return console.error("Invalid argument")
        } else {
             result *= arguments[i]
        }
    }
    return result
}

console.log(multiply(1,"2"))
console.log(multiply(1,2,3,4,5))