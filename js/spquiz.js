// Phrases and answers
const phrases = [
    {
        question: "<em>¿Cómo estás?</em>",
        options: ["What's your work?", "How are you?", "Hello"],
        correct: 1
    },
    {
        question: "<em>¿Qué haces?</em>",
        options: ["What do you do?", "Where are you?", "How are you?"],
        correct: 0
    },
    {
        question: "<em>Hola</em>",
        options: ["Hello", "Goodbye", "Please"],
        correct: 0
    }
];

let currentIndex = 0;

const phraseElement = document.getElementById("phrase-spain");
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");

// Update phrase and buttons
function loadPhrase() {
    const current = phrases[currentIndex];
    phraseElement.innerHTML = current.question;

    // Get buttons and reset styles
    const buttons = document.querySelectorAll(".option");
    buttons.forEach((button, index) => {
        button.innerText = current.options[index];
        button.classList.remove("correct", "incorrect");
        button.disabled = false;
        button.onclick = () => checkAnswer(button, index === current.correct);
    });

    // Navigation button states
    backButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === phrases.length - 1;
}

function checkAnswer(button, isCorrect) {
    // Disable all buttons
    const buttons = document.querySelectorAll(".option");
    buttons.forEach(btn => btn.disabled = true);

    // Apply correct or incorrect class
    if (isCorrect) {
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
        // Turn the correct answer green
        const correctButton = buttons[phrases[currentIndex].correct];
        correctButton.classList.add("correct");
    }
}

function nextPhrase() {
    if (currentIndex < phrases.length - 1) {
        currentIndex++;
        loadPhrase();
    }
}

function prevPhrase() {
    if (currentIndex > 0) {
        currentIndex--;
        loadPhrase();
    }
}

// Initialize the first phrase
loadPhrase();
