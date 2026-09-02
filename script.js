//DOM ELEMENTS 
const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");
const user = document.getElementById("userChoice");
const computer = document.getElementById("computerChoice");
const result = document.getElementById("resultText");

//BUTTON FUNCTIONS
function playGame(userChoice){
    console.log(userChoice);
}

//EVENT LISTENER 
rock.addEventListener("click", function(){
    playGame("rock");
})
scissors.addEventListener("click", function(){
    playGame("scissors");
} )
paper.addEventListener("click", function(){
    playGame("paper");
})
