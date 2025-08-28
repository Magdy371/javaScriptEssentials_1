interface User{
    id:number;
    name:string,
    country:string,
    getName():string,
    printMessage:()=>string,
    getMessage(message:string):string
}

const message:string ="Heelo here" 
let user:User ={
    id:100,
    name:"Magdy",
    country:"Egypt",
    getName() {
        return this.name;
    },
    printMessage:()=>"Magdy Elshrief",
    getMessage(message){
        return message;
    }
} 
console.log(`user name: ${user.name}`);
console.log(`user id: ${user.id}`);
console.log(`Nationality: ${user.country}`);