/*----- constants -----*/
const seven = 'https://as2.ftcdn.net/v2/jpg/02/89/44/85/1000_F_289448550_5py2qUkakgdESICRz3gpCBZl2t9Q7Ud3.jpg'
const score = {
    0: 'seven',
    1: 'cherry',
    2: 'heart'
}
const winningCombos = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2]
]
/*----- app's state (variables) -----*/
let board, win;

// let randomNumber = Math.floor(Math.random() * 3);
// console.log(randomNumber)
/*----- cached element references -----*/
const slotsEl = document.querySelector('td div');
const resultEl = document.querySelector('h2');
const buttonEl = document.querySelector('button')
/*----- event listeners -----*/
buttonEl.addEventListener('click', pullLever)

/*----- functions -----*/
function init() {
    board = [null, null, null];
    slotsEl.addEventListener('click', pullLever)
    win = null;
    // render();
}
function pullLever() {
    
}
function result() {
    resultEl.innerText = "HI"
}



