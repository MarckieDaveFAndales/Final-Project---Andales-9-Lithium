const questions = [
    { question: "What is gender equality?", options: ["Men and women are the same", "Equal rights and opportunities for all genders", "Women should have more rights than men", "Only men should have leadership roles"], answer: 1 },
    { question: "Which global organization promotes gender equality?", options: ["WHO", "UN Women", "IMF", "NATO"], answer: 1 },
    { question: "What is the gender pay gap?", options: ["Difference in salaries based on skills", "Difference in earnings between men and women", "A tax only for women", "A law ensuring equal pay"], answer: 1 },
    { question: "Which of the following is an example of gender discrimination?", options: ["Hiring based on skills", "Equal pay for equal work", "Denying promotions based on gender", "Providing maternity and paternity leave"], answer: 2 },
    { question: "What does SDG 5 focus on?", options: ["Climate action", "Gender equality", "Quality education", "Economic growth"], answer: 1 },
    { question: "Which movement advocates for women’s rights globally?", options: ["Black Lives Matter", "HeForShe", "Fridays for Future", "Occupy Wall Street"], answer: 1 },
    { question: "Which sector has the largest gender gap in leadership roles?", options: ["Technology", "Education", "Healthcare", "Retail"], answer: 0 },
    { question: "What can individuals do to promote gender equality?", options: ["Ignore gender issues", "Support equal pay", "Prevent women from working", "Only hire men"], answer: 1 },
    { question: "What is one major barrier to girls’ education in some countries?", options: ["Access to internet", "Lack of transportation", "Child marriage", "Too many schools"], answer: 2 },
    { question: "What is the purpose of feminism?", options: ["To give women more rights than men", "To fight for equal rights for all genders", "To eliminate men from leadership", "To promote only women's employment"], answer: 1 }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;

function startTimer() {
    timeLeft = 30;
    document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function displayQuestion() {
    clearInterval(timer);
    startTimer();
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    q.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selected) {
    clearInterval(timer);
    let q = questions[currentQuestion];
    let options = document.getElementById("options").children;
    if (selected === q.answer) {
        options[selected].classList.add("correct");
        score++;
    } else {
        options[selected].classList.add("wrong");
        options[q.answer].classList.add("correct");
    }
    setTimeout(() => nextQuestion(), 1000);
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        clearInterval(timer);
        document.getElementById("quiz-box").style.display = "none";
        document.getElementById("result").innerText = `You scored ${score} out of ${questions.length}`;
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function submitQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result").innerText = `Final Score: ${score} / ${questions.length}`;
}

displayQuestion();

