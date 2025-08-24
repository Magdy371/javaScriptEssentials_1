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

enum Child{
    Five = 25,
    Seven = 20,
    Ten = 15
}

enum Level{
    kids = Child.Five,
    easy=Child.Seven,
    med = Child.Ten,
    hard = med - 3
}

let lvl = "hard";
if(lvl === "Easy"){
    console.log(`The level is ${lvl} and its time is--> ${Level.easy}`);
}else if(lvl === "kids"){
    console.log(`The level is ${lvl} and its time is--> ${Level.kids}`);
}else if(lvl === "med"){
    console.log(`The level is ${lvl} and its time is--> ${Level.med}`);
}else{
    console.log(`The level is ${lvl} and its time is--> ${Level.hard}`);
}
