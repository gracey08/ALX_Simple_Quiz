// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }
    const userAnswer = selectedOption.value;

    // Compare the answer and provide feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
