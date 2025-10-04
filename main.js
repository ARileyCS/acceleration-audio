const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const progressBar = document.getElementById("progress");
const customProgressBar = document.getElementById("custom-progress-bar");
const speedDisplay = document.getElementById("speed");
const album = document.getElementById("albumArt");
const attribution = document.getElementById("attribution");

const baseURL = "/songs";
const artURL = "/albumart";

let currentTrack = 0;

// the songs
const songs = [
  { file: "Aidan.mp3", albumArt: "Aidan.jpg", name: "Aidan" },
  { file: "autumn_sun.mp3", albumArt: "autumn_sun.png", name: "Autumn Sun" },
  { file: "best_part_of_me.mp3", albumArt: "BestPart.jpg", name: "Best Part of Me" },
  { file: "Better Days - LAKEY INSPIRED.mp3", albumArt: "Better Days.jpg", name: "Better Days - LAKEY INSPIRED" },
  { file: "just_relax.mp3", albumArt: "justRelax_img.jpeg", name: "Just Relax" },
  { file: "paranormal-is-real-leonell-cassio.mp3", albumArt: "paranormal_real_500.jpg", name: "Paranormal is Real"  },
  { file: "Polarity.mp3", albumArt: "Polarity.jpg", name: "Polarity"  }
];

// The play button stuff
playButton.addEventListener("click", () => {
  audioPlayer.src = `${baseURL}/${songs[currentTrack].file}`;
  audioPlayer.load();
  audioPlayer.play();
});

// pausing
pauseButton.addEventListener("click", () => {
  console.log("pause");
  audioPlayer.pause();
});

//skip forward
skipForwardButton.addEventListener("click", () => {
  console.log("skip forward 10");
  audioPlayer.currentTime += 10;
});

//skip backward
skipBackwardButton.addEventListener("click", () => {
  console.log("skip back 10");
  audioPlayer.currentTime -= 10;
});

// changing the speed
audioPlayer.addEventListener("timeupdate", () => {
  progressBar.value = audioPlayer.currentTime / audioPlayer.duration;
  customProgressBar.style.width = `${
    (audioPlayer.currentTime / audioPlayer.duration) * 100
  }%`;

  console.log(`${audioPlayer.currentTime} / ${audioPlayer.duration}`);

  audioPlayer.playbackRate += 0.01;

  speedDisplay.textContent = `Current Playback Rate: ${(audioPlayer.playbackRate)}`;
});

// keyboard shortcuts
document.addEventListener("keydown", (event) => {
  switch (event.key.toLowerCase()) {
    // space to pause/play
    case " ":
      event.preventDefault();
      audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
      break;
    // m to mute
    case "m":
      audioPlayer.muted = !audioPlayer.muted;
      break;
  }
});

// had to be different because of the lowercase conversion
document.addEventListener("keydown", (event) => {
  switch (event.key){
    // skip forward
    case "ArrowRight":
      event.preventDefault();
      console.log("skip forward 10");
      audioPlayer.currentTime += 10;
      break;
    // skip backward
    case "ArrowLeft":
      event.preventDefault();
      audioPlayer.currentTime -= 10;
      break;
  }
});

audioPlayer.addEventListener("ended", () => {
  if (currentTrack === songs.length - 1)
    currentTrack = 0; 
  else
    currentTrack++;
  
  album.src = `${artURL}/${songs[currentTrack].albumArt}`;
  attribution.textContent = songs[currentTrack].name

  audioPlayer.src = `${baseURL}/${songs[currentTrack].file}`;
  audioPlayer.load();
  audioPlayer.play();
  

})




