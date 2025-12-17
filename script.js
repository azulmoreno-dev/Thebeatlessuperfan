// declare your functions
function firstfunction() {
  document.getElementById("george1").src = "images/george2.png";
  document.getElementById("firstsquare").classList.add("blue");
}

function secondfunction() {
  document.getElementById("john1").src = "images/john2.png";
  document.getElementById("secondsquare").classList.add("white");
}

function thirdfunction() {
  document.getElementById("paul1").src = "images/paul2.png";
  document.getElementById("thirdsquare").classList.add("blue");
}

function fourthfunction() {
  document.getElementById("ringo1").src = "images/ringo2.png";
  document.getElementById("fourthsquare").classList.add("white");
}
// NEW: show video when clicking the Beatles logo
function playVideo() {
  document.getElementById("video-container").classList.remove("gone");
}
