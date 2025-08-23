//1-Using type annotation to Force Type Checking

let name:string = "Magdy";
let age:Number = 25;
let hired:boolean = true;
console.log(`Name: ${name}-Age: ${age}-->is Hired: ${hired}`);
//Any Accepted to br reassigned for any datatype
let all:any = "Yasser";
console.log(`the value of any before reassigned is :${all}`)
all = 130;
console.log(`the value of any after reassigned is :${all}`)

function add(num1:number , num2:number ){
    return num1 + num2;
}
console.log(typeof add(20,20));
console.log(add(20,432));


let myFriends = ["Ahmed","Mohamed","Yasser",10];
let c;
for (c of myFriends) {
    console.log(c);
}