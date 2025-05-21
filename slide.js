document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider-wrapper");
    const sections = Array.from(slider.querySelectorAll("section"));
  
    document.querySelectorAll("video").forEach(video => {
      video.addEventListener("ended", () => {
        const currentSection = video.closest("section");
        const currentIndex = sections.indexOf(currentSection);
        const nextIndex = currentIndex + 1;
  
        if (nextIndex < sections.length) {
          slider.style.transform = `translateX(${-100 * nextIndex}vw)`;
        }
      });
    });
  });
  