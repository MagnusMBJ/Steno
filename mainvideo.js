function enableAudio(videoId) {
    const video = document.getElementById(videoId);
  
    // Unmute immediately
    video.muted = false;
  
    // Delay video playback by 1 second (1000 milliseconds)
    setTimeout(() => {
      const playPromise = video.play();
  
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // playback started
          })
          .catch(error => {
            console.error("Playback error:", error);
          });
      }
    }, 1000); // 1000ms = 1 second
  }