const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const progressBar = document.getElementById("progress");
const customProgressBar = document.getElementById("custom-progress-bar");

const baseURL = "/songs";

let currentTrack = 0;

// the songs
const songs = [
  { file: "Aidan.mp3", albumArt: "Aiden.jpg" },
  { file: "autumn_sun.mp3", albumArt: "BestPart.jpg" },
  { file: "best_part_of_me.mp3", albumArt: "BestPart.jpg" },
  { file: "Better Days - LAKEY INSPIRED.mp3", albumArt: "Better Days.jpg" },
  { file: "just_relax.mp3", albumArt: "justRelax_img.jpeg" },
  { file: "paranormal-is-real-leonell-cassio.mp3", albumArt: "paranormal_real_500.jpg" },
  { file: "Polarity.mp3", albumArt: "Polarity.jpg" }
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

// changing the speed
audioPlayer.addEventListener("timeupdate", () => {
  progressBar.value = audioPlayer.currentTime / audioPlayer.duration;
  customProgressBar.style.width = `${
    (audioPlayer.currentTime / audioPlayer.duration) * 100
  }%`;

  console.log(`${audioPlayer.currentTime} / ${audioPlayer.duration}`);

  audioPlayer.playbackRate += 0.01;
});

// lower volume? and mute
document.addEventListener("keydown", (event) => {
  switch (event.key.toLowerCase()) {   
    case " ":
      event.preventDefault();
      audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
      break;

    case "m":
      audioPlayer.muted = !audioPlayer.muted;
      break;
  }
});
