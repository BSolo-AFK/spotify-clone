let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playButton = document.querySelector("play-button");

song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
}
function playPause() {
  if (playButton.classList.contains("photos\playbutton.png")) {
	song.pause();
	playButton.classList.remove("photos\playbutton.png");
	playButton.classList.add("photos\pausebutton.png");
  }
  else {
	song.play();
		playButton.classList.add("photos\pausebutton.png");
			playButton.classList.remove("photos\playbutton.png");
  }
}