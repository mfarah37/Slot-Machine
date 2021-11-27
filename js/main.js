/*----- constants -----*/
const seven = document.createElement("img")
seven.src = "imgs/seven.png" 
const cherry = document.createElement("img")
cherry.src = "imgs/cherry.png"
const heart = document.createElement("img")
heart.src = "imgs/heart.png" 

const winningCombos = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2]
]
/*----- app's state (variables) -----*/
let board; 

// let randomNumber = Math.floor(Math.random() * 3);
// console.log(randomNumber)
/*----- cached element references -----*/
const slotOne = document.getElementById('slot1')
const slotTwo = document.getElementById('slot2')
const slotThree = document.getElementById('slot3')
const resultEl = document.querySelector('h2');
const buttonEl = document.querySelector('button')

/*----- event listeners -----*/
buttonEl.addEventListener('click', pullLever)


/*----- functions -----*/
function init() {
    board = [null, null, null];
    // slotOne.addEventListener('click', pullLever)
    // slotTwo.addEventListener('click', pullLever)
    // slotThree.addEventListener('click', pullLever)
}
function pullLever() {
    // board = [
    //     Math.floor(Math.random() * 3),
    //     Math.floor(Math.random() * 3),
    //     Math.floor(Math.random() * 3)
    // ];
    renderSlotOne();
    renderSlotTwo();
    renderSlotThree();
    checkWin()
}
function checkWin() {
    if (everyHelper(board, winningCombos[0])) {
           renderJackpotMessage()
       } else if (everyHelper(board, winningCombos[1])) {
           renderWinningMessage()
       } else if (everyHelper(board, winningCombos[2])) {
       } else {
           renderLosingMessage()
       }
} 
function renderSlotOne() {
    if (board[0] === 0) {
        slotOne.replaceWith(seven)
    } else if (board[0] === 1) {
        slotOne.replaceWith(cherry)
    } else if (board[0] === 2) {
        slotOne.replaceWith(heart)
    }
} 

function renderSlotTwo() {
    if (board[1] === 0) {
        slotTwo.replaceWith(seven)
    } else if (board[1] === 1) {
        slotTwo.replaceWith(cherry)
    } else if (board[1] === 2) {
        slotTwo.replaceWith(heart)
    }
}
function renderSlotThree() {
    if (board[2] === 0) {
        slotThree.replaceWith(seven)
    } else if (board[2] === 1) {
        slotThree.replaceWith(cherry)
    } else if (board[2] === 2) {
        slotThree.replaceWith(heart)
    }
}
//Result Prompts
function renderJackpotMessage() {
    resultEl.innerText = "$$$$$ JACKPOT $$$$$"
}
function renderLosingMessage() {
    resultEl.innerText = "YOU LOST :( TRY AGAIN?"
}
function renderWinningMessage() {
    resultEl.innerText = "YOU WIN :) PLAY AGAIN?"
}
board = [0, 0, 0]
console.log(board)
// console.log(winningCombos[0])

// helper functions
function everyHelper(array, winCombo) {
    return array.every((num, idx) => num === winCombo[idx])
}
