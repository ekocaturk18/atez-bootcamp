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

const calculateArguments = (args) => {
    const numberArray = args.filter((arg) => !isNaN(arg))
    const multiply = numberArray.reduce((acc, curr) => acc * curr)
    return multiply
  }
  
console.log(calculateArguments([1, 2, 3, "sdfa"]))