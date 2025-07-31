let startBtn = document.querySelector(".start-btn")
let scrollSegment = document.querySelector(".game-container")
let gameName = document.querySelector(".game-name")
let scoreOfP = document.querySelector(".player-score")
let scoreOfC = document.querySelector(".comp-score")
let resetBtn = document.querySelector(".reset-btn")
let playerScore = 0;
let compScore = 0;
let choices = ["rock", "paper", "scissor"]

// To Scroll into game segment 

startBtn.addEventListener("click", () => {
    scrollSegment.scrollIntoView({
        behavior: "smooth"
    })
})

// To reset game 

resetBtn.addEventListener("click", () => {
    gameName.innerText = "Rock Paper Scissors"
    gameName.style.color = "black"
    gameName.style.fontSize = "5vmin"
    scoreOfC.innerText = "0"
    scoreOfP.innerText = "0"
    playerScore = 0;
    compScore = 0;
})


let playerChoice = document.querySelectorAll(".game-icons img")
playerChoice.forEach((choice, index) => {
    choice.addEventListener("click", () => {
        const playerMove = choices[index]
        const random = Math.floor(Math.random() * 3);
        const compMove = choices[random]
        console.log(`players choice is ${playerMove} and computer choice is ${compMove}`)
        if ((playerMove === "rock" && compMove === "scissor") || (playerMove === "paper" && compMove === "rock") || (playerMove === "scissor" && compMove === "paper")) {
            gameName.innerText = `You Wins! Your ${playerMove} beats computer's ${compMove}`
            gameName.style.color = "green"
            gameName.style.fontSize = "4vmin"
            playerScore++;
            scoreOfP.innerText = playerScore
        } else if (playerMove === compMove) {
            gameName.innerText = "It's a Draw"
            gameName.style.color = "orange"
        } else {
            gameName.innerText =  `You Lose! Computer's ${compMove} beats your ${playerMove} `
            gameName.style.color = "red"
            gameName.style.fontSize = "4vmin"
            compScore++;
            scoreOfC.innerText = compScore;
        }
    })
})


