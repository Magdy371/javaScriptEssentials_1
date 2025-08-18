let h = require('http');
const port = 3000;
let server=h.createServer((req, res)=>
{
    let body = "<H1>Hello world</H1>";
    res.writeHead(200,
        {
            'content-length': body.length,
            'content-type': 'text/html'
        }
    );
    res.end(body);
});
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
