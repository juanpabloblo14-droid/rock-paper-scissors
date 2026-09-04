//DOM ELEMENTS 
const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");
const user = document.getElementById("userChoice");
const computer = document.getElementById("computerChoice");
const result = document.getElementById("resultText");

//ARRRAY
let gameArray = [
    "rock", "paper", "scissors"
];

//BUTTON FUNCTIONS
function playGame(userChoice) {
    console.log(userChoice);
    let randomIndex = Math.floor(Math.random() * gameArray.length)
    let computerChoice = gameArray[randomIndex];
    console.log(computerChoice);
    if (userChoice === computerChoice) {
        result.textContent = "draw";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock"))
    {
        result.textContent = "win";
    }
    else{
        result.textContent = "lose";
    }
};

//EVENT LISTENER 
rock.addEventListener("click", function () {
    playGame("rock");
})
scissors.addEventListener("click", function () {
    playGame("scissors");
})
paper.addEventListener("click", function () {
    playGame("paper");
});


