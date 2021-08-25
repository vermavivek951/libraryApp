let myLibrary = [];
const submitBtn = document.querySelector('#submitForm');
const displayBooks = document.querySelector('#displayBooks');


function Book(title , author , pages , haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function() {
        return `${title} by ${author} , ${pages} pages , ${haveRead}`;
    }
}

submitBtn.addEventListener('click' , (e) => {
    const bookName = document.getElementById('bookname').value;
    const authorName = document.getElementById('authorname').value;
    const pages = document.getElementById('numberofpages').value;
    const haveRead = document.getElementById('havereadornot').checked;

    addBookToLibrary(bookName,authorName,pages,haveRead);
    
});

function addBookToLibrary(bookName,authorName,pages,haveRead) {
    if(haveRead) {
        haveRead = "Already Read";
    } else {
        haveRead = "NotRead";
    }
    const book = new Book(bookName,authorName,pages , haveRead);
    
    myLibrary.push(book);
    displayBooksInLibrary()
    
}

function displayBooksInLibrary() {
    for(let i=0 ; i<myLibrary.length ; i++) {
        const bookItem = document.createElement('div');
        bookItem.classList.add('bookItem');
        bookItem.textContent = `BookName: ${myLibrary[i].title}
                                    AuthorName: ${myLibrary[i].author}
                                    NumberOfPages: ${myLibrary[i].pages}
                                    haveRead: ${myLibrary[i].haveRead}`;
       
        displayBooks.appendChild(bookItem);
    }
}
