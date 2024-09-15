// script.js
const quizData = [
    {
        question: "Who was the purple cap winner of IPL 2008?",
        options: ["Zaheer Khan", "Shaun Pollock", "Sohail Tanvir", "Brett Lee"],
        answer: 2
    },
    {
        question: "India won its first ICC Cricket World Cup in?",
        options: ["1979", "1987", "1996", "1983"],
        answer: 3
    },
    {
        question: "What does CAB stand for?",
        options: ["Cricket Argentina Board", "Cricket America Board", "Cricket Antigua Board", "Cricket Australia Board"],
        answer: 3
    },
    {
        question: "Which is the player from Singapore to play for any major cricketing nation?",
        options: ["Marnus Labuschagne", "Tim David", "Sam Curran", "None of these"],
        answer: 1
    },
    {
        question: "Which team has scored the highest score in an innings in Test cricket?",
        options: ["India", "Australia", "Srilanka", "England"],
        answer: 2
    },
    {
        question: "Who was the winner of Champions League T20 in 2009?",
        options: ["Deccan Chargers", "Chennai Super Kings", "New South Wales Blues", "Trinidad and Tobago Reds"],
        answer: 2
    },
    {
        question: "Who am I? I was the inaugural champion team in the Indian Cricket League 20-20 Competition.",
        options: ["Chennai Superstars", "Kolkata Tigers", "Lahore Badshah", "Delhi Lions"],
        answer: 0
    },
    {
        question: "Who was the highest run scorer in the 2011 ICC Cricket World Cup held in Indian subcontinent?",
        options: ["Sachin Tendulkar", "Kumar Sangakkara", "Tillakratne Dilshan", "Jonathan Trott"],
        answer: 2
    },
    {
        question: "Guess the cricketer. I have played for KXIP,SRH,RCB,PWI,MI,DD.",
        options: ["Yuvraj Singh", "Steven Smith", "Robin Uthappa", "Bhuvneshwar Kumar"],
        answer: 0
    },
    {
        question: "Who was the most valuable player of IPL 2017?",
        options: ["Virat Kohli", "Sunil Narine", "Steve Smith", "Ben Stokes"],
        answer: 3
    },
];


let currentQuestionIndex = 0;
let score = 0;

window.onload = function() {
    loadQuestion();
};

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const options = document.querySelectorAll('.option');
    const nextButton = document.getElementById('next');

    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.style.backgroundColor = "#007bff";
        option.disabled = false;
    });

    nextButton.style.display = "none";
}

function selectOption(selectedOptionIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const nextButton = document.getElementById('next');

    options.forEach(option => {
        option.disabled = true;
    });

    if (selectedOptionIndex === currentQuestion.answer) {
        options[selectedOptionIndex].style.backgroundColor = "#28a745";
        score++;
    } else {
        options[selectedOptionIndex].style.backgroundColor = "#dc3545";
        options[currentQuestion.answer].style.backgroundColor = "#28a745";
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizElement = document.getElementById('quiz');
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');

    quizElement.classList.add('hidden');
    resultElement.classList.remove('hidden');

    scoreElement.textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    const quizElement = document.getElementById('quiz');
    const resultElement = document.getElementById('result');

    quizElement.classList.remove('hidden');
    resultElement.classList.add('hidden');
    loadQuestion();
}
