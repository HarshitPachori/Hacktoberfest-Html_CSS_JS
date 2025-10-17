const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Makeup Language",
    b: "Hyper Transfer Markup Language",
    c: "Hyper Text Markup Language",
    correct: "c"
  },
  {
    question: "Which language is used for styling web pages?",
    a: "CSS",
    b: "Python",
    c: "HTML",
    correct: "a"
  },
  {
    question: "What year was JavaScript created?",
    a: "1995",
    b: "2000",
    c: "1998",
    correct: "a"
  }
];

const quizContainer = document.getElementById('quiz');
const result = document.getElementById('result');
const submitBtn = document.getElementById('submit');

function loadQuiz() {
  quizData.forEach((q, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p><strong>${index + 1}. ${q.question}</strong></p>
      <label><input type="radio" name="q${index}" value="a"> ${q.a}</label><br>
      <label><input type="radio" name="q${index}" value="b"> ${q.b}</label><br>
      <label><input type="radio" name="q${index}" value="c"> ${q.c}</label><br><br>
    `;
    quizContainer.appendChild(div);
  });
}

submitBtn.addEventListener('click', () => {
  let score = 0;
  quizData.forEach((q, i) => {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer && answer.value === q.correct) score++;
  });
  result.textContent = `✅ You scored ${score}/${quizData.length}`;
});

loadQuiz();
