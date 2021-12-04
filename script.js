
//variables
let table = document.getElementById('table');
let myLibrary = [];

const createBook = document.getElementById('createBookBtn');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const readInput = document.getElementById('readInput');

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
    row.insertCell().textContent = obj.read;
}

//functions
function Book(title, author, read){
 this.title = title;
 this.author = author;
 this.read = read;
 this.info = function(){
     return title + ' by ' +  author + ', ' + read;
 }
}

function addBookToLibrary(newBook){
 newBook = new Book(titleInput.value, authorInput.value, readInput.value);
 myLibrary.push(newBook);

 let row = table.insertRow();
 row.insertCell().textContent = titleInput.value;
 row.insertCell().textContent = authorInput.value;
 row.insertCell().textContent = readInput.value;

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

console.log(myLibrary);