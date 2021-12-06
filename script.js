
//variables
let table = document.getElementById('table');
let myLibrary = [];

const createBook = document.getElementById('createBookBtn');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const readInput = document.getElementById('readInput');
const readBtn = document.getElementById('readBtn');

//default book list in library array
const dragonBall = new Book('Dragon Ball', 'Akira Toriyama', 'Read');
const onePiece = new Book('One Piece', 'Eiichiro Oda', 'Read');
const kingInBlack = new Book('King In Black', 'Donny Cates', 'Read');
myLibrary.push(dragonBall, onePiece, kingInBlack);

//eventlisteners
createBook.addEventListener('click', addBookToLibrary);

//loops the array then insert objects inside table
for(let obj of myLibrary){
    let row = table.insertRow();
    row.insertCell().textContent = obj.title;
    row.insertCell().textContent = obj.author;
    row.insertCell().innerHTML = `<button id='readBtn'>${obj.read}</button>`
}

//functions
function Book(title, author, read){
 this.title = title.toUpperCase();
 this.author = author.toUpperCase();
 this.read = read.toUpperCase();
}

function addBookToLibrary(newBook){
 newBook = new Book(titleInput.value, authorInput.value, readInput.value);
 myLibrary.push(newBook);

 let row = table.insertRow();
 row.insertCell().textContent = titleInput.value.toUpperCase();
 row.insertCell().textContent = authorInput.value.toUpperCase();
 row.insertCell().innerHTML = `<button id='readBtn'>${readInput.value.toUpperCase()}</button>`;

 closeForm();
 titleInput.value = '';
 authorInput.value = '';
 readInput.value = '';
}

function openForm(){
    document.getElementById('newBookForm').style.display = 'block';
}

function closeForm(){
    document.getElementById('newBookForm').style.display = 'none';
}

console.table(myLibrary);