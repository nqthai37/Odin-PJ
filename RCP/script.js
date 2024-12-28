var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let rand = Math.random();
    if(rand <=1/3) return "rock";
    if (rand<= 2/3) return "paper";
    return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
    // input validation

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);

    if(playerSelection === computerSelection) return "tie";
    if(playerSelection === "rock") {
        if(computerSelection === "scissors") return "win";
        return "lose";
    }
    if(playerSelection === "paper") {
        if(computerSelection === "rock") return "win";
        return "lose";
    }
    if(playerSelection === "scissors") {
        if(computerSelection === "paper") return "win";
        return "lose";
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
if (playRound(getHumanChoice(), getComputerChoice()) === "win") {
    playerScore++;
} else {
    computerScore++;
}
console.log("Player: " + playerScore + " Computer: " + computerScore);
}}
