document.getElementById('submitAnswer').addEventListener('click', function () {
    const quizForm = document.getElementById('quizForm');
    const selectedAnswer = quizForm.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const result = document.getElementById('result');
        const isCorrect = selectedAnswer.value === "Hydroelectrical"; // correct answer for renewable energy is Hydroelectrical

        result.textContent = isCorrect ? "Correct!" : "Wrong. Try again.";

        // Only show the "Next" button if the answer is correct
        if (isCorrect) {
            const nextButton = document.createElement('button');
            nextButton.textContent = "Next";
            nextButton.onclick = function () {
                // Link to the next question or end the quiz
                alert("Quiz Complete!");
            };
            document.body.appendChild(nextButton);
        }
    } else {
        alert("Please select an answer.");
    }
});
