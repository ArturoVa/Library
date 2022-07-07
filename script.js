
let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.printInfo= function(){
        let readMessage = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}`
    }
}



var book = new Book("hi", "juan", 16,false);
console.log(book);
console.log(book.printInfo());
