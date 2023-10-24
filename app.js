const myLibrary = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `Title: ${this.title}
Author: ${this.author}
Number of pages: ${this.pages}
Read: ${this.read}`
    } 
}


let addBtn = document.querySelector('.add')
addBtn.addEventListener('click', displayForm)
console.log(myLibrary.info)
const theRoad = new Book("The Road", "Cormac McCarthy", 304, "Yes")
const cat = new Book('the', 'cat', 123, "Yes")
myLibrary.push(cat)
myLibrary.push(theRoad)

function displayBooks() {
    
}

     


function displayForm(){
    // let addBtn = document.querySelector('add')
    // Unhides form to add book info
    let formContainer = document.querySelector('.form')
    formContainer.classList.remove('hidden')
}


    // builds book card for book data to be added
    let bookContent = document.querySelector('.books')
    
    // removes default behavior and displays book
    let form = document.querySelector('.addABook')
    form.addEventListener('submit', function(event){
        event.preventDefault();

        let title = document.querySelector('#title')
        let author = document.querySelector('#author')
        let pages = document.querySelector('#pages')
        let haveRead = document.getElementsByName('read')
        let books = document.querySelector('.books')
    
        //finds the checked box for the object attribute and checks for duplicates
        for(let i = 0; i < haveRead.length; i++)  {
            if (haveRead[i].checked){
                read = haveRead[i].id
            }
            if(myLibrary[i].title == this.title){
                alert('This book is already in your library.')
            }
        }
        
        let newBook = new Book(title.value, author.value, pages.value, read)
        myLibrary.push(newBook)

        books.innerHTML= ""
        
        for (let i=0; i < myLibrary.length; i++){
            let card = document.createElement('div')
            let cardInfo = document.createElement('p')
            let books = document.querySelector('.books')
            card.classList.add('card')
            bookContent.appendChild(card)
            card.appendChild(cardInfo)
            cardInfo.classList.add('info')
            cardInfo.innerText = myLibrary[i].info()
            console.log(myLibrary.length)
            }
            let formContainer = document.querySelector('.form')
            formContainer.classList.add("hidden")
            let form = document.querySelector('.addABook')

            form.reset()
        })
    