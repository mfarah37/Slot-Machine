/*----- constants -----*/
const seven = 'https://as2.ftcdn.net/v2/jpg/02/89/44/85/1000_F_289448550_5py2qUkakgdESICRz3gpCBZl2t9Q7Ud3.jpg'
const cherry = 'https://cdn4.iconfinder.com/data/icons/slot-machines/512/Cherry-1024.png'
const heart = 'https://cdn1.iconfinder.com/data/icons/casino-smooth-vol-2/256/HEART-1024.png'
const score = {
    0: seven,
    1: cherry,
    2: heart
}


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
    checkWin()
}
function checkWin() {
    if (board === winningCombos[0]) {
           renderJackpotMessage()
       } else if (board === winningCombos[1] || board === winningCombos[2]) {
           renderWinningMessage()
       } else {
           renderLosingMessage()
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
console.log(winningCombos[0])