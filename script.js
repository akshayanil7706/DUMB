function showResult() {
  document.getElementById("question-box").style.display = 'none';
  document.querySelector(".btns").style.display = 'none';
  document.getElementById("restart-btn").style.display = 'block';

  let resultText = "You answered YES to " + yesCount + " out of 15 questions.";

  if (yesCount >= 12) resultText += " 🧠 You might need help... or a reboot.";
  else if (yesCount >= 8) resultText += " 😬 You're a certified goofball.";
  else if (yesCount >= 4) resultText += " 😎 Not bad, you survived!";
  else resultText += " 🧠 Genius level: Activated!";

  document.getElementById("result").textContent = resultText;
}

function restartQuiz() {
  selectedQuestions = getRandomQuestions(15);
  currentIndex = 0;
  yesCount = 0;
  noCount = 0;

  document.getElementById("question-box").style.display = 'block';
  document.querySelector(".btns").style.display = 'block';
  document.getElementById("restart-btn").style.display = 'none';
  document.getElementById("result").textContent = '';

  showQuestion();
}
