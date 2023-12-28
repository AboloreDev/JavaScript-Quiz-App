// DOM Content
const questionElement = document.getElementById('question');
const answerBtn = document.querySelector('#answer-buttons');
const nextBtn = document.querySelector('.next-button');

// Array of Questions
const questions = [
    {
        "question": "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: "false" },
            { text: "Paris", correct: "true" },
            { text: "Madrid", correct: "false" },
            { text: "Rome", correct: "false" },
        ]
      },
      {
        "question": "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: "true" },
            { text: "Venus", correct: "false" },
            { text: "Jupiter", correct: "false" },
            { text: "Saturn", correct: "false" },
        ]
      },
      {
        "question": "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: "false" },
            { text: "Whale Shark", correct: "true" },
            { text: "Blue Whale", correct: "true" },
            { text: "Giraffe", correct: "false" },
        ]
      },
      {
        "question": "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: "true" },
            { text: "1905", correct: "false" },
            { text: "1920", correct: "false" },
            { text: "1931", correct: "false" },
        ]
      },
      {
        "question": "What is the currency of Japan?",
        answers: [
            { text: "Yuan", correct: "false" },
            { text: "Euro", correct: "false" },
            { text: "Yen", correct: "true" },
            { text: "Dollar", correct: "false" },
        ]
      },
      {
        "question": "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: "false" },
            { text: "William Shakespeare", correct: "true" },
            { text: "Jane Austen", correct: "false" },
            { text: "Mark Twain", correct: "false" },
        ]
      },
      {
        "question": "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: "false" },
            { text: "Indian Ocean", correct: "false" },
            { text: "Southern Ocean", correct: "false" },
            { text: "Pacific Ocean", correct: "true" },
        ]
      },
      {
        "question": "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Osmium", correct: "false" },
            { text: "Oxygen", correct: "true" },
            { text: "Gold", correct: "false" },
            { text: "Iron", correct: "false" },
        ]
      },
      {
        "question": "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: "false" },
            { text: "Leonardo da Vinci", correct: "true" },
            { text: "Pablo Picasso", correct: "false" },
            { text: "Claude Monet", correct: "false" },
        ]
      },
      {
        "question": "Which programming language is known for its use in web development?",
        answers: [
            { text: "Java", correct: "false" },
            { text: "Phython", correct: "false" },
            { text: "Ruby", correct: "false" },
            { text: "JavaScript", correct: "true" },
        ]
      },
      {
        "question": "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: "false" },
            { text: "Melbourne", correct: "false" },
            { text: "Brisbane", correct: "false" },
            { text: "Canberra", correct: "true" },
        ]
      },
      {
        "question": "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: "false" },
            { text: "Japan", correct: "true" },
            { text: "Korea", correct: "false" },
            { text: "Vietnam", correct: "false" },
        ]
      },
      {
        "question": "What is the speed of light?",
        answers: [
            { text: "299,792 kilometers per second", correct: "true" },
            { text: "150,000 kilometers per second", correct: "false" },
            { text: "400,000 kilometers per second", correct: "false" },
            { text: "200,000 kilometers per second", correct: "false" },
        ]
      },
      {
        "question": "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text:"J.K. Rowling", correct: "false" },
            { text: "Ernest Hemingway", correct: "false" },
            { text: "Harper Lee", correct: "true" },
            { text: "George Orwell", correct: "false" },
        ]
      },
      {
        "question": "Which country is known as the Land of the Midnight Sun?",
        answers: [
            { text:"Norway", correct: "true" },
            { text: "Canada", correct: "false" },
            { text: "Russia", correct: "false" },
            { text: "Sweden", correct: "false" },
        ]
      },
      {
        "question": "What is the largest desert in the world?",
        answers: [
            { text:"Sahara Desert", correct: "false" },
            { text: "Artic Desert", correct: "false" },
            { text: "Gobi Desert", correct: "false" },
            { text: "Antarctica", correct: "true" },
        ]
      },
      {
        "question": "Who is the author of 'The Great Gatsby'?",
        answers: [
            { text:"F. Scott Fitzgerald", correct: "true" },
            { text:  "George Orwell", correct: "false" },
            { text: "Jane Austen", correct: "false" },
            { text: "Charles Dickens", correct: "false" },
        ]
      },
      {
        "question": "What is the capital of Brazil?",
        answers: [
            { text:"Rio de Janeiro", correct: "false" },
            { text: "Brasília", correct: "true" },
            { text: "São Paulo", correct: "false" },
            { text: "Buenos Aires", correct: "false" },
        ]
      },
      {
        "question": "Which element has the chemical symbol 'H'?",
        answers: [
            { text:"Helium", correct: "false" },
            { text: "Hydrogen", correct: "true" },
            { text: "Hassium", correct: "false" },
            { text: "Hafnium", correct: "false" },
        ]
      },
      {
        "question": "In what year did World War II end?",
        answers: [
            { text:"1943", correct: "false" },
            { text: "1945", correct: "true" },
            { text: "1950", correct: "false" },
            { text: "1939", correct: "false" },
        ]
      },
      {
        "question": "Who is known as the 'Father of Computer Science'?",
        answers: [
            { text:"Ada Lovelace", correct: "false" },
            { text: "Alan Turing", correct: "true" },
            { text: "Charles Babbage", correct: "false" },
            { text: "Bill Gates", correct: "false" },
        ]
      },
      {
        "question": "What is the largest bird in the world?",
        answers: [
            { text:"Ostrich", correct: "true" },
            { text: "Emu", correct: "false" },
            { text: "Albatross", correct: "false" },
            { text: "Condor", correct: "false" },
        ]
      },
      {
        "question": "Which planet is known as the 'Blue Planet'?",
        answers: [
            { text:"Mars", correct: "false" },
            { text: "Earth", correct: "true" },
            { text: "Neptune", correct: "false" },
            { text: "Uranus", correct: "false" },
        ]
      }
]

// Variable and score index
let currentQuestionIndex = 0;
let score = 0;

// Create a start Game Function
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'NEXT';
    showQuestion()
}

// Create a Show Question Function
function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1; 
    // Display the questions in the webpage
    questionElement.innerHTML = 
    (`${questionNo}.  ${currentQuestion.question}`)

    // display the list answers
    currentQuestion.answers.forEach(answer => {
        // create a new button
        const button = document.createElement('button');
        // set the answers = the button value
        button.innerHTML = answer.text;
        // Add a class of Btn to the new button
        button.classList.add('btn');
        // Display the new button in the answer button
        answerBtn.appendChild(button)
        // Store the correct answer in a data attribute for    later use
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // Add event listeners to the button
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

// Select answer Function
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }

    // Allow user to click only one answer
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === 'true') {
            button.classList.add('correct')
        }
        // after a button has been clicked 
        // disable user from clicking another button
        button.disabled = true;
    })
    nextBtn.style.display = 'block' 
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of 10!`
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = 'block'
}

// HandleNextButton
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion()
    }else {
        showScore()
    }
}

// Next button Event Listener
nextBtn.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startGame();
    }
})

// STart the game
startGame()

