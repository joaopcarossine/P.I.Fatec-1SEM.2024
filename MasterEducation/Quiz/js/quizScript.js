

const quizData = [
    {
        question: "Qual é a capital da França?",
        options: ["Berlim", "Madrid", "Paris", "Lisboa"],
        answer: "Paris"
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Miguel de Cervantes", "William Shakespeare", "Dante Alighieri", "Jane Austen"],
        answer: "Miguel de Cervantes"
    }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;

function loadQuestion() {
    const quizQuestion = document.getElementById("quiz-question");
    const quizOptions = document.getElementById("quiz-options");
    const currentQuestion = quizData[currentQuestionIndex];

    quizQuestion.textContent = currentQuestion.question;
    quizOptions.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => submitAnswer(option);
        quizOptions.appendChild(button);
    });
}

function submitAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const resultText = selectedOption === currentQuestion.answer ? "Correto!" : "Errado!";
    
    document.getElementById("quiz-result").textContent = resultText;

    if (selectedOption === currentQuestion.answer) {
        correctAnswersCount++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        setTimeout(() => {
            document.getElementById("quiz-result").textContent = "";
            loadQuestion();
        }, 1000);
    } else {
        document.getElementById("quiz-question").textContent = "Você completou o quiz!";
        document.getElementById("quiz-options").innerHTML = "";
        document.getElementById("quiz-result").textContent = `Você acertou ${correctAnswersCount} de ${quizData.length} questões.`;
    }
}

document.addEventListener("DOMContentLoaded", loadQuestion);
function toggleNavbar() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}


