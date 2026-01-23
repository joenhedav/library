const myLibrary = [];

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

    myLibrary.forEach(book => {

        const newBook = document.createElement("div");
        newBook.classList.add("book");

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

        text.append(title, author, pages, read);
        overlay.appendChild(text);

        newBook.append(cover, overlay);
        library.appendChild(newBook);
    });
}


addBookToLibrary("The Hobbit", "J.J.R. Tolkien", 295, "not read yet", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX7-5anWQ1AR7tmRrj6RcLLgodcAuaV3QSEA&s");

renderLibrary();