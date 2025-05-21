let selectedVideoId = null;

function enableAudio(videoId) {
  selectedVideoId = videoId;

  // Stop all other videos
  document.querySelectorAll("video").forEach(v => {
    v.pause();
    v.currentTime = 0;
    v.muted = true;
  });

  const video = document.getElementById(videoId);
  video.muted = false;

  setTimeout(() => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => console.error("Playback error:", error));
    }
  }, 2000);
}
