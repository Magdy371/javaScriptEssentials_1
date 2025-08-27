import http from 'node:http'

const server = http.createServer((req, res) => {

    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObject = Object.fromEntries(urlObj.searchParams)
    console.log(urlObj)
    console.log(queryObject);

})

server.listen(8000, () => console.log('Server listening on port 8000'))


