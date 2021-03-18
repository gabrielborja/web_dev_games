// Script used to generate random Numbers and assign them to the dicee game.

function randomDice() {

  // Generate pseudo-random numbers from 1 to 6 and assign them to two variables.
  var randomNumber1 = Math.floor((Math.random(0, 6)*6) + 1);
  var randomNumber2 = Math.floor((Math.random(0, 6)*6) + 1)

  // Concatenate the randomized numbers with the file path for each image.
  var diceImage1 = "images\\dice" + randomNumber1 + ".png";
  var diceImage2 = "images\\dice" + randomNumber2 + ".png";

  // Query each image and set the new source attribute to the new dice image.
  var newImage1 = document.querySelector(".img1").setAttribute("src", diceImage1);
  var newImage2 = document.querySelector(".img2").setAttribute("src", diceImage2);

  // Query selector for the h1, so simplify typing in logical test below

  var title = document.querySelector(".container h2");

  // Logical test to outline the winner.
  if (randomNumber1 > randomNumber2) {
      title.innerHTML = "🥊 Player 1 won";
  }
  else if (randomNumber2 > randomNumber1) {
      title.innerHTML = "Player 2 won 🥊";
  }
  else {
      title.innerHTML = "It's a draw!";
  }

}

randomDice();
