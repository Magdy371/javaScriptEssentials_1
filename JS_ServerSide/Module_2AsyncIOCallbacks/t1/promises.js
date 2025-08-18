let prompt = require('prompt-sync')();
let io = require('fs');
const methodCall = new Promise((resolve, reject)=>{
    setTimeout(
        ()=>{
            let fileName = prompt('what is the name of the file?');
            try {
                const data = io.readFileSync(fileName,{encoding:'utf-8',flag:'r'});
                resolve(data);
            } catch (error) {
                reject(error);
            }
        },3000);
});
console.log(methodCall);
methodCall.then(
    (data)=>console.log(data),
    (error)=>console.error('eror reading file')
);