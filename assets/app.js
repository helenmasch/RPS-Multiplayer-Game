$(document).ready(function() {

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkj_4sYwTvkhgwgXIDvd8fEk0N2IQlyp8",
    authDomain: "class-activity-020120.firebaseapp.com",
    databaseURL: "https://class-activity-020120.firebaseio.com",
    projectId: "class-activity-020120",
    storageBucket: "class-activity-020120.appspot.com",
    messagingSenderId: "326113840454",
    appId: "1:326113840454:web:c4727e2b6d15934afe2947",
    measurementId: "G-9FFVWTS5MH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Create a variable to reference the database.
  var database = firebase.database();

// Array listing out rock, paper, scissors options
var computerChoices = ["r", "p", "s"];

// Variables to hold number of wins, losses and ties
var wins = 0;
var losses = 0;
var ties = 0;

// Create variables in which you'd like to display the user choices & computers choices in the html document
var gameDirections = document.getElementById("game-directions");
var userChoiceAnswer1 = document.getElementById("userchoice1-answer");
var userChoiceAnswer2 = document.getElementById("userchoice2-answer");
var computerChoiceAnswer = document.getElementById("computerchoice-answer");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");

// Whenever a key is pressed this function will run
document.onkeyup = function(event) {

    // Determines which key was pressed
    var userGuess = event.key;

    // Randomly chooses a choice from array aka computer's guess. 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Runs code if the user presses "r" or "p" or "s".
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        // If the user chooses r, p or s and the computer guess another variable, increases or decreases wins/losses or ties.
        if ((userGuess === "r") && (computerGuess === "s")) {
            wins++;
        }

        if ((userGuess === "s") && (computerGuess === "p")) {
            wins++;
        }

        if ((userGuess === "p") && (computerGuess === "r")) {
            wins++;
        }

        if ((userGuess === "r") && (computerGuess === "p")) {
            losses++;
        }

        if ((userGuess === "s") && (computerGuess === "r")) {
            losses++;
        }

        // Hide directions after game starts (user + computer guesses)
        gameDirections.textContent = "";

        // Display user1 + user2 + computer guesses
        userChoiceAnswer1.textContent = "User 1 Chose: " + userGuess;
        userChoiceAnswer2.textContent = "User 2 Chose: " + userGuess;
        computerChoiceAnswer.textContent = "Computer Chose " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
    }
}

});