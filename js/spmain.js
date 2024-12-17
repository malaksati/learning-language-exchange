const phrasesspain = [
    "<em>Hola</em>. <span class='text-secondary'>- Hello.</span>",
    "<em>¿Cómo estás?</em>? <span class='text-secondary'>- How are you?</span>",
    "<em>Bien, gracias. ¿Y tú?</em>? <span class='text-secondary'>- Fine, thank you. And you?</span>",
    "¡<em>Mucho gusto</em>! <span class='text-secondary'>- Nice to meet you.</span>",
];

let currentIndex = 0;

const phraseDisplayspain = document.getElementById("phrase-display-spain");
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");

function updatePhrase() {
    phraseDisplayspain.innerHTML = phrasesspain[currentIndex];

    // Disable buttons when at the start or end of the list
    backButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === phrasesspain.length - 1;
}

function nextPhrase() {
    if (currentIndex < phrasesspain.length - 1) {
        currentIndex++;
        updatePhrase();
    }
}

function prevPhrase() {
    if (currentIndex > 0) {
        currentIndex--;
        updatePhrase();
    }
}
