const video = document.getElementById("playing-video");
const muteButton = document.getElementById("son-button-casque");

muteButton.addEventListener("click", function() {
  if (video.muted) {
    video.muted = false;
    muteButton.innerHTML = "Mute";
  } else {
    video.muted = true;
    muteButton.innerHTML = "Unmute";
  }
});