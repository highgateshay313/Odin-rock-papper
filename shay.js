const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const playerSelection = [rockBtn, paperBtn, scissorsBtn]
const gameChoice = ["Rock", "Paper", "Scissors"]
const playerPoints = document.querySelector("#playerPoints")
const computerPoints = document.querySelector("#comPoints")
const playerResult = document.querySelector(".first")
const computerResults = document.querySelector(".second")



let choice = ""
let playerScore = 0
let computerScore = 0

let currentChoice = 0

let gameChoices = gameChoice

 

function playGame() {
   let shuffelId = setInterval(computerShuffel, 150)
   
   playerSelection.forEach(Option => {
      Option.addEventListener("click", (e) => {
         
         clearInterval(shuffelId)
         
         choice = e.target.innerHTML
         playerResult.append(choice)
         playerResult.innerHTML = choice
         
         
        
      })
      gameWinner()
   })

   function computerShuffel() {
      gameChoices = gameChoice[currentChoice]
      computerResults.append(gameChoices)
      computerResults.innerHTML = gameChoices

      if (currentChoice < gameChoice.length -1) {
         currentChoice++;
      }else{
         currentChoice = 0;
      }

   }

   function gameWinner() {
      const theWinner = document.querySelector(".winnerText")
      let champion = ""
      theWinner.append(champion)
         theWinner.innerHTML = champion

      if (playerResult == computerResults) {
         champion = "It's a Tie"
      }else{
         champion = "It works"
      }
   }
   
}
playGame()

























