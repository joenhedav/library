let myLibrary = [];

function Book(title, author, pages, read, cover) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.cover = cover;
}

function addBookToLibrary(title, author, pages, read, cover) {
    const book = new Book(title, author, pages, read, cover);
    myLibrary.push(book);
}

function renderLibrary() {

    const library = document.querySelector(".library");

    library.innerHTML = "";

    myLibrary.forEach(book => {

        const newBook = document.createElement("div");
        newBook.classList.add("book");
        newBook.dataset.id = book.id;

        const title = document.createElement("h1");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");

        const cover = document.createElement("img");

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const text = document.createElement("div");
        text.classList.add("text");


        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = `${book.pages} pages`;
        read.textContent = book.read;
        cover.src = book.cover;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");

        text.append(title, author, pages, read);
        overlay.appendChild(text);

        newBook.append(cover, overlay, deleteBtn);
        library.appendChild(newBook);


        deleteBtn.addEventListener("click", () => {
            myLibrary = myLibrary.filter(newBook => newBook.id !== book.id);
            renderLibrary();
        });

    });
}

const addBook = document.querySelector(".addBook");
const openDialog = document.querySelector(".open");
const addBtn = document.querySelector(".addBtn");
const closeDialog = document.querySelector(".close");
const form = document.querySelector("form");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const coverInput = document.querySelector("#cover");
const readInput = document.querySelector("#read");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const cover = coverInput.value;
    const read = readInput.checked ? "read" : "not read yet";

    addBookToLibrary(title, author, pages, read, cover);
    renderLibrary();

    form.reset();

    addBook.close();
});


openDialog.addEventListener("click", () => {
    addBook.showModal();
});


closeDialog.addEventListener("click", () => {
    addBook.close();
});