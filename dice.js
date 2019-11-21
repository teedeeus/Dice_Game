
function randomDie() {
    return Math.floor( Math.random() * 6 ) + 1
}

function displayDie(num, value) {
    let die = document.getElementById(num)
    die.innerText = value
}

function updateDie() {
    for(let i=1; i<6; i++) {
        displayDie(i, randomDie())
    }
}

function toggleDie(val) {
    let t = val.target
    t.classList.toggle("checked")
}

window.onload = function() {
    for(let i=1; i<6; i++) {
        let h= document.getElementById(i).addEventListener("click", toggleDie, false)
    }
}


updateDie()