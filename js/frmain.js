const phrasefrench = [
    "<em>Bonjour !</em>. <span class='text-secondary'>- Good Morning.</span>",
    "<em>Comment ça va ?</em>. <span class='text-secondary'>- How are you?</span>",
    "<em>Je vais bien, merci.</em>. <span class='text-secondary'>- I am fine, thank you.</span>",
    "<em>Et vous ?</em>. <span class='text-secondary'>- And you?</span>",
    "<em>Enchanté !</em>. <span class='text-secondary'>- Nice to meet you.</span>"
];

let currentIndex = 0;

const phraseDisplayfrench = document.getElementById("phrase-display-french");
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");

function updatePhrase() {
    phraseDisplayfrench.innerHTML = phrasefrench[currentIndex];

    // Disable buttons when at the start or end of the list
    backButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === phrasefrench.length - 1;
}

function nextPhrase() {
    if (currentIndex < phrasefrench.length - 1) {
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
