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

   let result;
   if (computer === "ROCK" && players === "SCISSORS") {
      result = `You Lose!! ${computer} beats ${players}`
   }else if (computer === "PAPPER" && players === "ROCK") {
      result = `You Lose!! ${computer} beats ${players}`
   }else if (computer === "SCISSORS" && players === "PAPPER") {
      result = `You Lose!! ${computer} beats ${players}`
   }else if (players === "ROCK" && computer === "SCISSORS") {
      result = `YOU Win!! ${players} beats ${computer}`
   }else if (players === "PAPPER" && computer === "ROCK") {
      result = `YOU Win!! ${players} beats ${computer}`
   }else if (players === "SCISSORS" && computer === "PAPPER") {
      result = `YOU Win!! ${players} beats ${computer}`
   }else{
      result = `Its a tie!! ${computer} is the same as ${players}`
   }
   return result

 }


console.log(playRound())