function enableAudio(videoId) {
    const video = document.getElementById(videoId);
  
    // Unmute immediately
    video.muted = false;
  
    // Delay video playback by 2 seconds
    setTimeout(() => {
      const playPromise = video.play();
  
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Playback error:", error);
        });
      }
    }, 2000);
  }
  