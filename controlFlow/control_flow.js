let userRole = "admin";
let accessLevel;
if(userRole ==="admin"){
    accessLevel = "Full Access Level";
}else if(userRole === 'manager'){
    accessLevel = "Limited Access garanted";
}else{
    accessLevel = "No access level granted"
}
console.log('AccessLevel:', accessLevel)

let isLoggedIn = true;
let userMessage;
if(isLoggedIn){
    if(userRole ==="admin"){
        console.log(`Welcome ${userRole}`);
    }else {
        console.log('welcome manager');
    }
}else{
    console.log('Please login first');
}
console.log("User Message:", userMessage);

let userType = "Subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Admintstrator";
        break;
    case "Subscriber":
        userCategory = "Subcribtion Category";
        break;
    case "Manager":
        userCategory = "Management solutions";
        break;
    default:
        userCategory = "unKnown";
}

console.log("User Category:", userCategory);