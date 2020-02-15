$(document).ready(function() {

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCPby64S1gkCpFZeYkafKfaqDNN61AB4f4",
  authDomain: "rps-multiplayer-game-c8781.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-game-c8781.firebaseio.com",
  projectId: "rps-multiplayer-game-c8781",
  storageBucket: "rps-multiplayer-game-c8781.appspot.com",
  messagingSenderId: "675424472021",
  appId: "1:675424472021:web:c7435b115b86f4e02b0b5c"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Create a variable to reference the database.
  var database = firebase.database();

  var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time
// the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if (snap.val()) {

 
    // // Add user to the connections list.
    var con = connectionsRef.push(true) 
    // console.log(count);
    // count++
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

// When first loaded or when the connections list changes...
connectionsRef.on("child_added", function(snapshot) {

  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
   
if(snapshot.val().name!=undefined)
  $("#players").append(snapshot.val().name +"<br>")
});


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

var addUser = document.getElementById("adduser");

document.addEventListener("click", function() {
    var player = document.getElementById("text").value
 
    
      if(player.length>0){
  // Add user to the connections list.
  var con = connectionsRef.push({ 
    name: player
  }) 
  
  
      }
      
      
})

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

        } else if (userGuess === computerGuess) {
            ties++;
        } else {
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