import http from 'http';

const server = http.createServer((request, response) => {
    const body = "Hello world";
    response.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain'
    });
    response.end(body);
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
