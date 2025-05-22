"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Hent alle cirkel-container elementer og de tre sektioner (angst, depression, stress)
  const cirkelContainers = document.querySelectorAll(".cirkel-container");
  const sections = {
    0: document.querySelector(".angst-section"),
    1: document.querySelector(".depri-section"),
    2: document.querySelector(".stress-section"),
  };

  // Gå igennem hver cirkel-container og tilføj en click event listener
  cirkelContainers.forEach((container, index) => {
    const cirkel = container.querySelector(".cirkel");
    const tekst = container.querySelector(".cirkel-tekst");

    container.addEventListener("click", () => {

      // Skjul teksten når en cirkel er klikket på
      if (tekst) tekst.style.display = "none";

      // Få fat i position og størrelse på cirklen
      const rect = cirkel.getBoundingClientRect();

      // Positioner cirklen fast og ændre dens størrelse
      cirkel.style.position = "fixed";
      cirkel.style.left = `${rect.left}px`;
      cirkel.style.top = `${rect.top}px`;
      cirkel.style.width = `${rect.width}px`;
      cirkel.style.height = `${rect.height}px`;
      cirkel.style.zIndex = "10";

      // Skjul alle andre cirkler
      cirkelContainers.forEach((otherContainer, otherIndex) => {
        if (otherIndex !== index) {
          otherContainer.style.display = "none";
        }
      });

      // Fjern spin-effekter og tilføj zoom-effekt til den valgte cirkel
      cirkel.classList.remove(
        "spin-slow",
        "spin-medium",
        "spin-fast",
        "reverse"
      );
      cirkel.classList.add("zoom-effect");

      // Efter 1 sekund, fjern valgfærdig sektion og vis den relevante sektion
      setTimeout(() => {
        document.querySelector(".vælg-cirkel-section").style.display = "none";

        // Fjern 'section-active' fra alle sektioner og tilføj den til den valgte
        Object.values(sections).forEach((sec) =>
          sec.classList.remove("section-active")
        );
        sections[index].classList.add("section-active");
        sections[index].scrollIntoView({ behavior: "smooth" });

        // Find videoen i den valgte sektion og afspil den
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
