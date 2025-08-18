//Data Types abd Scopes
let _name = "Book Review";  // string
const rating = 4.5;        // number (immutable binding)
var isPublished = true;    // boolean (function-scoped)
let book = { title: "JS Guide", author: "MDN" }; // object
let tags = ["JavaScript", "Express"];            // array
//Conditions
if(rating > 4) {
    console.log(`${_name} is highly rated.`);
}else{
    console.log('needs improvemrnt');
}

for(let tag of tags)
{
    console.log(tag);
}

function greet(userName)
{
    return `Hello ${userName}`;
}

//ArrowFunction
const add = (a,b)=> a+b;
console.log(greet('Ahmed'));
const result = add(5, 10);
console.log(`Sum: ${result}`);