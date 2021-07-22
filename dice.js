let dieValue = []
let score = 0
let lineScore = 0
let turn = 0

function randomDie() {
    return Math.floor( Math.random() * 6 ) + 1
}

function displayDie(num, value) {
    let die = document.getElementById(num)
    die.innerText = value
}

function updateDie() {
    for(let i=1; i<6; i++) {
        if(document.getElementById(i).classList.contains("checked")) continue
        let r = randomDie()
        displayDie(i, r)
        dieValue[i] = r
    }
    console.log(dieValue)
}
function updateScore() {
    for(let i=1; i<6; i++) {
        let h=document.getElementById(i)
        console.log(h)
        if (h.classList.contains("checked")) {h.classList.toggle("checked")}
        h.removeEventListener("click", toggleDie, false)
        h.removeAttribute("id")
    }

    checkLineScore()
    dieValue.length = 0
    const rmRoll = document.getElementById("roll")
    rmRoll.parentNode.removeChild(rmRoll)
    const rmScore = document.getElementById("score")
    rmScore.parentNode.removeChild(rmScore)
    
    createDice()
}

function createDice() {
    const nextLine = Object.values(document.getElementsByClassName("next")).pop()
    turn++
    console.log(nextLine)
    nextLine.innerHTML = `
    <div class="container">
        <div class="turn">${turn}</div>
        <div class="dice" id="1"></div>
        <div class="dice" id="2"></div>
        <div class="dice" id="3"></div>
        <div class="dice" id="4"></div>
        <div class="dice" id="5"></div>
        <button class="btn" id="roll">Roll</button>
        <button class="btn" id="score">Score</button>
    </div>
    <div class="next"></div>
    `
    createButtons()
    updateDie()
}

function toggleDie(val) {
    let t = val.target
    t.classList.toggle("checked")
}

function createButtons() {
    for(let i=1; i<6; i++) {
        let h= document.getElementById(i).addEventListener("click", toggleDie, false)
    }
    this.document.getElementById("roll").addEventListener("click", updateDie, false)
    this.document.getElementById("score").addEventListener("click", updateScore, false)
}

function checkLineScore() {
    dieValue.sort()
    console.log(`Sorted: ${dieValue}`)
    
}

window.onload = createDice()