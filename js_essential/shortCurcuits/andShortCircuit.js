/*
Java Script Fasly values:
    false, 0||-0, and empty string, null, undefiend, NaN, 0n
*/




const user={
    name:"Magdy",
    role:"Admin"
}
user.role === 'Admin' && console.log('dashboard displayed');
console.log(`is user admin ? ${user.role === 'Admin'}`);