const path = require('path');
let result = path.basename('../s2/index.js');
console.log(result); //outputs home.html to the console
let reading =require('./fs_Module.js');
reading.readAny('../s2/' + result); 
