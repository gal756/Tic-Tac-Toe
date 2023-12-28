function resetGameStatus(){
    activePlayer=0;
    currentRound=1;
    gameIsOver=false;
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display='none';
    let gameBoardIndex = 0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++)
        {
            gameData[i][j]=0;
            gameBoardElement.children[gameBoardIndex].textContent='';
            gameBoardElement.children[gameBoardIndex].classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}
function startNewGAME() {
    if (players[0].name == '' || players[1].name == '') {
        alert('Please set custom player name for both players!');
        return;
    }
    resetGameStatus();
    activePlayerName.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}


function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    }
    else {
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if (event.target.tagName != 'LI' || gameIsOver)
        return;
    const selectedCol = event.target.dataset.col - 1;
    const selectedRow = event.target.dataset.row - 1;
    if (gameData[selectedRow][selectedCol] > 0) {
        alert("please select a empty field");
        return;
    }
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    gameData[selectedRow][selectedCol] = activePlayer + 1;
    const winnerId= checkForGameOver();
    if(winnerId!==0)
        endGame(winnerId);
    currentRound++;
    switchPlayer();
}

function checkForGameOver() {
    //check rows and col
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] == gameData[i][2])
            return gameData[i][0];
        if (gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[1][i] == gameData[2][i])
            return gameData[0][i];
    }
    //check for slant
    if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] == gameData[2][2])
        return gameData[0][0];
    if (gameData[2][0] > 0 && gameData[2][0] === gameData[1][1] && gameData[1][1] == gameData[0][2])
        return gameData[2][0];
    // no round left
    if (currentRound === 9) {
        return -1;
    }
    //not game over
    return 0;
}

function endGame(winnerId){
    gameIsOver = true;
    gameOverElement.style.display= 'block';
    if (winnerId>0)
        gameOverElement.firstElementChild.firstElementChild.textContent = players[winnerId-1].name;
    else
        gameOverElement.firstElementChild.textContent = 'it\'s a draw!';
}