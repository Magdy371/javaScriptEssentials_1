/*
Enumerations:
    Allow us to declare a set of Named constants
    Used for Logical gruoping collections
    it organize your code
    By default Enums are number_based
    First Element is 0
    there is String based Enumerators
    there is heterogeneous Enums [numbers + srings]
*/
var Child;
(function (Child) {
    Child[Child["Five"] = 25] = "Five";
    Child[Child["Seven"] = 20] = "Seven";
    Child[Child["Ten"] = 15] = "Ten";
})(Child || (Child = {}));
var Level;
(function (Level) {
    Level[Level["kids"] = 25] = "kids";
    Level[Level["easy"] = 20] = "easy";
    Level[Level["med"] = 15] = "med";
    Level[Level["hard"] = 12] = "hard";
})(Level || (Level = {}));
var lvl = "hard";
if (lvl === "Easy") {
    console.log("The level is ".concat(lvl, " and its time is--> ").concat(Level.easy));
}
else if (lvl === "kids") {
    console.log("The level is ".concat(lvl, " and its time is--> ").concat(Level.kids));
}
else if (lvl === "med") {
    console.log("The level is ".concat(lvl, " and its time is--> ").concat(Level.med));
}
else {
    console.log("The level is ".concat(lvl, " and its time is--> ").concat(Level.hard));
}
//////////////////////////////////////////////////////////////////////
