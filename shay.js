function getComputerChoice() {
    const result = Math.floor(Math.random() * 3) + 1;
    if (result === 1) {
        console.log("Rock")
    }else if (result === 2) {
        console.log("Papper")
    }else if (result === 3) {
        console.log("Scissors")
    }
}

function playerChoice() {
    let human = prompt("Select: Rock, Papper, or Scissors");8
    return human;
    
}

function playRound(com, player) {
     com = getComputerChoice()
     player = playerChoice()
    
     if (com === 1 && player === "Papper") {
        console.log("Papper beats Rock: Player Wins!!")
     }else if (player === "Rock" && com === 2) {
        console.log("Papper beats Rock: Computer Wins!!")
     }else if (com === 2 && player === "Scissors" ) {
        console.log("Scissors beats Papper: Player Wins!!")
     }else if (player === "Papper" && com === 3) {
        console.log("Scissors beats Papper: Computer Wins!!")
     }else if (com === 3 && player === "Rock") {
        console.log("Rock beats Scissors: Player Wins!!")
     }else if (player === "Scissors" && com === 1) {
        console.log("Rock beats Scissors: Computer Wins!!")
     }else{
        console.log("It's a Tie!!")
     }
}


console.log(playRound())