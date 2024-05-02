const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const playerSelection = [rockBtn, paperBtn, scissorsBtn]
const gameChoice = ["Rock", "Paper", "Scissors"]
const playerPoints = document.querySelector("#playerPoints")
const computerPoints = document.querySelector("#comPoints")
const playerResult = document.querySelector(".first")
const computerResults = document.querySelector(".second")
const round = document.querySelector("#roundNum")



let playerChoice = ""
let computerChoice = ""
let playerScore = 0
let computerScore = 0
let rounds = 1

let currentChoice = 0

let gameChoices = gameChoice

 

function playGame() {
   let shuffelId = setInterval(computerShuffel, 150)

   
   playerSelection.forEach(Option => {
      Option.addEventListener("click", (e) => {
         round.textContent = rounds++

      
         clearInterval(shuffelId)
         
         playerChoice = e.target.textContent
         // playerResult.append(playerChoice)
         playerResult.textContent = playerChoice

         gameWinner()
         
        
      })
      
   })

   function computerShuffel() {
      computerChoice = gameChoice[currentChoice]
      // computerResults.append(gameChoices)
      computerResults.textContent = computerChoice

      if (currentChoice < gameChoice.length -1) {
         currentChoice++;
      }else{
         currentChoice = 0;
      }

   }

   function gameWinner() {
      const theWinner = document.querySelector(".winnerText")
      let champion = ""
      // theWinner.append(champion)
         

      if (playerChoice === computerChoice) {
         champion = "It's a Tie"
      }else if (playerChoice === "Rock" && computerChoice === "scissors") {
         champion = "Player Wins"
         playerScore++
      }else if (playerChoice === "Paper" && computerChoice === "Rock") {
         champion = "Player Wins"
         playerScore++
      }else if (playerChoice === "Scissors" && computerChoice === "Paper") {
         champion = "Player Wins"
         playerScore++
      }else{
         champion = "Computer Wins"
         computerScore++
      }
      playerPoints.textContent = playerScore
      computerPoints.textContent= computerScore
      theWinner.textContent = champion;
   }

 
   
}
playGame(5)

























