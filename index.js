let progress = document.getElementById("progress");
let playButton = document.querySelector(".play-button");
let song = new Audio(); // create an audio element once
let currentSongIndex = 0;
const songs = [
  // English songs
  {
    name: "Low",
    artist: "Flo Rida ft. T-Pain",
    src: "songs/Flo Rida – Low (feat. T-Pain).mp3",
    img: "photos/image.png"
  },
  {
    name: "Somebody That I Used To Know",
    artist: "Gotye ft. Kimbra",
    src: "songs/Gotye – Somebody That I Used To Know.mp3",
    img: "photos/image.png"
  },
  {
    name: "If The World Was Ending",
    artist: "JP Saxe & Julia Michaels",
    src: "songs/JP Saxe, Julia Michaels – If The World Was Ending.mp3",
    img: "photos/image.png"
  },
  {
    name: "Rude",
    artist: "MAGIC!",
    src: "songs/MAGIC! - Rude.mp3",
    img: "photos/image.png"
  },
  {
    name: "Sugar",
    artist: "Maroon 5",
    src: "songs/Maroon 5 - Sugar.mp3",
    img: "photos/image.png"
  },
  {
    name: "Hey Ya!",
    artist: "OutKast",
    src: "songs/OutKast - Hey Ya!.mp3",
    img: "photos/image.png"
  },
  {
    name: "Never Gonna Give You Up",
    artist: "Rick Astley",
    src: "songs/Rick Astley - Never Gonna Give You Up.mp3",
    img: "photos/image.png"
  },
  {
    name: "Beautiful Girls",
    artist: "Sean Kingston",
    src: "songs/Sean Kingston - Beautiful Girls.mp3",
    img: "photos/image.png"
  },
  {
    name: "Meet Me Halfway",
    artist: "The Black Eyed Peas",
    src: "songs/The Black Eyed Peas - Meet Me Halfway.mp3",
    img: "photos/image.png"
  },
  {
    name: "Pump It",
    artist: "The Black Eyed Peas",
    src: "songs/The Black Eyed Peas - Pump It.mp3",
    img: "photos/image.png"
  },

  // Spanish songs
  {
    name: "Atrevete te te",
    artist: "Calle 13",
    src: "spanishsongs/Calle 13 - Atrevete te te (Explicit).mp3",
    img: "photos/image.png"
  },
  {
    name: "Guatauba",
    artist: "Unknown",
    src: "spanishsongs/Guatauba.mp3",
    img: "photos/image.png"
  },
  {
    name: "Yo Quiero Bailar",
    artist: "Ivy Queen",
    src: "spanishsongs/Ivy Queen - Yo Quiero Bailar.mp3",
    img: "photos/image.png"
  },
  {
    name: "Mochila de Amor",
    artist: "Miguelito y Divino",
    src: "spanishsongs/MIGUELITO Y DIVINO MOCHILA DE AMOR.mp3",
    img: "photos/image.png"
  },
  {
    name: "Pa' Que Retozen",
    artist: "Tego Calderón",
    src: "spanishsongs/Pa' Que Retozen.mp3",
    img: "photos/image.png"
  },
  {
    name: "Down",
    artist: "R.K.M, Ken-Y",
    src: "spanishsongs/R.K.M, Ken-Y - Down.mp3",
    img: "photos/image.png"
  },
  {
    name: "Sensacion Del Bloque",
    artist: "Randy & De La Ghetto",
    src: "spanishsongs/Randy & De La Ghetto - Sensacion Del Bloque.mp3",
    img: "photos/image.png"
  },
  {
    name: "Te Suelto el Pelo",
    artist: "Unknown",
    src: "spanishsongs/Te Suelto el Pelo.mp3",
    img: "photos/image.png"
  },
  {
    name: "Tiburón",
    artist: "Proyecto Uno",
    src: "spanishsongs/TIBURÓN - Proyecto Uno.mp3",
    img: "photos/image.png"
  },
  {
    name: "El Doctorado",
    artist: "Tony Dize",
    src: "spanishsongs/Tony Dize - El Doctorado.mp3",
    img: "photos/image.png"
  }
];

function playSong() {
  let audio = new Audio("path/to/your/audiofile.mp3");
  audio.play();
}

function shuffleSong() {
  const randomIndex = Math.floor(Math.random() * songs.length);
  currentSongIndex = randomIndex;
  loadSong(currentSongIndex);
  song.play();
  playButton.src = "photos/pausebutton.png";
}

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

song.ontimeupdate = function () {
  progress.value = song.currentTime;
};

progress.oninput = function () {
  song.currentTime = progress.value;
};

function playPause() {
  if (song.paused) {
    song.play();
    playButton.src = "photos/pausebutton.png";
  } else {
    song.pause();
    playButton.src = "photos/playbutton.png";
  }
}

// const test = new Audio

// let currentIndex = 0;
// let isPlaying = false;

// const audio = document.getElementById("song");
// const playBtn = document.querySelector(".play-button");
// const prevBtn = document.querySelector(".previous-button");
// const nextBtn = document.querySelector(".next-button");
// const shuffleBtn = document.querySelector(".shuffle-button");

// const songTitle = document.querySelector(".songname");
// const songArtist = document.querySelector(".artist");
// const songImg = document.querySelector(".song-img");
// const progress = document.getElementById("progress");

// function loadSong(index) {
//   const song = songs[index];
//   audio.src = song.src;
//   songTitle.textContent = song.name;
//   songArtist.textContent = song.artist;
//   songImg.src = song.img;
//   audio.load();
// }

// function playSong() {
//   playBtn.play().then(() => {
//     isPlaying = true;
//     playBtn.src = "photos/pausebutton.png";
//   }).catch(err => {
//     console.error("Error playing song:", err);
//   });
// }

// function pauseSong() {
//   audio.pause();
//   isPlaying = false;
//   playBtn.src = "photos/playbutton.png";
// }

// function playPause() {
//   if (isPlaying) {
//     pauseSong();
//   } else {
//     playSong();
//   }
// }

// function nextSong() {
//   currentIndex = (currentIndex + 1) % songs.length;
//   loadSong(currentIndex);
//   if (isPlaying) playSong();
// }

// function prevSong() {
//   currentIndex = (currentIndex - 1 + songs.length) % songs.length;
//   loadSong(currentIndex);
//   if (isPlaying) playSong();
// }

// function shuffleSong() {
//   let newIndex;
//   do {
//     newIndex = Math.floor(Math.random() * songs.length);
//   } while (newIndex === currentIndex);

//   currentIndex = newIndex;
//   loadSong(currentIndex);
//   if (isPlaying) playSong();
// }

// audio.ontimeupdate = () => {
//   if (audio.duration) {
//     progress.value = (audio.currentTime / audio.duration) * 100;
//   }
// };

// progress.oninput = () => {
//   audio.currentTime = (progress.value / 100) * audio.duration;
// };

// // --- Add event listeners ---
// playBtn.addEventListener("click", playPause);
// nextBtn.addEventListener("click", nextSong);
// prevBtn.addEventListener("click", prevSong);
// shuffleBtn.addEventListener("click", shuffleSong);

// // --- Initialize ---
// loadSong(currentIndex);