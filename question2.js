document.getElementById('submitAnswer').addEventListener('click', function () {
    const quizForm = document.getElementById('quizForm');
    const selectedAnswer = quizForm.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const result = document.getElementById('result');
        const isCorrect = selectedAnswer.value === "solar"; 

        result.textContent = isCorrect ? "Correct!" : "Wrong. Try again.";

        if (isCorrect) {
            const nextButton = document.createElement('button');
            nextButton.textContent = "Next";
            nextButton.onclick = function () {
                window.location.href = "question3.html"; 
            };
            document.body.appendChild(nextButton);
        }
    } else {
        alert("Please select an answer.");
    }
});
