"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const cirkelContainers = document.querySelectorAll(".cirkel-container");
  const sections = {
    0: document.querySelector(".angst-section"),
    1: document.querySelector(".depri-section"),
    2: document.querySelector(".stress-section"),
  };

  cirkelContainers.forEach((container, index) => {
    const cirkel = container.querySelector(".cirkel");
    const tekst = container.querySelector(".cirkel-tekst");

    container.addEventListener("click", () => {

      if (tekst) tekst.style.display = "none";

      const rect = cirkel.getBoundingClientRect();

      cirkel.style.position = "fixed";
      cirkel.style.left = `${rect.left}px`;
      cirkel.style.top = `${rect.top}px`;
      cirkel.style.width = `${rect.width}px`;
      cirkel.style.height = `${rect.height}px`;
      cirkel.style.zIndex = "10";

      cirkelContainers.forEach((otherContainer, otherIndex) => {
        if (otherIndex !== index) {
          otherContainer.style.display = "none";
        }
      });

      cirkel.classList.remove(
        "spin-slow",
        "spin-medium",
        "spin-fast",
        "reverse"
      );

      cirkel.classList.add("zoom-effect");

      setTimeout(() => {
        document.querySelector(".vælg-cirkel-section").style.display = "none";

        Object.values(sections).forEach((sec) =>
          sec.classList.remove("section-active")
        );
        sections[index].classList.add("section-active");
        sections[index].scrollIntoView({ behavior: "smooth" });
        const video = sections[index].querySelector("video");
        if (video) {
          video.currentTime = 0;
          video.muted = false;
          video
            .play()
            .catch((err) => console.warn("Could not play video:", err));
        }
      }, 1000);
    });
  });
});
