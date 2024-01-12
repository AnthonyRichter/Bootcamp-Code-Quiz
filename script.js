var elStartButton = document.getElementById("startquiz")
var elSubmitButton = document.getElementById("submit")
function showQuestionOne(){

    var elQuizContainer = document.getElementById("quizcontainer")
    
    var elParagraph = document.createElement("p")
    
    elParagraph.textContent = "Commonly used data types DO NOT include:"
    
    elQuizContainer.appendChild(elParagraph)
    
    elStartButton.style.display="none"
    
    var elOptions = document.createElement("ul")
    
    var elAnswerOne = document.createElement("li")
    
    elAnswerOne.textContent = "strings"
    
    elOptions.appendChild(elAnswerOne)
    
    var elAnswerTwo = document.createElement("li")
    
    elAnswerTwo.textContent = "booleans"
    
    elOptions.appendChild(elAnswerTwo)
    
    var elAnswerThree = document.createElement("li")
    
    elAnswerThree.textContent = "alerts"
    
    elOptions.appendChild(elAnswerThree)
    
    var elAnswerFour = document.createElement("li")
    
    elAnswerFour.textContent = "numbers"
    
    elOptions.appendChild(elAnswerFour)
    
    elQuizContainer.appendChild(elOptions)
    
    
    
   
}

elStartButton.addEventListener("click", showQuestionOne)
elSubmitButton.addEventListener("click", showQuestionTwo)

function showQuestionTwo(){

    var elQuizContainer = document.getElementById("quizcontainer")
    
    var elParagraph = document.createElement("p")
    
    elParagraph.textContent = "The condition in an if / else statement is enclosed within ____."
    
    elQuizContainer.appendChild(elParagraph)

    var elOptions = document.createElement("ul")
    
    var elAnswerOne = document.createElement("li")
    
    elAnswerOne.textContent = "quotes"
    
    elOptions.appendChild(elAnswerOne)
    
    var elAnswerTwo = document.createElement("li")
    
    elAnswerTwo.textContent = "curly brackets"
    
    elOptions.appendChild(elAnswerTwo)
    
    var elAnswerThree = document.createElement("li")
    
    elAnswerThree.textContent = "parentheses"
    
    elOptions.appendChild(elAnswerThree)
    
    var elAnswerFour = document.createElement("li")
    
    elAnswerFour.textContent = "square brackets"
    
    elOptions.appendChild(elAnswerFour)
    
    elQuizContainer.appendChild(elOptions)


    
}

elSubmitButton.addEventListener("click", showQuestionThree)

function showQuestionThree(){

    var elQuizContainer = document.getElementById("quizcontainer")
    
    var elParagraph = document.createElement("p")
    
    elParagraph.textContent = "Arrays in JavaScript can be used to store ____."
    
    elQuizContainer.appendChild(elParagraph)

    var elOptions = document.createElement("ul")
    
    var elAnswerOne = document.createElement("li")
    
    elAnswerOne.textContent = "numbers and strings"
    
    elOptions.appendChild(elAnswerOne)
    
    var elAnswerTwo = document.createElement("li")
    
    elAnswerTwo.textContent = "other arrays"
    
    elOptions.appendChild(elAnswerTwo)
    
    var elAnswerThree = document.createElement("li")
    
    elAnswerThree.textContent = "booleans"
    
    elOptions.appendChild(elAnswerThree)
    
    var elAnswerFour = document.createElement("li")
    
    elAnswerFour.textContent = "all the above"
    
    elOptions.appendChild(elAnswerFour)
    
    elQuizContainer.appendChild(elOptions)

}

function showQuestionFour(){

    var elQuizContainer = document.getElementById("quizcontainer")
    
    var elParagraph = document.createElement("p")
    
    elParagraph.textContent = "String values must be enclosed within ____ when being assigned to variables."
    
    elQuizContainer.appendChild(elParagraph)

    var elOptions = document.createElement("ul")
    
    var elAnswerOne = document.createElement("li")
    
    elAnswerOne.textContent = "commas"
    
    elOptions.appendChild(elAnswerOne)
    
    var elAnswerTwo = document.createElement("li")
    
    elAnswerTwo.textContent = "curly brackets"
    
    elOptions.appendChild(elAnswerTwo)
    
    var elAnswerThree = document.createElement("li")
    
    elAnswerThree.textContent = "quotes"
    
    elOptions.appendChild(elAnswerThree)
    
    var elAnswerFour = document.createElement("li")
    
    elAnswerFour.textContent = "parentheses"
    
    elOptions.appendChild(elAnswerFour)
    
    elQuizContainer.appendChild(elOptions)

}

function showQuestionFive(){

    var elQuizContainer = document.getElementById("quizcontainer")
    
    var elParagraph = document.createElement("p")
    
    elParagraph.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
    
    elQuizContainer.appendChild(elParagraph)

    var elOptions = document.createElement("ul")
    
    var elAnswerOne = document.createElement("li")
    
    elAnswerOne.textContent = "JavaScript"
    
    elOptions.appendChild(elAnswerOne)
    
    var elAnswerTwo = document.createElement("li")
    
    elAnswerTwo.textContent = "terminal/bash"
    
    elOptions.appendChild(elAnswerTwo)
    
    var elAnswerThree = document.createElement("li")
    
    elAnswerThree.textContent = "for loops"
    
    elOptions.appendChild(elAnswerThree)
    
    var elAnswerFour = document.createElement("li")
    
    elAnswerFour.textContent = "console.log"
    
    elOptions.appendChild(elAnswerFour)
    
    elQuizContainer.appendChild(elOptions)
}

