// string - number - boolean
// let & const
// int IDNumber = 123123123  === const || let IDNumber:number = 123123123
var stringVal = "Some String Value";
var numberValue = 123123;
var boolValue = true;
// any type
var someUnknownValue;
var userInput = [];
var stringUserInput = [];
userInput = [2, 3];
stringUserInput = ['some string Val', 'another string val'];
// someUnknownValue = ['some', 2, true];
someUnknownValue = {
    name: 'aldigi degerin hic bir onemi yok'
};
// function userLogin (email: string, password: string) {
//     return  email + password;
// }
// Union Type example
var userLogin = function (email, password) {
    if (typeof password === 'string') {
        return email + password.toUpperCase();
    }
    else {
        return email + password;
    }
};
var java = {
    name: "Java",
    type: "Cat",
    age: 3
};
var createCatUser = function (cat) {
    return "Our cats name is ".concat(cat.name, " and she is ").concat(cat.type, " also she is ").concat(cat.age, " years old ");
};
console.log(createCatUser(java));
console.log(userLogin('asdasd', 'asdasdfa'));
// Next Week's Topics
// -------------------------
// tslint - noExplicitAny  DO NOT USE any IN ANY CASE
// Generics & any
// Enums
// Deep Dive Functions
// Deep Dive Inheritance and extends keyword
// Classes
// Architecure filing (Models, enums classes)
// Hot reload and watching
// Commands
