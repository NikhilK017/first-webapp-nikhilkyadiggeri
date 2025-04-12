const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Rome", "Paris"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Saturn", "Jupiter", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "In what year did the reunification of Germany take place?",
      options: ["1989", "1990", "1991", "1992"],
      answer: "1990"
    },
    {
      question: "Which city in India has the greatest population?",
      options: ["Kolkata", "Delhi", "Jaipur", "Mumbai"],
      answer: "Mumbai"
    },
    {
      question: "How many keys are there on a piano?",
      options: ["80", "100", "62", "88"],
      answer: "88"
    },
    {
      question: "To what city do the Red Sox belong?",
      options: ["Boston", "Cleveland", "Chicago", "Sydney"],
      answer: "1990"
    },
    {
      question: "In what language is the phrase \"Hakuna Matata\" ",
      options: ["Yoruba", "Hausa", "Swahili", "Zulu"],
      answer: "1990"
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();
