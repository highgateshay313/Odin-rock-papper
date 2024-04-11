function getComputerChoice() {
   let option = ["Rock", "Papper", "Scissors"]
   let choice = option[Math.floor(Math.random() * option.length)].toUpperCase();
   return choice
}

function playerChoice() {
    let human = prompt("Select: Rock, Papper, or Scissors").toUpperCase();
   //  human.toLocaleLowerCase()
    return human;
    
}

function playRound(com, player) {
   let computer = com
   let players = player
   

   computer = getComputerChoice();
   players = playerChoice();

   let result = `You Lose!! ${computer} beats ${players} `;
   return result

 }


console.log(playRound())