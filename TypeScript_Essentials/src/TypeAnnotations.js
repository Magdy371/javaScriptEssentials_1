var array1 = [100, 233, 3342, 534, 235];
var array2 = ["Magdy", "Mohamed", "Gaber", "Elshrief"];
var array3 = [30, 7, 2000, "Magdy", "Elshrief", ["Elmahad", "Eldiny"]];
//Type annotations with functions
var iteration = 0;
for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
    var c = array1_1[_i];
    console.log("index: ".concat(iteration, " --> ").concat(c));
    iteration++;
}
console.log('------------------------');
for (var _a = 0, array2_1 = array2; _a < array2_1.length; _a++) {
    var c = array2_1[_a];
    console.log("index: ".concat(iteration, " --> ").concat(c));
    iteration++;
}
console.log('------------------------');
for (var _b = 0, array3_1 = array3; _b < array3_1.length; _b++) {
    var c = array3_1[_b];
    console.log("index: ".concat(iteration, " --> ").concat(c));
    iteration++;
}
console.log('-----Data annotation for function-------');
var showMessage = true;
function printMessage(name, age, salary) {
    //let test = 10;
    if (showMessage) {
        return "Name: ".concat(name, " & Age: ").concat(age, " ---> Salary: ").concat(salary);
    }
    return 'no Data to be shown';
}
var message = printMessage("Magdy Elshrief", 25, 12000);
console.log("The shown message is ".concat(message));
