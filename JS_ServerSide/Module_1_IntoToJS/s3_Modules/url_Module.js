// is to deveide a web address to readable parts
//a sample code that returns the value of the "firstName" query object from the given URL.
const url = require('url');
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let convertedUrl = url.parse(webAddress, true);
let convertedUrlData = convertedUrl.query;
console.log(convertedUrlData.firstName); // Clark
console.log(convertedUrlData.lastName); // Kent
console.log(convertedUrlData); // { lastName: 'Kent', firstName: 'Clark' }


//QuertStrings are used to pass data in the URL
// querystring module provides methods to parse through the query string of a URL.
let qString = require('querystring');
let sParameters = qString.parse('lastName=Kent&firstName=Clark');
console.log(sParameters.firstName); // Clark
console.log(sParameters.lastName); // Kent