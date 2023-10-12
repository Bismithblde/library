let myLibrary = [];
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}
function addBook(title, author, pages) {
    let book = new Book(title, author, pages)
    myLibrary.push(book)
}

let submitButton = document.getElementById("submit")
let titleInput = document.getElementById("title")
let author = document.getElementById("author")
let pages = document.getElementById("pages")

submitButton.onclick = function() {
    addBook(titleInput.value, author.value, pages.value)
    console.log(myLibrary)
}