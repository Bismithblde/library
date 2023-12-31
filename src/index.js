let myLibrary = [];
function Book(title, author, pages, readBool) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readBool = readBool
}
function addBook(title, author, pages) {
    let book = new Book(title, author, pages, false)
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
        let removeBut = document.createElement("button");
        let readBoolBut = document.createElement("button");

        let myBook = myLibrary[i]
    
        titlevar.textContent = "Title: " + myBook.title;
        authorvar.textContent = "Author: " + myBook.author;
        pagesvar.textContent = "# of pages: " + myBook.pages;
        removeBut.textContent = "remove"
        removeBut.onclick = function() {
            myLibrary.splice(i, 1)
            renderBooks()
        }
        if (myLibrary[i].readBool == false) {
            readBoolBut.textContent = "Unread"
        }
        else {
            readBoolBut.textContent = "Read"
        }
        readBoolBut.onclick = function() {
            if (myLibrary[i].readBool == false){
                myLibrary[i].readBool = true
                renderBooks()
            }
            else {
                myLibrary[i].readBool = false
                renderBooks()

            }
        }
        newDiv.appendChild(titlevar)
        newDiv.appendChild(authorvar)
        newDiv.appendChild(pagesvar)
        newDiv.appendChild(removeBut)
        newDiv.appendChild(readBoolBut)
        newDiv.className = "object"
        objectDiv.appendChild(newDiv)

    

        


    }

}
submitButton.onclick = function() {
    addBook(titleInput.value, author.value, pages.value)

    renderBooks()

}

