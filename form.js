var scoreText = document.getElementById("scoreText")
var submit = document.getElementById("save")
var initial = document.getElementsByName("initial")

scoreText.innerText = "Your Score: " + localStorage.getItem("Score")

function saveScore(event) {
    localStorage.setItem("highscore" )

}

submit.addEventListener("click", save)