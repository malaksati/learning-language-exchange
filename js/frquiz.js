// Phrases and answers (French)
const phrases = [
    {
        question: "<em>Bonjour !</em>", // French: Good Morning
        options: ["Good Morning!", "Goodbye", "Please"],
        correct: 0
    },
    {
        question: "<em>Comment ça va ?</em>", // French: How are you?
        options: ["What do you do?", "How are you?", "Where are you?"],
        correct: 1
    },
    {
        question: "<em>Merci.</em>", // French: Thank you
        options: ["Sorry", "Please", "Thank you"],
        correct: 2
    },
    {
        question: "<em>Au revoir !</em>", // French: Goodbye
        options: ["Hello", "Goodbye", "See you later"],
        correct: 1
    },
    {
        question: "<em>S'il vous plaît</em>", // French: Please
        options: ["Please", "Thank you", "Excuse me"],
        correct: 0
    }
];


let currentIndex = 0;

const phraseElement = document.getElementById("phrase-french");
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
