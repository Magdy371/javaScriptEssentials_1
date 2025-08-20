let books=[];

function addBook()
{
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const pageNumbers = document.getElementById("pageNumbers").value;
    const bookDiscription = document.getElementById("bookDiscription").value;
    if(bookName && authorName && bookDiscription && !isNaN(pageNumbers)){
        const book = {
            name :bookName,
            authorName: authorName,
            bookDiscription: bookDiscription,
            pageNumbers:pageNumbers
        };
        books.push(book);
        showBooks();
        clearInputs();
    }else{
        alert('please fill in all the fields');
    }
}
function showBooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Remove old entry
    showBooks(); // Refresh list
  }
  function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}