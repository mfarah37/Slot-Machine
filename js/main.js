/*----- constants -----*/
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
let board, win, turn;

/*----- cached element references -----*/
const slots = document.querySelectorAll('td div');
const resultEl = document.querySelector('h2');
const buttonEl = document.querySelector('button')
/*----- event listeners -----*/
buttonEl.addEventListener('click', hi())

/*----- functions -----*/
function init () {
    board = [null, null, null]
}
function hi(){
    return "hello"
}