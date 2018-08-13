 var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.getElementById("guesses");
var lastResult = document.getElementById("lastResult");
var lowOrHi = document.getElementById("lowOrHi");
var guessSubmit = document.getElementById("guessSubmit");
var guessField = document.getElementById("guessField");
var guessCount = 1;
function checkGuess() {
  var userGuess = Number(guessField.value);
  guesses.innerHTML += userGuess + " ";
  if(guessCount == 10) {
    lastResult.innerHTML = "!!!GAME OVER!!!";
    disableForm();
  } else {
    
    if(userGuess == randomNumber) {
      lastResult.innerHTML = "Congratulations! You got it right!";
      lowOrHi.innerHTML = "";
      disableForm();
    } else {
      lastResult.innerHTML = "Wrong!";
      if(userGuess < randomNumber) {
        lowOrHi.innerHTML = "Your guess is too low!";
      } else if(userGuess > randomNumber) {
        lowOrHi.innerHTML = "Your guess is too high!";
      }
    }
    guessCount++;
    guessField.value = "";
  }
}
function disableForm() {
  var wholeForm = document.querySelector(".form"); // grab a reference to the whole form (the contents of the div with class form)
  wholeForm.style.opacity = 0.5; // change the opacity of the form to 0.5
  guessField.setAttribute("disabled", "disabled");
  guessSubmit.setAttribute("disabled", "disabled"); // disable the form field and submit button so they can no longer be used
}
guessSubmit.onclick = checkGuess;