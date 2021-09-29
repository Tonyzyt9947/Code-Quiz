// Select variables
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
var timeText = document.getElementById("timer")

// Question Bank
var questionArray = [
    {
        question: "What does HTML stand for?",
        choice1: "Hyperlinks and Text Make-up Language",
        choice2: "Hyper Text Markup Language",
        choice3: "How To Make Lasagna",
        choice4: "Hyper Tension Machine Learning",
        answer: "Hyper Text Markup Language",
    },

    {
        question: "Which method combines two strings and returns a new string?",
        choice1: "append()",
        choice2: "attach()",
        choice3: "join()",
        choice4: "concat()",
        answer: "concat()",
    },

    {
        question: "Which of these is not a flex-container property?",
        choice1: "align-items",
        choice2: "align-content",
        choice3: "text-align",
        choice4: "flex-wrap",
        answer: "text-align",
    },

    {
        question: "From inside to outside, the correct order is:",
        choice1: "content, margin, border, padding",
        choice2: "margin, padding, border, content",
        choice3: "content, padding, border, margin",
        choice4: "content, padding, margin, border",
        answer: "content, padding, border, margin",
    },

    {
        question: "Which of these is not a falsy value",
        choice1: "0",
        choice2: "-0",
        choice3: "null",
        choice4: "none",
        answer: "none",
    },

    {
        question: "Which of these is not a truthy value",
        choice1: "1",
        choice2: "false",
        choice3: "none",
        choice4: "NaN",
        answer: "NaN",
    },

    {
        question: "Which of these positions can be removed from normal flow?",
        choice1: "Relative",
        choice2: "Static",
        choice3: "Flex",
        choice4: "Sticky",
        answer: "Sticky",
    },

    {
        question: "Math.random() will generate a random __ within __",
        choice1: "integer, 1-10",
        choice2: "decimal, 0-1",
        choice3: "fraction, 0-1",
        choice4: "bug, your code",
        answer: "decimal, 0-1",
    },

    {
        question: "Choose incorrect answer: A while loop will end if___",
        choice1: "Computer crashes",
        choice2: "Condition becomes unsatisfied",
        choice3: "Another loop runs within",
        choice4: "The function returns a value",
        answer: "Another loop runs within",
    },


]
// Main function
function startGame () {
    // Sets question pool to choose from
    var questionPool = questionArray
    // console.log(questionPool)

    // Set initial score
    var score = 0
    scoreText.innerText = "Score: "+score

    var indexQ = 0
    var remainTime = 60

    // Timer Function
    function timer() {
        setInterval(function () {

            if (remainTime>0){
            remainTime = remainTime-1
            timeText.innerText = "Time Left: " + remainTime +"s"
            }

            else{
                checkFinish()
            }
        }, 1000)
    }

    timer()
  // Generate random question from pool
    function newQuestion() {
      
        indexQ = Math.floor(Math.random()*questionPool.length);
        console.log("indexQ is "+indexQ)
        console.log("pool length is "+questionPool.length)
        questionText.innerText = JSON.stringify(questionPool[indexQ].question);
        choiceText1.innerText = JSON.stringify(questionPool[indexQ].choice1)
        choiceText2.innerText = JSON.stringify(questionPool[indexQ].choice2)
        choiceText3.innerText = JSON.stringify(questionPool[indexQ].choice3)
        choiceText4.innerText = JSON.stringify(questionPool[indexQ].choice4)

    
    }
    
    newQuestion()

    // Check if finish conditions are met
    function checkFinish() {
        
        if (questionPool.length == 0 || remainTime==0) {
            localStorage.setItem("recentScore", score)
            return window.location.assign("form.html")
            }

    }
     
    // Interactions after user selects an answer
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

//  Eventlistners for option buttons
    choiceEvent1.addEventListener("click", function(){checkAnswer(choiceText1.innerText)})
    choiceEvent2.addEventListener("click", function(){checkAnswer(choiceText2.innerText)})
    choiceEvent3.addEventListener("click", function(){checkAnswer(choiceText3.innerText)})
    choiceEvent4.addEventListener("click", function(){checkAnswer(choiceText4.innerText)})

    

    

}



startGame()