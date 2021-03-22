// Simon game using jQuery library.

// Array that holds the colors of the game buttons
var buttonColors = ["yellow", "red", "blue", "green"];

// Arrays that hold the random generated colors in order.
var gamePattern = [];
var userClickedPattern = [];

// Initializing the game variables.
var started = false;
var level = 0;

// Detecting when a keyboard key has been pressed and increase the level by 1.
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// jQuery method that detects the buttons that are clicked and triggers a function to store the id colors inside an array.
$(".btn").click(function() {

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

// Function that checks the user's clicked pattern. If correct, calls nextSequence() after 1000 ms.
// If false, plays the wrong sound, game over message and calls restartGame() function.
function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    restartGame();
  }
}

// Function that generates random numbres and stores them in an array.
function nextSequence() {

  //Reinitializing the user pattern for every new sequence.
  userClickedPattern = [];

  // increasing the level by 1.
  level++;

  $("#level-title").text("Level " + level);

  // random number generator
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  // Adding the randomly generated color to the game pattern array.
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

}

// Function that checks the current color, and changes the style by adding and removing the class named "pressed".
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100); // 100 millisecond delay.
}

// Function that creates a new Audio Object and plays the corresponding sound.
function playSound(name) {
  var audioObj = new Audio("public/sounds/" + name + ".mp3");
  audioObj.play();
}

// Function that restarts the game after calling the checkAnswer() function.
function restartGame() {
  level = 0;
  gamePattern = [];
  started = false;
}
