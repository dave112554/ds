
        function calculateScore() {
            var score = 0;
            var correctAnswers = {
                q1: 'A', 
                q2: 'A', 
                q3: 'A', 
                q4: 'C', 
                q5: 'B', 
                q6: 'C', 
                q7: 'B', 
                q8: 'A', 
                q9: 'A', 
                q10: 'A' 
            };

            var userAnswers = new FormData(document.getElementById('quizForm'));

            for (var question in correctAnswers) {
                if (userAnswers.get(question) === correctAnswers[question]) {
                    score++;
                }
            }

            var resultMessage = "Your score is: " + score + "/10<br><br>Correct Answers:<br>";

            for (var question in correctAnswers) {
                resultMessage += question + ": " + correctAnswers[question] + "<br>";
            }

            document.getElementById('result').innerHTML = resultMessage;
        }
  