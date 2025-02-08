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

})