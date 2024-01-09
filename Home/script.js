//set first question
let currentQuestionIndex = 1;

function showQuestion(questionIndex) {
  //Hides questions based on the next/back button
  const questions = document.querySelectorAll('.question');
  questions.forEach(question => {
    question.style.display = 'none';
  });


  const currentQuestion = document.getElementById(`question${questionIndex}`);
  currentQuestion.style.display = 'block';

  
  const backBtn = document.getElementById('back-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');

  if (questionIndex === 1) {
    backBtn.style.display = 'none';
  } else {
    backBtn.style.display = 'block';
  }

  if (questionIndex === questions.length) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'block';
    submitBtn.style.display = 'none';
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion(currentQuestionIndex);
}

function previousQuestion() {
  currentQuestionIndex--;
  showQuestion(currentQuestionIndex);
}

function calculateResult() {
  const radios = document.querySelectorAll('input[type="radio"]:checked');
  let score = 0;

  radios.forEach(radio => {
    score += parseInt(radio.value);
  });

  const resultContainer = document.getElementById('result-container');
  const scoreElement = document.getElementById('score');
  const recommendationElement = document.getElementById('recommendation');

  scoreElement.textContent = `Your score: ${score}`;

  
  if (score >= 8) {
    recommendationElement.textContent = "You're Disaster Ready!";
  } else if (score >= 6) {
    recommendationElement.textContent = 'Fairly Disaster Ready but Still Need Some Work!';
  } else {
    recommendationElement.textContent = 'Yikes! You Are Not Disaster Ready';
  }

  resultContainer.style.display = 'block';
}

//Check for what button is clicked
const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', nextQuestion);

const backBtn = document.getElementById('back-btn');
backBtn.addEventListener('click', previousQuestion);

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', calculateResult);


showQuestion(currentQuestionIndex);
