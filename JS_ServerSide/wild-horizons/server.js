import http from 'node:http';
import { getDataFromDB } from './db.js';

const server = http.createServer(
    async(req,res)=>{
        const destination =await getDataFromDB();
        if(req.url ==='/api' && req.method ==='GET'){
            res.setHeader('Content-Type','application/json');
            res.statusCode  = 200;
            res.statusMessage = 'ok';
            res.end(JSON.stringify(destination));
        }
    }
);

const PORT = 5000||8000;
server.listen(PORT,()=>{
    console.log('server is running');
})