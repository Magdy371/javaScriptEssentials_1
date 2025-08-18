const books = [
    {title:'Algo', rating:'base'},
    {title:'Ramen' , rating:'base'},
    {title:'JS Guide Mobile', rating:'base'},
    {title:'JS Guide CS', rating:'intermediate'},
    {title:'JS Guide IT', rating:'intermediate'},
    {title:'Express', rating:'intermediate'},
    {title:'Express', rating:'advanced'},
    {title:'Node', rating:'advanced'},
    {title:'MongoDB', rating:'advanced'}
];

// Filter: Get books with rating > ADVANCED
const topBooks = books.filter(book => book.rating == 'advanced');
// Map: Get titles of all books
const titles = books.map(book => book.title);

console.log('Top Books:', topBooks);
console.log('Book Titles:', titles);