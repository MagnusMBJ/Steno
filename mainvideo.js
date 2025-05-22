"use strict";

// Variabel til at gemme den valgte video
let selectedVideoId = null;

// Funktion til at aktivere lyd på en specifik video
function enableAudio(videoId) {
  selectedVideoId = videoId;

  // Pause alle videoer, nulstil deres afspilningstid og sæt dem på lydløs
  document.querySelectorAll("video").forEach(v => {
    v.pause();
    v.currentTime = 0;
    v.muted = true;
  });

  // Hent den valgte video og fjern lydløs
  const video = document.getElementById(videoId);
  video.muted = false;

  // Afspil videoen efter 2 sekunders forsinkelse
  setTimeout(() => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => console.error("Afspilningsfejl:", error));
    }
  }, 2000);
}
