// Select variables
var scoreText = document.getElementById("scoreText")
var submit = document.getElementById("save")
var initial = document.getElementById("username")
var recentScore = localStorage.getItem("recentScore")
var highscore = JSON.parse(localStorage.getItem("highscore"))
if (localStorage.getItem("highscore")==null) {
    highscore = []
}

// Set score text
scoreText.innerText = "Your Score: " + recentScore

// Function for saving score via localstorage
function saveScore() {

    
    var score = {
        name: initial.value,
        score: recentScore,
    }

    highscore.push(score)

    highscore.sort(function compare(a,b) {
        return b.score - a.score

    } )

    highscore.splice(5)

    localStorage.setItem("highscore", JSON.stringify(highscore))


}
