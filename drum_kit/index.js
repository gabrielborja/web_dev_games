function drumPlayer() {

  // Detecting Buttons Pressed.
  var count = document.querySelectorAll(".drum");

  for (var i = 0; i < count.length; i++) {
    count[i].addEventListener("click", function() {

      var buttonPressed = this.innerHTML;
      keyListener(buttonPressed);
      buttonAnimation(buttonPressed);

    });
  }

  // Detecting Keyboard Events.
  document.addEventListener("keydown", function(event) {
    keyListener(event.key);
    buttonAnimation(event.key);
  });

  // Function that plays the sound according to the specific key.
  function keyListener(key) {

    switch (key) {
      case "w":
        var audioObj1 = new Audio("public\\sounds\\tom-1.mp3");
        audioObj1.play();
        break;
      case "a":
        var audioObj2 = new Audio("public\\sounds\\tom-2.mp3");
        audioObj2.play();
        break;
      case "s":
        var audioObj3 = new Audio("public\\sounds\\tom-3.mp3");
        audioObj3.play();
        break;
      case "d":
        var audioObj4 = new Audio("public\\sounds\\tom-4.mp3");
        audioObj4.play();
        break;
      case "j":
        var audioObj5 = new Audio("public\\sounds\\snare.mp3");
        audioObj5.play();
        break;
      case "k":
        var audioObj6 = new Audio("public\\sounds\\kick-bass.mp3");
        audioObj6.play();
        break;
      case "l":
        var audioObj7 = new Audio("public\\sounds\\crash.mp3");
        audioObj7.play();
        break;

      default:
        alert(key + ": is not a valid keyword");
    }
  }

}

// Function that Animates the drum images when a click or keyboard event is detected.
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  if (activeButton !== null) {
    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 200); // 200 milliseconds delay or 0.2 seconds.
  }

}

drumPlayer();
