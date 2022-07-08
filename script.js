let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function openPopUp(){
    const popUp =document.getElementById("popUp");
    popUp.style.display = 'block';
}
function addBookToLibrary(){
    
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read =  document.getElementById('read').checked;
    let checker = (title==='' || author==='' ||pages==='') ?  undefined:new Book(title, author,pages,read);
    return checker
}
function clear(){
    document.getElementById('book-title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
}
function closePopUp(){
    const popUp = document.getElementById("popUp");
    popUp.style.display= 'none';
}

function updateCardDisplay() {
    myLibrary.forEach((book)=>{
        const card = document.createElement('div');
        const bookTitle = document.createElement('span');
        const bookAuthor = document.createElement('span');
        const bookPages = document.createElement('span');
        const alreadyRead = document.createElement('span');
        const eraseCard = document.createElement('button');
        const changeStatus = document.createElement('button');
        changeStatus.addEventListener('click', ()=>{
            if(book.read){book.read= false}
            else{book.read= true};
            alreadyRead.textContent =`${book.read ? "Already read" : "Not read yet"}`;
        })
        eraseCard.addEventListener('click', ()=>{
            card.parentNode.removeChild(card);
            myLibrary = myLibrary.filter((value)=>value !== book)
        })
        eraseCard.textContent = "Erase card"
        changeStatus.textContent = "Change read status"
        card.className = "card";

        bookTitle.className = "title";
        bookTitle.textContent = `Title: ${book.title}`;

        bookAuthor.className = "author";
        bookAuthor.textContent = `Author: ${book.author}`;

        bookPages.className = "pages"
        bookPages.textContent = `No. Pages: ${book.pages}`;

        alreadyRead.className = "already-read"
        alreadyRead.textContent =`${book.read ? "Already read" : "Not read yet"}`;
        card.append(bookTitle, bookAuthor, bookPages, alreadyRead, eraseCard,changeStatus);

        cardDisplay.appendChild(card);

    })
}


const addBookBTN = document.getElementById('add-book');
const closeButton = document.getElementById('close');
const submitButton = document.getElementById('submit');
const cardDisplay = document.getElementById('card-display');
let eraseCard = document.querySelector(".card button");



addBookBTN.addEventListener('click',openPopUp);
closeButton.addEventListener('click', closePopUp);
submitButton.addEventListener('click',()=>{
    if(addBookToLibrary()!==undefined) {
        myLibrary.push(addBookToLibrary())
        clear();
        closePopUp();
        
    }
    cardDisplay.textContent='';
    updateCardDisplay();
});




