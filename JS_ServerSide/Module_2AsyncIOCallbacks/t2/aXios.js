const axios = require('axios');

// using axios to post request
const data = {
    title:'foo',
    body:'bar',
    userId:1
}
async function postData(){
    try {
        let response = await axios.post('https://jsonplaceholder.typicode.com/posts',data);
    console.log('Data Post Accepted',response);
    } catch (error) {
        console.error('error posting data',error);
    }
}
postData();

async function getData()
{
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('data is recieved',response.data);
    } catch (error) {
        console.error('Failed to get data from the host',error);
    }
}
getData();
