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

console.log(getComputerChoice())