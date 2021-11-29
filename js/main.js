/*----- constants -----*/
const seven = document.createElement("img")
seven.src = "imgs/seven.png" 
const cherry = document.createElement("img")
cherry.src = "imgs/cherry.png"
const heart = document.createElement("img")
heart.src = "imgs/heart.png" 

const seven2 = document.createElement("img")
seven2.src = "imgs/seven.png" 
const cherry2 = document.createElement("img")
cherry2.src = "imgs/cherry.png"
const heart2 = document.createElement("img")
heart2.src = "imgs/heart.png" 

const seven3 = document.createElement("img")
seven3.src = "imgs/seven.png" 
const cherry3 = document.createElement("img")
cherry3.src = "imgs/cherry.png"
const heart3 = document.createElement("img")
heart3.src = "imgs/heart.png" 

const winningCombos = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2]
]
/*----- app's state (variables) -----*/
let board; 

/*----- cached element references -----*/
const resultEl = document.querySelector('h2');
const buttonEl = document.getElementById('btn')
const buttonEl2 = document.getElementById('btn2')
const slotOne = document.getElementById('slot1')
const slotTwo = document.getElementById('slot2')
const slotThree = document.getElementById('slot3')
const imgOne = document.getElementById('one')
const imgTwo = document.getElementById('two')
const imgThree = document.getElementById('three')
/*----- event listeners -----*/
buttonEl.addEventListener('click', pullLever)
buttonEl2.addEventListener('click', init)

/*----- functions -----*/
init()
function init() {
    board = [null, null, null]
    slotOne.replaceChildren(imgOne)
    slotTwo.replaceChildren(imgTwo)
    slotThree.replaceChildren(imgThree)
}
function pullLever() {
    board = [
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3)
    ];
    renderSlotOne()
    renderSlotTwo()
    renderSlotThree()
    checkWin()
} 
function checkWin() {
    if (everyHelper(board, winningCombos[0])) {
           renderJackpotMessage()
       } else if (everyHelper(board, winningCombos[1])) {
           renderWinningMessage()
       } else if (everyHelper(board, winningCombos[2])) {
           renderWinningMessage()
       } else {
           renderLosingMessage()
       }
} 
function renderSlotOne() {
    if (board[0] === 0) {
        imgOne.replaceWith(seven)
    } else if (board[0] === 1) {
        imgOne.replaceWith(cherry)
    } else if (board[0] === 2) {
        imgOne.replaceWith(heart)
    } 
} 
function renderSlotTwo() {
    if (board[1] === 0) {
        imgTwo.replaceWith(seven2)
    } else if (board[1] === 1) {
        imgTwo.replaceWith(cherry2) 
    } else if (board[1] === 2) {
        imgTwo.replaceWith(heart2)
    }
}
function renderSlotThree() {
    if (board[2] === 0) {
        imgThree.replaceWith(seven3)
    } else if (board[2] === 1) {
        imgThree.replaceWith(cherry3)
    } else if (board[2] === 2) {
        imgThree.replaceWith(heart3)
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

// helper functions
function everyHelper(array, winCombo) {
    return array.every((num, idx) => num === winCombo[idx])
}
