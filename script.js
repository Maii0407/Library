
//variables
let table = document.getElementById('table');
let myLibrary = [];

const dragonBall = new Book('Dragon Ball', 'Akira Toriyama', '42 Vols', 'Read');
const onePiece = new Book('One Piece', 'Eiichiro Oda', '101 Vols - ongoing', 'Read');
const kingInBlack = new Book('King In Black', 'Donny Cates', '5 Vols', 'Read');
myLibrary.push(dragonBall, onePiece, kingInBlack);

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

function addBookToLibrary(){
 
}

function openForm(){
    document.getElementById('newBookForm').style.display = 'block';
}

function closeForm(){
    document.getElementById('newBookForm').style.display = 'none';
}

console.log(myLibrary);