// Store Book Objects
let myLibary = []

// Modal Setup
const modal = document.querySelector("dialog")
const addBtn = document.querySelector(".addBtn")
const closeBtn = document.querySelector(".closeBtn")

addBtn.addEventListener("click", () => {
    modal.showModal()
})

closeBtn.addEventListener("click", () => {
    modal.close()
})

// Handling Input
const addBook = document.querySelector(".addBook")

addBook.addEventListener("click", (e) => {
    e.preventDefault()

    let bookTitle = document.querySelector("#bookTitle").value
    let bookAuthor = document.querySelector("#bookAuthor").value
    let bookPages = document.querySelector("#bookPages").value
    let bookStatus = document.querySelector("#bookStatus").checked

    bookObj = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    addBookToLibrary(myLibary, bookObj)

    generateBook()
    
    modal.close()

})

function addBookToLibrary(libraryArray, bookObj) {
    libraryArray.push(bookObj);
}


function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

// Generating Book Card

function generateBook() {

    const container = document.querySelector(".container");

    const card = document.createElement("div")
        card.classList.add("card")
        const bookInfo = document.createElement("div")
        
        bookInfo.classList.add("bookInfo")
    
        const title = document.createElement("div")
        title.classList.add("title")

        const titleText = document.createElement("h1")
        titleText.textContent = bookObj.title

        title.appendChild(titleText)
    
        const author = document.createElement("div")
        author.classList.add("author")

        const authorText = document.createElement("h1")
        authorText.textContent = bookObj.author

        author.appendChild(authorText)
    
        const pages = document.createElement("div")
        pages.classList.add("pages")

        const pagesText = document.createElement("p")
        pagesText.textContent = `Pages: ${bookObj.pages}`

        pages.appendChild(pagesText)
    
        const status = document.createElement("div")
        status.classList.add("status")
        
        const statusText = document.createElement("p")
        statusText.textContent = `Status: ${bookObj.status?"Read":"Not Read"}`

        status.appendChild(statusText)
    
        const buttons = document.createElement("div")
        buttons.classList.add("buttons")

        const changeBtn = document.createElement("button")
        changeBtn.textContent = "Change Status"

        const rmBtn = document.createElement("button")
        rmBtn.textContent = "Remove"

        buttons.appendChild(changeBtn)
        buttons.appendChild(rmBtn)
    
        card.appendChild(bookInfo)

        bookInfo.appendChild(title)
        bookInfo.appendChild(author)
        card.appendChild(pages)
        card.appendChild(status)
        card.appendChild(buttons)
    
        container.appendChild(card)

        rmBtn.addEventListener("click", () => {
            card.remove()
        })

        changeBtn.addEventListener("click", () => {
            if (status.textContent.slice(8) == "Read") {
                status.textContent = "Status: Not Read"
            } else {
                status.textContent = "Status: Read"
            }
        })
       
}

