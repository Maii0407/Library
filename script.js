
//variables
let table = document.getElementById('table');
let myLibrary = [];

const createBook = document.getElementById('createBookBtn');

//default book list in library array
const dragonBall = new Book('Dragon Ball', 'Akira Toriyama', '42 Vols', 'Read');
const onePiece = new Book('One Piece', 'Eiichiro Oda', '101 Vols - ongoing', 'Read');
const kingInBlack = new Book('King In Black', 'Donny Cates', '5 Vols', 'Read');
myLibrary.push(dragonBall, onePiece, kingInBlack);

//eventlisteners
createBook.addEventListener('click', addBookToLibrary);

//loops the array then insert objects inside table
for(let obj of myLibrary){
    let row = table.insertRow();
    row.insertCell().textContent = obj.title;
    row.insertCell().textContent = obj.author;
    row.insertCell().textContent = obj.pages;
    row.insertCell().textContent = obj.read;
}

//functions
function Book(title, author, pages, read){
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
 this.info = function(){
     return title + ' by ' +  author + ', ' + pages + ', ' + read;
 }
}

function addBookToLibrary(newBook){
 let titleInput = document.getElementById('titleInput');
 let authorInput = document.getElementById('authorInput');
 let pagesInput = document.getElementById('pagesInput');
 let readInput = document.getElementById('readInput');

 newBook = new Book(titleInput.innerText, authorInput.innerText, pagesInput.innerText, readInput.innerText);
 myLibrary.push(newBook);
}

function openForm(){
    document.getElementById('newBookForm').style.display = 'block';
}

function closeForm(){
    document.getElementById('newBookForm').style.display = 'none';
}

console.log(myLibrary);