/*
The OS module provides methods to retrieve information from the operating system that the application is running on and interact with it. This is sample 
code from the OS module that gets the computer's platform and architecture.
*/
let os = require('os');
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());
console.log("Computer OS Release Info: " + os.release());
console.log("Computer OS Type Info: " + os.type());
console.log("Computer OS Uptime Info: " + os.uptime() + " seconds");
console.log("Computer OS Total Memory Info: " + os.totalmem() + " bytes");