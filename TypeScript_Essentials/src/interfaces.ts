interface User{
    id:number;
    name:string,
    country:string
}

let user:User ={
    id:100,
    name:"Magdy",
    country:"Egypt"
} 
console.log(`user name: ${user.name}`);
console.log(`user id: ${user.id}`);
console.log(`Nationality: ${user.country}`);