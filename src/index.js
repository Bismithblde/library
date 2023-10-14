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
let object = document.getElementsByClassName("object")
let objectDiv = document.getElementsByClassName("objects-container")[0]

function renderBooks() {
    while (objectDiv.firstChild) {
        objectDiv.removeChild(objectDiv.firstChild);
    }
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(i)
        let newDiv = document.createElement("div");
        let titlevar = document.createElement("h1");
        let authorvar = document.createElement("h1");
        let pagesvar = document.createElement("h1");
        let myBook = myLibrary[i]

        titlevar.textContent = "Title: " + myBook.title;
        authorvar.textContent = "Author: " + myBook.author;
        pagesvar.textContent = "# of pages: " + myBook.pages;
        newDiv.appendChild(titlevar)
        newDiv.appendChild(authorvar)
        newDiv.appendChild(pagesvar)

        newDiv.className = "object"
        objectDiv.appendChild(newDiv)
    

        


    }

}
submitButton.onclick = function() {
    addBook(titleInput.value, author.value, pages.value)

    renderBooks()

}

