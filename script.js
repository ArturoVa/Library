let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.printInfo= function(){
        let readMessage = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}.`
    }
}

function openPopUp(){
    const popUp =document.getElementById("popUp");
    popUp.style.display = 'block';


    
}
function addBookToLibrary(){

}
function closePopUp(){
    const popUp = document.getElementById("popUp");
    popUp.style.display= 'none';
}

const addBookBTN = document.getElementById('add-book');
const closeButton = document.getElementById('close');

addBookBTN.addEventListener('click',openPopUp);
closeButton.addEventListener('click', closePopUp)

