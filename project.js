const questions = [
  {
    "question": "What is your ideal Friday night?",
    "answer1": "Hosting a Party",
    "image1": "party.jpg",
    "answer1Total": "2",
    "answer2": "Netflix and chill cuddled in your bed",
    "image2": "netflix.jpg",
    "answer2Total": "4",
    "answer3": "Dinner date and a long walk",
    "image3": "dinner.jpg",
    "answer3Total": "3",
    "answer4": "Catching up with your pending assignments",
    "image4": "ass.jpg",
    "answer4Total": "1"
  },
  {
    "question": "Where do you wish to live?",
    "answer1": "On the 14th floor of a city high rise",
    "image1": "city.jpg",
    "answer1Total": "3",
    "answer2": "In a tiny home with wheels",
    "image2": "Tiny.jpg",
    "answer2Total": "4",
    "answer3": "A stylish condo in Downtown",
    "image3": "condo.jpg",
    "answer3Total": "2",
    "answer4": "A mansion in the mountains",
    "image4": "mansion.jpeg",
    "answer4Total": "1"
  },
  {
    "question":"How would you describe yourself?",
    "answer1": "Impulsive",
    "answer1Total": "2",
    "answer2": "Practical",
    "answer2Total": "4",
    "answer3": "Affectionate",
    "answer3Total": "3",
    "answer4": "Perfectionist",
    "answer4Total": "1"
  },
  {
    "question": "Which dessert screams you?",
    "answer1": "Vanilla Ice-cream",
    "image1": "vanilla.jpg",
    "answer1Total": "4",
    "answer2": "Choco Lava Cake",
    "image2": "cake.jpg",
    "answer2Total": "1",
    "answer3":"Cream filled Donuts",
      "image3": "donut.jpg",
    "answer3Total": "2",
    "answer4": "Waffles",
    "image4": "waffle.jpg",
    "answer4Total": "3"
  },
  {
    "question": "Which singer do you love to listen to?",
    "answer1": "Harry Styles",
    "image1": "styles.jpg",
    "answer1Total": "4",
    "answer2": "Taylor Swift",
    "image2": "taylor.jpg",
    "answer2Total": "1",
    "answer3": "Doja Cat",
    "image3": "doja.jpg",
    "answer3Total": "2",
    "answer4": "Shawn Mendes",
    "image4": "shawn.jpg",
    "answer4Total": "3"
  },
  {
    "question":"Which activity would you like to do at weekend?",
    "answer1":"Surfing",
    "image1": "surfing.jpg",
    "answer1Total": "2",
    "answer2": "Picnicking",
    "image2": "picnic.jpg",
    "answer2Total": "3",
    "answer3": "Reading",
    "image3": "read.jpg",
    "answer3Total": "1",
    "answer4": "Horse Riding",
    "image4": "horse.jpg",
    "answer4Total": "4"
  },
  {
    "question": "Which character would you want to be?",
    "answer1": "Harry Potter",
    "image1": "harry.jpg",
    "answer1Total": "2",
    "answer2": "Ron Weasley",
    "image2": "ron.jpg",
    "answer2Total": "3",
    "answer3": "Hermione Granger",
    "image3": "her.jpg",
    "answer3Total": "1",
    "answer4": "Draco Malfoy",
    "image4": "draco.jpg",
    "answer4Total": "4"
  }
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const cover = document.querySelector('.cover');
const startButton = document.querySelector('.start');
const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const optImgs = document.querySelectorAll('.image');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

function startQuiz(){
  generateQuestions(currentQuestion);
}

//Function to generate question 
function generateQuestions (index) {

  if(index === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);

    for(var x=0, imgcount=optImgs.length; x<imgcount; x++){
     var src = question['image'+(x+1)];
     if(src){
       optImgs[x].style.opacity = 1;
       optImgs[x].src = src;
     }else{
       optImgs[x].style.opacity = 0;
       optImgs[x].src = "";
     }
    }

    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //const selectedOption=`input[name=question${qcurrentQuestion}]:checked`;
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish Quiz';
        //nextButton.style.display = 'none';
    }

    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        if(totalScore>=7 && totalScore<=10)
        {
          result.innerHTML =
         `<div class="final-score">
         <h1>The Maldives</h1>
         <div class="summary">
            <p>You have a charming charisma which calls for a classic 
            beach vacation. There's nothing more iconic than the Maldives.
            Maldives is the best for that calm and relaxing personality you have.</p>
        </div>
        <button class="restart">Restart Quiz</button>
        </div>`;
        return;
      }

      else if(totalScore>=11 && totalScore<=14)
        {
          result.innerHTML =
         `<div class="final-score">
            <h1>Norway</h1>
            <div class="summary"
            <p>You love to enjoy and have fun in your life. Norway offers
            you a lot that you can explore. Watch the magical skies and 
            phenomenal lakes. This country is as happy as you. </p>
            </div>
        <button class="restart">Restart Quiz</button>
        </div>`;
        return;
      }

      else if(totalScore>=15 && totalScore<=17)
        {
          result.innerHTML =
         `<div class="final-score">
            <h1>Spain</h1>
            <div class="summary"
            <p>Extroverted, bold and fun, you are the ideal person
            for that long road trip across Spain. Enjoy the delicious food, culture
            and the vibrant festivals here.
            </p>
            </div>
        <button class="restart">Retake Quiz</button>
        </div>`;
        return;
      }

      else if(totalScore>=18 && totalScore<=21)
        {
          result.innerHTML =
         `<div class="final-score">
            <h1>Venice, Italy</h1>
            <div class="summary"
            <p>The calmness in you is as beautiful as this gorgeous city in Italy.
            Relish the delicious food and those quiet places that you love.
            Don't forget to ride a gondola in Venice and get lost in this city.
            </p>
            </div>
        <button class="restart">Restart Quiz</button>
         </div>`;
        return;
      }

      else if(totalScore>=22 && totalScore<=24)
        {
          result.innerHTML =
         `<div class="final-score">
            <h1>Santorini, Greece</h1>
            <div class="summary"
            <p> Santorini is defined by its simplicity and adaptability just as you.
            Wander through the charming stone-paved valleys here. 
            The sunsets here are unmatched, just pure peace that you wish for.
            </p>
            </div>
        <button class="restart">Restart Quiz</button>
        </div> `;
        return;
      }

      else if(totalScore>=25 && totalScore<=28)
        {
          result.innerHTML =
         `<div class="final-score">
            <h1>Tokyo, Japan</h1>
            <div class="summary"
            <p>You love the vibes and the noise that cities offer.
            Just wander around Tokyo enjoying the top class food,
            the markets and those cherry blossoms. You have just a little 
            bit of spice in your personality just like the energy Tokyo has.
            </p>
            </div>
        <button class="restart">Restart Quiz</button>
         </div>`;
        return;
      }
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}

container.style.display='none';
startButton.onclick = ()=>{
  cover.style.display = 'none';
    container.style.display='block'; //show quiz box
    generateQuestions(currentQuestion);
}

nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);