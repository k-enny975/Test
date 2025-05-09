let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let userName = "";

function startTest() {
  const nameInput = document.getElementById("username");
  if (nameInput.value.trim() === "") {
    alert("Por favor, ingresa tu nombre.");
    return;
  }
  userName = nameInput.value;
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("category-screen").style.display = "block";
}

function selectCategory(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("category-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const questionObj = questions[currentCategory][currentQuestionIndex];
  document.getElementById("question-title").innerText = questionObj.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  questionObj.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === questionObj.answer) {
        score++;
      }
      nextQuestion();
    };
    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions[currentCategory].length) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
  document.getElementById("score-text").innerText = `${userName}, tu puntuación fue ${score}/10`;

  const scoreTableBody = document.getElementById("score-table-body");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${userName}</td><td>${currentCategory}</td><td>${score}</td>`;
  scoreTableBody.appendChild(newRow);

  saveScore(userName, currentCategory, score);
  loadScores();
}

function saveScore(name, category, score) {
  const existing = JSON.parse(localStorage.getItem("scores") || "[]");
  existing.push({ name, category, score });
  localStorage.setItem("scores", JSON.stringify(existing));
}

function loadScores() {
  const scoreTableBody = document.getElementById("score-table-body");
  scoreTableBody.innerHTML = "";
  const scores = JSON.parse(localStorage.getItem("scores") || "[]");
  scores.forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${entry.name}</td><td>${entry.category}</td><td>${entry.score}</td>`;
    scoreTableBody.appendChild(row);
  });
}

