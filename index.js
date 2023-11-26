
var numberOfDrumbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumbuttons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function () {

  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();

//what do to when click detected.
});
}
