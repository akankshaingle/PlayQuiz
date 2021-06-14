const quizDB = [
{   question:"Q1: What is the full form of HTML ?",
    a:"Hypertext Machine language",
    b:"Hypertext and links markup language",
    c:"Hypertext Markup Language",
    d:"Hightext machine language",
    ans:"ans3"
},
{  question:"Q2: How is document type initialized in HTML5 ?",
    a:"</DOCTYPE HTML>",
    b:"</DOCTYPE>",
    c:"<!DOCTYPE HTML>",
    d:"</DOCTYPE html>",
    ans:"ans3"

},
{   question:"Q3: Which of the following HTML Elements is used for making any text bold ?",
     a:"<p>",
     b:"<b>",
     c:"<i>",
     d:"<li>",
     ans:"ans2"
},
{  question:"Q4:Which of the following HTML element is used for creating an unordered list?",
     a:"<em>",
     b:"<ui>",
     c:"<i>",
     d:"<ul>",
     ans:"ans4"
},
{   question:"Q5:What is the font-size of the h1 heading tag?",
    a:"3.5 em",
    b:"2.17 em",
    c:"2 em",
    d:"1.5 em",
    ans:"ans3"
},
{   question:"Q6:Which of the following attributes is used to add link to any element?",
    a:"href",
    b:"link",
    c:"ref",
    d:"newref",
    ans:"ans1"
}];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText= questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }

    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}
submit.addEventListener('click', () => {
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
          <h3>You Scored ${score}/${quizDB.length} ✌ </h3>
        <button class="btn" onclick="location.reload()"> Try Again</button>
        `;

        showScore.classList.remove('scoreArea');
         }
});
//` `