/*----- constants -----*/
let seven = 'imgs/seven.png'
let cherry = 'imgs/cherry.png'
let heart = 'imgs/heart.png'
let wallet = 3000
const winningCombos = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2]
]
/*----- app's state (variables) -----*/
let board;

/*----- cached element references -----*/
let walletEl = document.getElementById('wallet')
const resultEl = document.querySelector('h2');
const buttonEl = document.getElementById('btn')
const buttonEl2 = document.getElementById('btn2')
const slotOne = document.getElementById('slot1')
const slotTwo = document.getElementById('slot2')
const slotThree = document.getElementById('slot3')
const imgOne = document.createElement('img')
const imgTwo = document.createElement('img')
const imgThree = document.createElement('img')
/*----- event listeners -----*/
buttonEl.addEventListener('click', pullLever)
buttonEl2.addEventListener('click', init)

/*----- functions -----*/
init()
function init() {
    board = [null, null, null]
    wallet = 3000
    slotOne.replaceChildren()
    slotTwo.replaceChildren()
    slotThree.replaceChildren()
    resultEl.innerText = ''
}
function pullLever() {
    board = [
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3)
    ];
    wallet = wallet - 250
    walletEl
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
        imgOne.src = seven
        slotOne.append(imgOne)
    } else if (board[0] === 1) {
        imgOne.src = cherry
        slotOne.append(imgOne)
    } else if (board[0] === 2) {
        imgOne.src = heart
        slotOne.append(imgOne)
    }
}
function renderSlotTwo() {
    if (board[1] === 0) {
        imgTwo.src = seven
        slotTwo.append(imgTwo)
    } else if (board[1] === 1) {
        imgTwo.src = cherry
        slotTwo.append(imgTwo)
    } else if (board[1] === 2) {
        imgTwo.src = heart
        slotTwo.append(imgTwo)
    }
}
function renderSlotThree() {
    if (board[2] === 0) {
        imgThree.src = seven
        slotThree.append(imgThree)
    } else if (board[2] === 1) {
        imgThree.src = cherry
        slotThree.append(imgThree)
    } else if (board[2] === 2) {
        imgThree.src = heart
        slotThree.append(imgThree)
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
