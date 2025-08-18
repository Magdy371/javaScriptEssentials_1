const fs = require('fs').promises;
fs.readFile('../t1/Data.JSON','utf-8').then((data)=>
{
    console.log(data);
}).catch((error)=>{
    console.error(error);
})