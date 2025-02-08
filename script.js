// Modal Setup
const dialog = document.querySelector("dialog")
const closeBtn = document.querySelector("closeBtn")

let addBook = document.querySelector(".addBook")
addBook.addEventListener("click", () => {
    dialog.showModal()
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dialog.close()
})



const myLibrary = []

