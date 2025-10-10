let randomno = parseInt(Math.random()*100+1);

const  submit = document.querySelector('#submit');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guess');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParsar');

const p = document.createElement('p');

let prevGuess = [];
let numGuess  = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

    


function validateGuess(guess){
    // validate value between 1 to 100 or not
    if(isNaN(guess))
    {
        alert("Please enter a valid number")
    }else if(guess<1)
    {
        alert("Please enter a number more than 1");
    }else if(guess>100)
    {
        alert("Please enter a number less than 100");
    }else{
        prevGuess.push(guess);
        if(numGuess===11)
        {
            displayGuess(guess);
            displayMessage(`Guess Over. Random no was ${randomno}`);
            endgame();
        }else{
        displayGuess(guess);
        checkGuess(guess);
    }
    }
     

}

function checkGuess(guess)
{ // weather the value is  equal to random no if yes then using display u win the game
   if(guess === randomno)
   {
     displayMessage(`you guessed it right`)
   }else if(guess<randomno)
   {
      displayMessage(`Number is too low`)
   }else if(guess>randomno)
   {
      displayMessage(`Number is too high`);
   }
}

function displayMessage(message)
{
   lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess)
{// clean value, update guess,array
     userInput.value = '';
     guessSlot.innerHTML += `${guess} `;
     numGuess++;
     remaining.innerHTML = `${11-numGuess}`;

}

function endgame()
{
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newgame">Start a new game<h2>`
    startOver.appendChild(p);
    playGame = false;
    newgame();

}

function newgame()
{
 const newgame =  document.querySelector('#newGame');
 newgameButton.addEventListener('click',function(e){
     randomno = parseInt(Math.random()*100+1);
     prevGuess = [];
     numGuess = 1;
     guessSlot.innerHTML = '';
     remaining.innerHTML = `${11-numGuess}`;
     userInput.removeAttribute('disabled');
     startOver.removeChild(p);
     
   playGame = true;
 });
}