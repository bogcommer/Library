const bookGrid = document.querySelector(".books");
const myLibrary = [];
const mockData = document.querySelector(".mock-data");
const addData = document.querySelector(".add-book");

let mockDataAdded = false;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

console.log(myLibrary);
addBookToLibrary("Title1", "Author1", 25, "Yes");
addBookToLibrary("Title1", "Author1", 25, "Yes");
addBookToLibrary("Title1", "Author1", 25, "Yes");
addBookToLibrary("Title1", "Author1", 25, "Yes");

mockData.onclick = () => {
    if (mockDataAdded === false) {
        addBookToView()
        mockDataAdded = true;
    } else {
        alert("Library already filled with mock data.");
    }
}



function addBookToView() {
    const books = document.querySelector(".books");
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.classList.add("book");
        bookEl.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.read}</p>
        
        <button class="remove">Remove Book</button>`
        books.appendChild(bookEl);
    }
}