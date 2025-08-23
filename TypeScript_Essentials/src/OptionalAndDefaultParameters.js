/*
*in type Script there is Optional parameters and default ones
* in optional parameters you can choose it or not
* the default parameter must be choosen
*  */
function printMessage(name, age, salary) {
    if (name === void 0) { name = "UnKnown"; }
    //let test = 10;
    return "Name: ".concat(name, " & Age: ").concat(age, " ---> Salary: ").concat(salary);
}
console.log(printMessage(undefined, 20, 100000));
