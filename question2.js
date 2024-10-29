document.getElementById('submitAnswer').addEventListener('click', function () {
    const quizForm = document.getElementById('quizForm');
    const selectedAnswer = quizForm.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const result = document.getElementById('result');
        const isCorrect = selectedAnswer.value === "solar"; // correct answer is "solar"

        result.textContent = isCorrect ? "Correct!" : "Wrong. Try again.";

        // Only show the "Next" button if the answer is correct
        if (isCorrect) {
            const nextButton = document.createElement('button');
            nextButton.textContent = "Next";
            nextButton.onclick = function () {
                window.location.href = "question3.html"; // redirect to the next question page (question 3)
            };
            document.body.appendChild(nextButton);
        }
    } else {
        alert("Please select an answer.");
    }
});
