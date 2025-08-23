var name = "Magdy";
console.log(typeof name);
var gen = 10;
console.log(typeof gen);
gen = "Ahmed";
console.log(typeof gen);
var getActions = function (btns) {
    console.log("Action for button up is: ".concat(btns.up));
    console.log("Action for button down is: ".concat(btns.down));
    console.log("Action for button left is: ".concat(btns.left));
    console.log("Action for button right is: ".concat(btns.right));
};
getActions({ up: "Go Up", down: "Go Down", left: "Go Left", right: "Go Right" });
