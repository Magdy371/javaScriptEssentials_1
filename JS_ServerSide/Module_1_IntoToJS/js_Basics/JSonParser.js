const write = require('fs');
let jsonData = '[{"title": "JS Guide", "author": "MDN"},{"title": "RT Guide", "author": "RTX"}]'; // JSON string
const jsBook = JSON.parse(jsonData); // Parse JSON string to object
console.log(jsBook); // Accessing property from the parsed object
const newJsonData = JSON.stringify(jsBook); // Convert object back to JSON string
write.writeFile('Data.JSON', newJsonData, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Data written to Data.JSON');
    }
});
