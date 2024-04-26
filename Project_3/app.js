const question = [
    {
        question: "Which is largest animal in the world?",
        answer: [

            {text:"shark", correct:false},
            {text:"Blue Whale", correct:true},
            {text:"Elepehant", correct:false},
            {text:"Giraffe", correct:false},
        ]
    },
    {
        question: "Which is smallest country in the world?",
        answer: [

            {text:"Vatican City", correct:true},
            {text:"Bhutan", correct:false},
            {text:"Nepal", correct:false},
            {text:"Shri Lanka", correct:false},
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answer: [

            {text:"Kalahari", correct:false},
            {text:"Gobi", correct:false},
            {text:"Sahara", correct:false},
            {text:"Anatartica", correct:true},
        ]
    },
    {
        question: "Which is samllest continent in the world?",
        answer: [

            {text:"asia", correct:false},
            {text:"Australia", correct:true},
            {text:"Arctic", correct:false},
            {text:"Africa", correct:false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
         currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    console.log("ddttttttd",currentQuestion.question)
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach((answer)=>{
   let button = document.createElement("button");
   button.innerHTML = answer.text;
   button.classList.add("btn");
   answerButton.appendChild(button);
if(answer.correct){
    button.dataset.correct = answer.correct
    console.log("swws", button.dataset.correct)
}
   button.addEventListener("click", selectAnswer)
    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    console.log("dd",e.target)
   let selectBtn = e.target;
   let isCorrect = selectBtn.dataset.correct === "true";

   if(isCorrect){
    selectBtn.classList.add("correct");
    score++
   }else{
    selectBtn.classList.add("incorrect");
   }
   Array.from(answerButton.children).forEach((button) =>{
if(button.dataset.correct === "true"){
    button.classList.add("correct")
}
button.disabled = true;
   });
   nextButton.style.display = "Block";

}

function showScore(){
     resetState();
     questionElement.innerHTML = `You Score ${score} out of ${question.length}!`;

     nextButton.innerHTML = "Play Again";
     nextButton.style.display = "Block";
}

function handleNextQuestion(){
    currentQuestionIndex++
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
if(currentQuestionIndex < question.length){
    handleNextQuestion();
}else{
    startQuiz();
}
   
})

startQuiz()