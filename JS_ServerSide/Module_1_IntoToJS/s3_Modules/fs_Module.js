const fs = require('fs');
const filePath = './sample.txt';
exports.readAny= (filePath)=>
{
    fs.readFile(filePath,'utf8',(err, data)=>{
    if(err)
    {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
    });
};
//retrieving the file content
const data = fs.readFileSync('./content.md','utf8');
console.log(data);