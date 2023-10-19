const myLibrary = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `Title: ${this.title}\n
Author: ${this.author}\n
Number of pages: ${this.pages}\n
Read: ${this.read}`
    } 
}

let addBtn = document.querySelector('.add')
addBtn.addEventListener('click', addToLibrary)

const theRoad = new Book("The Road", "Cormac McCarthy", 304, true)
myLibrary.push(theRoad)

function displayBooks() {
    for (let i=0; i < myLibrary.length; i++){
        let books = document.querySelector('.books')
        books.appendChild(document.createElement("main"))
        main.textContent = myLibrary[i].this.info()
    }
}


function addToLibrary(){
    
    // Unhides form to add book info
    let formContainer = document.querySelector('.form')
    formContainer.classList.remove('hidden')
    
    // builds book card for book data to be added
    let bookContent = document.querySelector('.books')
    let book = document.createElement('div')

    bookContent.appendChild(book)

    // removes default behavior and prints book
    let form = document.querySelector('.addABook')
    form.addEventListener('submit', function(event){
        event.preventDefault();
        let book = document.querySelector('.book')
        return book.textContent = theRoad.info
    })
    console.log('works')
}