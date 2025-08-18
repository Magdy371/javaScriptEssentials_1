const server = require('express');
const app = server();
const PORT = 3000;

const arr_Books = [ {title:"Ragav",authur:"Martiel", rating:4.9},{title:"Zerife4k",authur:"MELKOVA", rating:3.9}, {title:"RENATL2.5",authur:"MVOvIKel", rating:5} ];
const newJsonBook = JSON.stringify(arr_Books);



app.get('/api/books',(req,res)=>{
    let body = newJsonBook;
    res.writeHead(200, {
        'Content-Length': newJsonBook.length,
        'Content-Type': 'application/json'
    });
    res.end(body);
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


/*
const server = require('http');

const PORT = 3000;

const arr_Books = [ {title:"Ragav",authur:"Martiel", rating:4.9},{title:"Zerife4k",authur:"MELKOVA", rating:3.9}, {title:"RENATL2.5",authur:"MVOvIKel", rating:5} ];
const newJsonBook = JSON.stringify(arr_Books);

const app = server.createServer((req, res) => {
            let body = newJsonBook;
            res.writeHead(200, {
                'Content-Length': newJsonBook.length,
                'Content-Type': 'application/json'
            });
            res.end(body);
        }
);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
*/