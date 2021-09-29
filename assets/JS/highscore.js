// Selects Variables
var scorelist = document.getElementById("scorelist")
var highscores = JSON.parse(localStorage.getItem("highscore"))

// Adds stored highscore to a list
if (highscores != null){

    for (i=0;i<highscores.length;i++){
    var listitem = document.createElement("li")
    listitem.innerText=highscores[i].name + ": " + highscores[i].score
    scorelist.appendChild(listitem) 

    }
}

// Clear highscores
function clearscore(){
    
    var listitemremove = document.getElementsByTagName("li")
    console.log(listitemremove)

    for (i=0; i<listitemremove.length; i++){
        scorelist.removeChild(listitemremove[0])
    }
    localStorage.clear();
}
