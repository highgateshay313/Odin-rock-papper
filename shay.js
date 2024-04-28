
//Function for computer choice
function getComputerChoice() {
   
   let option = ["Rock", "Papper", "Scissors"]
   let choice = option[Math.floor(Math.random() * option.length)];
   
   const outPut = document.querySelector(".playersOutPut")
   const para = document.createElement("p")
   para.textContent = `Computer has selected: ${choice}!!`
   para.style.color = "white"
   para.style.textAlign = "center"
   para.style.paddingTop = "25px"
   outPut.appendChild(para)
   return choice
};

let com = getComputerChoice()
let player = playerSelection()

//Function for user choice
function playerSelection() {
   const Rock = document.querySelector(".rock")
const Papper = document.querySelector(".papper")
const Scissors = document.querySelector(".scissors")

Rock.addEventListener("click", () => {
   const outPut = document.querySelector(".playersOutPut")
   const para = document.createElement("p")
   para.textContent = "Player has selected: Rock!"
   para.style.color = "orange"
   para.style.textAlign = "center"
   para.style.padding = "10px"
   outPut.appendChild(para)
})

Papper.addEventListener("click", () => {
   const outPut = document.querySelector(".playersOutPut")
   const para = document.createElement("p")
   para.textContent = "Player has selected: Papper!"
   para.style.color = "orange"
   para.style.textAlign = "center"
   para.style.padding = "10px"
   outPut.appendChild(para)

})

Scissors.addEventListener("click", () => {
   const outPut = document.querySelector(".playersOutPut")
   const para = document.createElement("p")
   para.textContent = "Player has selected: Scissors!"
   para.style.color = "orange"
   para.style.textAlign = "center"
   para.style.padding = "10px"
   outPut.appendChild(para)
})
}







