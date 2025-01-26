let gameBoard = document.querySelector(".board");
let gameState = document.querySelector(".gameStatement");
let startButton = document.querySelector(".button");



let clickSound = new Audio("click12.aac");
let gameStart = new Audio("gamestart.mp3");
let victoryAudio = new Audio("vicAud.mp3");
let worngClick = new Audio("wrongclickTrimmed.wav");
let tieSound = new Audio("tie.mp3");


let gamePlay = false;

let turn = "X";

let count = 1;

startButton.addEventListener("click", function () {
    if (gamePlay == false) {
        gameStart.play();
        gameState.innerHTML = "X 's Turn "
        startButton.innerHTML = "Press to Reset"
        startButton.style.backgroundColor = "red";
    } else {

        clearAllBlocks();
        startButton.innerHTML = "Start"
        gameState.innerHTML = "";
        count = 1;
        turn = 'X';
        startButton.style.backgroundColor = "blue";

    }

    gamePlay = !gamePlay;
    //console.log(gamePlay);
})

gameBoard.addEventListener("click", function (event) {
    //console.log(event.target);

    let block = event.target;

    //console.log(block.innerHTML);

    if (gamePlay == true && block.innerHTML == "") {
        clickSound.play();
        block.innerHTML = turn;
        count++;

        if (turn == "X") {
            block.style.color = 'red';
            turn = "0";
        } else {
            block.style.color = 'blue';
            turn = "X";
        }

        gameState.innerHTML = turn + "'s turn ";

        if (winnerChecker() == 'X') {
            gameState.innerHTML = "X Wins the game "
            // startButton.click();
            // gamePlay = false;
            victoryAudio.play();
            resetingTheGame();

        } else if (winnerChecker() == '0') {
            gameState.innerHTML = "0 wins the game "
            //gamePlay = false;
            // startButton.click();
            victoryAudio.play();
            resetingTheGame();

        } else if (count == 10) {
            gameState.innerHTML = "TIE"
            // gamePlay = false;
            //startButton.click();
            tieSound.play();
            resetingTheGame();

        }
    }else{
        worngClick.play();
    }


})


function winnerChecker() {
    let blockArray = document.querySelectorAll('.cell');
    if ((blockArray[0].innerHTML == "X" && blockArray[1].innerHTML == "X" && blockArray[2].innerHTML == "X")
        || (blockArray[3].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[5].innerHTML == "X")
        || (blockArray[6].innerHTML == "X" && blockArray[7].innerHTML == "X" && blockArray[8].innerHTML == "X")
        || (blockArray[0].innerHTML == "X" && blockArray[3].innerHTML == "X" && blockArray[6].innerHTML == "X")
        || (blockArray[1].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[7].innerHTML == "X")
        || (blockArray[2].innerHTML == "X" && blockArray[5].innerHTML == "X" && blockArray[8].innerHTML == "X")
        || (blockArray[0].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[8].innerHTML == "X")
        || (blockArray[2].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[6].innerHTML == "X")) {
        return "X";
    }
    else if ((blockArray[0].innerHTML == "0" && blockArray[1].innerHTML == "0" && blockArray[2].innerHTML == "0")
        || (blockArray[3].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[5].innerHTML == "0")
        || (blockArray[6].innerHTML == "0" && blockArray[7].innerHTML == "0" && blockArray[8].innerHTML == "0")
        || (blockArray[0].innerHTML == "0" && blockArray[3].innerHTML == "0" && blockArray[6].innerHTML == "0")
        || (blockArray[1].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[7].innerHTML == "0")
        || (blockArray[2].innerHTML == "0" && blockArray[5].innerHTML == "0" && blockArray[8].innerHTML == "0")
        || (blockArray[0].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[8].innerHTML == "0")
        || (blockArray[2].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[6].innerHTML == "0")) {
        return "0";
    } else {
        return 1;
    }
}

function clearAllBlocks() {
    let blockArray = document.querySelectorAll('.cell');

    for (let i = 0; i < blockArray.length; i++) {
        blockArray[i].innerHTML = "";
    }
}

function resetingTheGame() {
    
    gamePlay = false;
    startButton.innerHTML = "Starting..."
    startButton.disabled = true;
    setTimeout(() => {
        startButton.disabled = false;
        // startButton.click();

        clearAllBlocks();
        startButton.innerHTML = "Start"
        gameState.innerHTML = "";
        count = 1;
        turn = 'X';
        startButton.style.backgroundColor = "blue";

    }, 3000);
}