let currentQuestionIndex = 0;
let score = 0;
let touchedQuestions = 0;
const questions = [
    { question: "Which of the following is an exit-controlled loop?", options: ["While Loop", "Do-While Loop", "For Loop", "None of the above"], answer: 1 },
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink Text Markup Language"], answer: 0 },
    { question: "Which property is used to change text color in CSS?", options: ["font-color", "text-color", "color", "background-color"], answer: 2 },
    { question: "Which language runs in a web browser?", options: ["Java", "C", "Python", "JavaScript"], answer: 3 },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<br>", "<lb>", "<newline>"], answer: 1 },
    { question: "Which CSS property is used to control the spacing between elements?", options: ["padding", "margin", "spacing", "border"], answer: 1 },
    { question: "What is the default file extension for JavaScript files?", options: [".java", ".js", ".jsx", ".script"], answer: 1 },
    { question: "Which method can be used to select an HTML element in JavaScript?", options: ["getElementById", "querySelector", "getElementsByClassName", "All of the above"], answer: 3 },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheet", "Computer Style System", "Creative Style Sheet", "Colorful Style System"], answer: 0 },
    { question: "Which HTML tag is used to define an internal stylesheet?", options: ["<css>", "<script>", "<style>", "<link>"], answer: 2 }
];
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", function () {
            document.querySelectorAll("#options button").forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        });
        optionsElement.appendChild(button);
    });
}
function nextQuestion() {
    const selectedOption = document.querySelector("#options button.selected");
    if (selectedOption) {
        touchedQuestions++;
        if (questions[currentQuestionIndex].options.indexOf(selectedOption.innerText) === questions[currentQuestionIndex].answer) {
            score++;
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Over!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("summary").innerText = `Total Questions Attempted: ${touchedQuestions}, Correct: ${score}, Incorrect: ${touchedQuestions - score}`;
    }
}
window.onload = loadQuestion;
