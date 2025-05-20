let currentSlide = 0;

function enableAudio(videoId) {
  const video = document.getElementById(videoId);
  const slider = document.getElementById("slider-wrapper");

  // Unmute immediately
  video.muted = false;

  // Wait 1 second before playing
  setTimeout(() => {
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(err => console.error("Playback error:", err));
    }

    // When video ends, slide to the next section
    video.onended = () => {
      currentSlide++;

      const totalSlides = document.querySelectorAll("#slider-wrapper section").length;

      if (currentSlide < totalSlides) {
        const offset = currentSlide * -100;
        slider.style.transform = `translateX(${offset}vw)`;
      }
    };
  }, 1000);
}