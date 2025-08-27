import http from 'node:http'
import { getDataFromDB } from './db.js'
import {sendJSONResponse} from "./utils/senJSONResponse.js";

const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    if (req.url === '/api' && req.method === 'GET') {
        sendJSONResponse(res , 200,destinations);

    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {

        const continent = req.url.split('/').pop()
        const filteredData = destinations.filter((destination) => {
            return destination.continent.toLowerCase() === continent.toLowerCase()
        })
        sendJSONResponse(res , 200,filteredData);

    }else if(req.url.startsWith('/api/country')&& req.method === 'GET'){
        const country = req.url.split(('/')).pop();
        const filtered_country = destinations.filter((destinations)=>{
            return destinations.country.toLowerCase()===filtered_country.toLowerCase();
        })
        sendJSONResponse(res , 200,filtered_country);
    }
    else {
        sendJSONResponse(res , 404,destinations);
        res.setHeader('Content-Type', 'application/json',{
            error: "not found",
            message: "The requested route does not exist"});
    }

})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
