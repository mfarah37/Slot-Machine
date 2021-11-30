/*----- constants -----*/
const seven = 'imgs/seven.png'
const cherry = 'imgs/cherry.png'
const heart = 'imgs/heart.png'
const diamond = 'imgs/diamond.png'
const winningCombos = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
]
/*----- app's state (variables) -----*/
let board, wallet;

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
buttonEl2.addEventListener('click', init)

/*----- functions -----*/
init()
function init() {
    board = [null, null, null]
    buttonEl.addEventListener('click', pullLever)
    wallet = 5000
    walletEl.innerText = `$${wallet}`
    slotOne.replaceChildren()
    slotTwo.replaceChildren()
    slotThree.replaceChildren()
    resultEl.innerText = ''
}
function pullLever() {
    board = [
        Math.floor(Math.random() * 4),
        Math.floor(Math.random() * 4),
        Math.floor(Math.random() * 4)
    ];
    wallet = wallet - 250
    renderSlotOne()
    renderSlotTwo()
    renderSlotThree()
    updateWinnings()
    checkWin()
    checkWallet()
}
//Check Win & Wallet
function checkWin() {
    if (everySlot(board, winningCombos[0])) {
        renderJackpotMessage()
    } else if (everySlot(board, winningCombos[1])) {
        renderWinningMessage()
    } else if (everySlot(board, winningCombos[2])) {
        renderWinningMessage()
    } else if (everySlot(board, winningCombos[3])) {
        renderWinningMessage()
    } else {
        renderLosingMessage()
    }
}
function checkWallet() {
    if (wallet === 0) {
        buttonEl.removeEventListener('click', pullLever)
    }
}
//Render Slots
function renderSlotOne() {
    if (board[0] === 0) {
        imgOne.src = seven
    } else if (board[0] === 1) {
        imgOne.src = cherry
    } else if (board[0] === 2) {
        imgOne.src = heart
    } else if (board[0] === 3) {
        imgOne.src = diamond
    }
    slotOneImg()
}
function renderSlotTwo() {
    if (board[1] === 0) {
        imgTwo.src = seven
    } else if (board[1] === 1) {
        imgTwo.src = cherry
    } else if (board[1] === 2) {
        imgTwo.src = heart
    } else if (board[1] === 3) {
        imgTwo.src = diamond
    }
    slotTwoImg() 
}
function renderSlotThree() {
    if (board[2] === 0) {
        imgThree.src = seven
    } else if (board[2] === 1) {
        imgThree.src = cherry
    } else if (board[2] === 2) {
        imgThree.src = heart
     } else if (board[2] === 3) {
        imgThree.src = diamond
    }
    slotThreeImg()
}
//Update Wallet
function updateWinnings() {
    if (everySlot(board, winningCombos[0])) {
        wallet = wallet + 10000
    } else if (everySlot(board, winningCombos[1])) {
        wallet = wallet + 500
    } else if (everySlot(board, winningCombos[2])) {
        wallet = wallet + 250
    } else if (everySlot(board, winningCombos[3])) {
        wallet = wallet + 1000
    }
    walletEl.innerText =  `$${wallet}`
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
// Helper Function
function everySlot(array, winCombo) {
    return array.every((num, idx) => num === winCombo[idx])
}
function slotOneImg() {
    slotOne.append(imgOne)
}
function slotTwoImg() {
    slotTwo.append(imgTwo)
}
function slotThreeImg() {
    slotThree.append(imgThree)
}
