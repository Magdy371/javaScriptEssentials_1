const server  = require('http');
const write = require('fs');

const PORT = 3000;

const arr_Books = [ {title:"Ragav",authur:"Martiel", rating:4.9},{title:"Zerife4k",authur:"MELKOVA", rating:3.9}, {title:"RENATL2.5",authur:"MVOvIKel", rating:5} ];
const newJsonBook = JSON.stringify(arr_Books);

const app = server.createServer((req,res)=>{
    let resResult = newJsonBook;
    if(req.method==='GET'&& req.url==='/api/books')
    {
         write.writeFile('response.json',resResult,'utf-8',(err)=>{
            console.error(`error writeing the file as :${err.message}`);
        });
        res.writeHead(200,{
            'content-length':resResult.length,
            'content-type':'application/json'
        });
        res.end(resResult);
    }
});
app.listen(PORT,()=>{console.log(`server run on port: ${PORT}`)});