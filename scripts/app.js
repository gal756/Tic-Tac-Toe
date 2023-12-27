const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
    {
        name: '',
        symbol:'X'
    },
    {
        name: '',
        symbol:'O'
    }
];
const playerConfigOverlay = document.getElementById('config-overlay');
const backdropObject = document.getElementById('backdrop');
const formElement = document.getElementById('form');
const errorOutputElement = document.getElementById('config-errors');
const editPlayer1BtnElement = document.getElementById('edit-player1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');
const startNewGameBtn = document.getElementById('start-game-btn');
const gameAreaElement = document.getElementById('active-game');
//const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');
const activePlayerName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig);
backdropObject.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);

startNewGameBtn.addEventListener('click',startNewGAME);

//for (const gameFieldElement of gameFieldElements){
    gameAreaElement.addEventListener('click',selectGameField);
//}
gameAreaElement.addEventListener('click',selectGameField);