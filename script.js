var questionText = document.getElementById("question")
var scoreText = document.getElementById("score")
var choiceText1 = document.getElementById("choice1")
var choiceText2 = document.getElementById("choice2")
var choiceText3 = document.getElementById("choice3")
var choiceText4 = document.getElementById("choice4")
var choiceEvent1 = document.getElementById("choice-container1")
var choiceEvent2 = document.getElementById("choice-container2")
var choiceEvent3 = document.getElementById("choice-container3")
var choiceEvent4 = document.getElementById("choice-container4")
var resultText = document.getElementById("result")

var questionArray = [
    {
        question: "Q0",
        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",
        answer: "a",
    },

    {
        question: "Q1",
        choice1: 1,
        choice2: 2,
        choice3: 3,
        choice4: 4,
        answer: 2,
    },

    {
        question: "Q2",
        choice1: "f",
        choice2: "k",
        choice3: "j",
        choice4: "l",
        answer: "j",
    },

    {
        question: "Q3",
        choice1: "dd",
        choice2: "ff",
        choice3: "ee",
        choice4: "rr",
        answer: "rr",
    },

    {
        question: "Q4",
        choice1: 1,
        choice2: 2,
        choice3: 3,
        choice4: 4,
        answer: 1,
    },

    {
        question: "Q5",
        choice1: 1,
        choice2: 2,
        choice3: 3,
        choice4: 4,
        answer: 2,
    },

    {
        question: "Q6",
        choice1: 1,
        choice2: 2,
        choice3: 3,
        choice4: 4,
        answer: 3,
    },

    {
        question: "Q7",
        choice1: 1,
        choice2: 2,
        choice3: 3,
        choice4: 4,
        answer: 4,
    },


]
function startGame () {
    // Sets question pool to choose from
    var questionPool = questionArray
    // console.log(questionPool)

    // Set initial score
    var score = 0
    scoreText.innerText = "Score: "+score

    var indexQ = 0

    function newQuestion() {
        // Generate random question from pool
        indexQ = Math.floor(Math.random()*questionPool.length);
        console.log("indexQ is "+indexQ)
        console.log("pool length is "+questionPool.length)
        questionText.innerText = JSON.stringify(questionPool[indexQ].question);
        choiceText1.innerText = JSON.stringify(questionPool[indexQ].choice1)
        choiceText2.innerText = JSON.stringify(questionPool[indexQ].choice2)
        choiceText3.innerText = JSON.stringify(questionPool[indexQ].choice3)
        choiceText4.innerText = JSON.stringify(questionPool[indexQ].choice4)

        // New question pool to avoid repetition
        // questionPool = questionPool.splice(indexQ, 1)
    }
    
    newQuestion()

    function checkFinish() {
        
        if (questionPool.length == 0) {
            localStorage.setItem("Score", score)
            return window.location.assign("form.html")
            }

    }
     

    function checkAnswer(input){
        
        
        
        console.log(questionPool[indexQ].answer)

        if (input==JSON.stringify(questionPool[indexQ].answer)){

            score = score + 10
            console.log("hh")
            resultText.innerText = "Correct"
            resultText.style.visibility="visible"
            scoreText.innerText = "Score: "+score
            // console.log(questionPool.splice(indexQ, 0))
            // New question pool to avoid repetition
            questionPool.splice(indexQ, 1)
            console.log(questionPool)
            setTimeout(function(){resultText.style.visibility="hidden"}, 2500)
            checkFinish()
            newQuestion()
            
        }
        else{

            score = score + 0
            console.log("gg")
            resultText.innerText = "Wrong"
            resultText.style.visibility="visible"
            scoreText.innerText = "Score: "+score
            // console.log(questionPool.splice(indexQ, 0))
            questionPool.splice(indexQ, 1)
            console.log(questionPool)
            setTimeout(function(){resultText.style.visibility="hidden"}, 2500)
            checkFinish()
            newQuestion()
    
            
        }

    }


    choiceEvent1.addEventListener("click", function(){checkAnswer(choiceText1.innerText)})
    choiceEvent2.addEventListener("click", function(){checkAnswer(choiceText2.innerText)})
    choiceEvent3.addEventListener("click", function(){checkAnswer(choiceText3.innerText)})
    choiceEvent4.addEventListener("click", function(){checkAnswer(choiceText4.innerText)})

    

    

}



startGame()