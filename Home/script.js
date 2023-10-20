// Global variables
let currentQuestionIndex = 1;

// Function to show/hide questions
function showQuestion(questionIndex) {
  // Hide all questions
  const questions = document.querySelectorAll('.question');
  questions.forEach(question => {
    question.style.display = 'none';
  });

  // Show the current question
  const currentQuestion = document.getElementById(`question${questionIndex}`);
  currentQuestion.style.display = 'block';

  // Show/hide navigation buttons based on the question index
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

// Function to navigate to the next question
function nextQuestion() {
  currentQuestionIndex++;
  showQuestion(currentQuestionIndex);
}

// Function to navigate to the previous question
function previousQuestion() {
  currentQuestionIndex--;
  showQuestion(currentQuestionIndex);
}

// Calculate and display the quiz result
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

  // Add your logic to determine the recommendation based on the score
  // Example recommendation based on score range:
  if (score >= 5) {
    recommendationElement.textContent = "You're Well Prepared!";
  } else if (score >= 3) {
    recommendationElement.textContent = 'Fairly Prepared but Still Need Some Work!';
  } else {
    recommendationElement.textContent = 'Improve Your Preparations!';
  }

  resultContainer.style.display = 'block';
}

// Event listener for the navigation buttons
const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', nextQuestion);

const backBtn = document.getElementById('back-btn');
backBtn.addEventListener('click', previousQuestion);

// Event listener for the submit button
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', calculateResult);

// Initial setup
showQuestion(currentQuestionIndex);
