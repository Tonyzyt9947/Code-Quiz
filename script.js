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
        choice1: 1,
        choice2: 2,
        choice3: 3,
        choice4: 4,
        answer: 1,
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
        choice1: 1,
        choice2: 2,
        choice3: 3,
        choice4: 4,
        answer: 3,
    },

    {
        question: "Q3",
        choice1: 1,
        choice2: 2,
        choice3: 3,
        choice4: 4,
        answer: 4,
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
    scoreText.innerText = score

    

    function checkAnswer(input){
        if (input==JSON.stringify(questionPool[indexQ].answer)){
            score = score + 10
            resultText.innerText = "Correct"
            newQuestion()
        }
        else{
            score = score + 0
            resultText.innerText = "Wrong"
            newQuestion()
        }

    }

    var indexQ = 0
    function newQuestion() {
        // Generate random question from pool
        indexQ = Math.floor(Math.random()*questionPool.length);
        // console.log(indexQ)
        questionText.innerText = JSON.stringify(questionPool[indexQ].question);
        choiceText1.innerText = JSON.stringify(questionPool[indexQ].choice1)
        choiceText2.innerText = JSON.stringify(questionPool[indexQ].choice2)
        choiceText3.innerText = JSON.stringify(questionPool[indexQ].choice3)
        choiceText4.innerText = JSON.stringify(questionPool[indexQ].choice4)


    }
    
    newQuestion()

    

    console.log("answer is" + questionPool[indexQ].answer)


    choiceEvent1.addEventListener("click", checkAnswer(choiceText1.innerText))
    choiceEvent2.addEventListener("click", checkAnswer(choiceText2.innerText))
    choiceEvent3.addEventListener("click", checkAnswer(choiceText3.innerText))
    choiceEvent4.addEventListener("click", checkAnswer(choiceText4.innerText))

    scoreText.innerText=score

    // New question pool to avoid repetition
    questionPool = questionPool.splice(indexQ, 1)

    

}



startGame()