
//Function for computer choice
function getComputerChoice() {
   let option = ["Rock", "Papper", "Scissors"]
   let choice = option[Math.floor(Math.random() * option.length)].toUpperCase();
   return choice
};

//Function for user choice
function playerChoice() {
    let human = prompt("Select: Rock, Papper, or Scissors").toUpperCase();
   //  human.toLocaleLowerCase()
    return human;
    
};

//Function to play a round
function playRound(com, player) {
   let computer = com
   let players = player
   

   computer = getComputerChoice();
   players = playerChoice();
   
   let comScore = 0
   let playerScore = 0

   for (let i = 0; i < comScore, playerScore; i++) {
      comScore = comScore + 1
      playerScore = playerScore + 1
   }

   let result;
   if (computer === "ROCK" && players === "SCISSORS") {
      // result = `You Lose!! ${computer} beats ${players}`;
      comScore = comScore += 1;
   }else if (computer === "PAPPER" && players === "ROCK") {
      // result = `You Lose!! ${computer} beats ${players}`;
      comScore = comScore += 1;
   }else if (computer === "SCISSORS" && players === "PAPPER") {
      // result = `You Lose!! ${computer} beats ${players}`;
      comScore = comScore += 1;
   }else if (players === "ROCK" && computer === "SCISSORS") {
      // result = `YOU Win!! ${players} beats ${computer}`;
      playerScore = playerScore += 1;
   }else if (players === "PAPPER" && computer === "ROCK") {
      // result = `YOU Win!! ${players} beats ${computer}`;
      playerScore = playerScore += 1;
   }else if (players === "SCISSORS" && computer === "PAPPER") {
      // result = `YOU Win!! ${players} beats ${computer}`;
      playerScore = playerScore += 1;
   }else{
      result = `Its a tie!! ${computer} is the same as ${players}`
   }

      let score;
   if (playerScore > comScore) {
      score = `${players} beats ${computer} You are the winner ${playerScore} ${comScore}`
     
   }else{
      score = `${computer} beats ${players} You Lose!! ${comScore} ${playerScore}`
   }
  
      return result, score

 };

 //Function to play a full game up to five rounds
function playGame() {

 

   
}

console.log(playGame())

