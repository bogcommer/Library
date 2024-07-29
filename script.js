const bookGrid = document.querySelector(".books");
const myLibrary = [];
const mockData = document.querySelector(".mock-data");
const addData = document.querySelector(".add-book");
const addDataDialog = document.querySelector(".add-book-dialog");
const submitBook = document.querySelector(".submit-book");
const closeDialog = document.querySelector(".dialog-close");
const removeData = document.querySelector(".remove");

let mockDataAdded = false;
let start = 0;

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(id, title, author, pages, read) {
    let book = new Book(id, title, author, pages, read);
    myLibrary.push(book);
}

mockData.onclick = () => {
    if (mockDataAdded === false) {
        addBookToLibrary(start, "Title1", "Author1", 25, "Yes");
        addBookToLibrary(start, "Title2", "Author2", 55, "No");
        addBookToLibrary(start, "Title3", "Author3", 90, "No");
        addBookToLibrary(start, "Title4", "Author4", 125, "Yes");

        addBookToView()
        mockDataAdded = true;
    } else {
        alert("Library already filled with mock data.");
    }
}

addData.onclick = () => {
    addDataDialog.showModal();
}

closeDialog.onclick = () => {
    addDataDialog.close();
}

submitBook.onclick = () => {
    newBook();
    addDataDialog.close();
    addBookToView();
    console.log(myLibrary);
}

removeData.onclick = () => {
    removeBook();
}

function removeBook() {
    
}

function newBook() {
    const newBookTitle = document.querySelector("#book-title");
    const newBookAuthor = document.querySelector("#book-author");
    const newBookPages = document.querySelector("#book-pages");
    const newBookRead = document.querySelector("#book-read");
    const newBookID = 0;

    addBookToLibrary(newBookID, newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.value)
    
    newBookID = start;
    newBookTitle.value = "";
    newBookAuthor.value = "";
    newBookPages.value = "";
    newBookRead.checked = false;
}

function addBookToView() {
    const books = document.querySelector(".books");
    for (let i = start; i < myLibrary.length; i++) {
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

        start++;
    }
}