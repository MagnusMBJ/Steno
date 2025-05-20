let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider-wrapper");
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.addEventListener("ended", () => {
      currentSlide++;

      const totalSlides = document.querySelectorAll("#slider-wrapper section").length;

      if (currentSlide < totalSlides) {
        const offset = currentSlide * -100;
        slider.style.transform = `translateX(${offset}vw)`;
      }
    });
  });
});
