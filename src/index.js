import "../styles/main.css";

let currentQuiz = 0;
let question = document.getElementById('question');
let options = document.getElementById('options');
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let quizzes = [
    {
        question: 'What is 2*5?',
        options: ['10', '25', '52'],
        correct: '10'
    },
    {
        question: 'What is 3*9?',
        options: ['27', '39', '36'],
        correct: '27'
    },
    {
        question: 'What is 8*4?',
        options: ['24', '18', '32'],
        correct: '32'
    },
    {
        question: 'What is 0*5',
        options: ['5', '0', '50'],
        correct: '0'
    }
];
goToQuiz(currentQuiz);

prev.addEventListener('click', () => goToQuiz(currentQuiz - 1));
next.addEventListener('click', () => goToQuiz(currentQuiz + 1));

function goToQuiz(quizNumber) {
    if (quizNumber < 0) {
        return;
    }
    if (quizNumber >= quizzes.length) {
        question.innerHTML = '';
        options.innerHTML = '';
        document.body.removeChild(prev);
        document.body.removeChild(next);
        let correctCount = 0;
        for (let i = 0; i < quizzes.length; i++) {
            if (quizzes[i].correct === quizzes[i].answer) {
                correctCount++;
            }
        }
        document.body.textContent = `You've got ${correctCount} correct answers`;
        return;
    }

    currentQuiz = quizNumber;
    question.textContent = quizzes[currentQuiz].question;
    options.innerHTML = '';
    for (let i = 0; i < quizzes[currentQuiz].options.length; i++) {
        let option = document.createElement('div');
        let input = document.createElement('input');
        let label = document.createElement('label');
        input.type = 'radio';
        input.className = 'input' + i;
        input.addEventListener('input', selectAnswer);
        input.setAttribute('name', 'option');
        input.setAttribute('value', quizzes[currentQuiz].options[i]);
        if (quizzes[currentQuiz].answer === input.getAttribute('value')) {
            input.checked = true;
        }
        label.setAttribute('for', input.className);
        label.textContent = quizzes[currentQuiz].options[i];
        option.append(input);
        option.append(label);
        options.append(option);
    }
}

function selectAnswer() {
    quizzes[currentQuiz].answer = this.value;
}