let factorial = (n) => {
  if (typeof(n) != "number") {
    return console.error("Invalid argument");
  }

  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial("2"));

const calculateArguments = (args) => {
  const numberArray = args.filter((arg) => !isNaN(arg))
  const multiply = numberArray.reduce((acc, curr) => acc * curr)
  return multiply
}

console.log(calculateArguments([1, 2, 3, "sdfa"]))
