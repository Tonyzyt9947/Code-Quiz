var scorelist = document.getElementById("scorelist")
var highscores = JSON.parse(localStorage.getItem("highscore"))

console.log(highscores)


for (i=0;i<highscores.length;i++){
    var listitem = document.createElement("li")
    listitem.innerText=highscores[i].name + ": " + highscores[i].score
    scorelist.appendChild(listitem) 

}

function clearscore(){
    localStorage.clear();
    scorelist = []
}
