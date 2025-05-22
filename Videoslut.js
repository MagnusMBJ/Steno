document.addEventListener("DOMContentLoaded", () => {
  function showFaktaSection(sectionClass) {
    // Fjern alle tidligere aktive fakta-sektioner
    document.querySelectorAll(".fakta-sektion").forEach((section) => {
      section.classList.remove("active");
      section.style.display = "none";
    });

    const target = document.querySelector(`.${sectionClass}`);
    if (target) {
      target.style.display = "flex";
      target.classList.add("active");
      console.log(`Viser sektion: ${sectionClass}`);

      // Vis pil
      document.querySelector(".tilbage-knap").style.display = "block";
    } else {
      console.warn(`Sektion ikke fundet: ${sectionClass}`);
    }
  }

  const videoGroups = {
    angst: ["video1", "video2", "video3"],
    depri: ["video4", "video5", "video6"],
    stress: ["video7", "video8", "video9"],
  };

  Object.entries(videoGroups).forEach(([groupName, videoIds]) => {
    videoIds.forEach((videoId) => {
      const video = document.getElementById(videoId);
      if (!video) {
        console.warn(`Video ikke fundet: ${videoId}`);
        return;
      }

      video.addEventListener("ended", () => {
        console.log(`Video ${videoId} sluttede. Viser fakta-${groupName}`);
        showFaktaSection(`fakta-${groupName}`);
      });
    });
  });

  //  Tilbage-knappen funktion
  const tilbageKnap = document.querySelector(".tilbage-knap");
  const startSection = document.querySelector(".vælg-cirkel-section");

  function visVælgCirkelSection() {
    vælgCirkelSection.style.display = "flex";
  }

  if (tilbageKnap) {
tilbageKnap.addEventListener('click', () => {
  // Skjul alle sektioner
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.remove('active', 'section-active', 'show');
    sec.style.display = 'none';
  });

  // Nulstil zoomede cirkler og vis dem igen
  const cirkelContainers = document.querySelectorAll(".cirkel-container");
  cirkelContainers.forEach(container => {
    const cirkel = container.querySelector(".cirkel");
    const tekst = container.querySelector(".cirkel-tekst");

    // Reset styles
    cirkel.style.position = "";
    cirkel.style.left = "";
    cirkel.style.top = "";
    cirkel.style.width = "";
    cirkel.style.height = "";
    cirkel.style.zIndex = "";
    cirkel.classList.remove("zoom-effect");

    // Reset display
    container.style.display = "flex";
    if (tekst) tekst.style.display = "block";
  });

  // Vis start-section igen
  if (startSection) {
    startSection.style.display = 'flex';
    startSection.classList.add('active');
  }
      // Stop og nulstil alle videoer
      document.querySelectorAll("video").forEach((video) => {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      });
    });
  }
});
