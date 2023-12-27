let editedPlayer = 0;
const players = [
    {
        name: '',
        symbol:'X'
    },
    {
        name: '',
        symbol:'O'
    }
]
const playerConfigOverlay = document.getElementById('config-overlay');
const backdropObject = document.getElementById('backdrop');
const formElement = document.getElementById('form');
const errorOutputElement = document.getElementById('config-errors');

const editPlayer1BtnElement = document.getElementById('edit-player1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig);
backdropObject.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);