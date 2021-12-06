
//variables
let table = document.getElementById('table');
let myLibrary = [];

const createBook = document.getElementById('createBookBtn');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const readInput = document.getElementById('readInput');

//default book list in library array
const dragonBall = new Book('Dragon Ball', 'Akira Toriyama', 'Read');
const kingInBlack = new Book('King In Black', 'Donny Cates', 'Read');
myLibrary.push(dragonBall, kingInBlack);

//eventlisteners
createBook.addEventListener('click', addBookToLibrary);

//loops the array then insert objects inside table
for(let obj of myLibrary){
    let row = table.insertRow();
    row.insertCell().textContent = obj.title;
    row.insertCell().textContent = obj.author;
    row.insertCell().innerHTML = `<button class='readBtn' onclick="change(this)">${obj.read}</button> <button class="deleteBtn" onclick='removeRow(this)'>X</button>`
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
 row.insertCell().innerHTML = `<button class='readBtn' onclick='change(this)'>${readInput.value.toUpperCase()}</button> <button class="deleteBtn" onclick='removeRow(this)'>X</button>`;

 closeForm();
 titleInput.value = '';
 authorInput.value = '';
 readInput.value = '';
}

function removeRow(button){
    let r = button.parentNode.parentNode.rowIndex;
    document.getElementById('table').deleteRow(r);
}

function change(button){
    if(button.innerHTML === 'READ'){
        button.innerHTML = 'NOT READ';
    } else{
        button.innerHTML = 'READ';
    }
}

function openForm(){
    document.getElementById('newBookForm').style.display = 'block';
}

function closeForm(){
    document.getElementById('newBookForm').style.display = 'none';
}

console.table(myLibrary);