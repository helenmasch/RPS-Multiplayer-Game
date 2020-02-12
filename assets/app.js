$(document).ready(function() {

// Array listing out rock, paper, scissors options
var computerChoices = ["r", "p", "s"];

// Whenever a key is pressed this function will run
document.onkeyup = function(event) {

    // Determines which key was pressed
    var userGuess = event.key;

    // Randomly chooses a choice from array aka computer's guess. 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Runs code if the user presses "r" or "p" or "s".
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        // Alert the userGuess + computerGuess
        alert("User guess: " + userGuess);
        alert("Computer guess: " + computerGuess);
    }
}

});