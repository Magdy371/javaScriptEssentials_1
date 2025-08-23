//1-Using type annotation to Force Type Checking
var name = "Magdy";
var age = 25;
var hired = true;
console.log("Name: ".concat(name, "-Age: ").concat(age, "-->is Hired: ").concat(hired));
//Any Accepted to br reassigned for any datatype
var all = "Yasser";
console.log("the value of any before reassigned is :".concat(all));
all = 130;
console.log("the value of any after reassigned is :".concat(all));
function add(num1, num2) {
    return num1 + num2;
}
console.log(typeof add(20, 20));
console.log(add(20, 432));
