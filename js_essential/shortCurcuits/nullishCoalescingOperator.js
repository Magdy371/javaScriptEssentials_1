/*
Java Script Fasly values:
    false, 0||-0, and empty string, null, undefiend, NaN, 0n
*/

//In java script the or short circuting if the left half is one
//of javascript fasly value the the right sdie t=is the truthy one

/*
but for nullish coalescing operator if the left sdie only [null or undifined ]
then the right side is a truthy value;
*/
function fetchUserBalance(){
    const userBalance =0;
    return userBalance;
}
let userBalance_1= fetchUserBalance() || 'not available';
console.log(`By using OR your account balaance is: ${userBalance_1}`);
let userBalance_2= fetchUserBalance() ?? 'not available';
console.log(`By using ?? your account balance is: ${userBalance_2}`);