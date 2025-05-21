document.addEventListener("DOMContentLoaded", () => {
    const noteContainers = document.querySelectorAll(".fakta-container");
  
    noteContainers.forEach(container => {
      const noteImg = container.querySelector(".fakta-note");
      const noteText = container.querySelector(".fakta-tekst");
      const targetSelector = container.dataset.target;
      const targetSection = document.querySelector(targetSelector);
  
      container.addEventListener("click", () => {
        // Hide this note's text
        if (noteText) noteText.style.display = "none";
  
        // Zoom animation
        const rect = noteImg.getBoundingClientRect();
        noteImg.style.position = "fixed";
        noteImg.style.left = `${rect.left}px`;
        noteImg.style.top = `${rect.top}px`;
        noteImg.style.width = `${rect.width}px`;
        noteImg.style.height = `${rect.height}px`;
        noteImg.style.zIndex = "10";
  
        // Hide all other notes
        noteContainers.forEach(other => {
          if (other !== container) {
            other.style.display = "none";
          }
        });
  
        noteImg.classList.add("zoom-effect");
  
        // Show result section after zoom
        setTimeout(() => {
          const faktaSlide = container.closest(".fakta-slide");
          if (faktaSlide) faktaSlide.style.display = "none";
  
          document.querySelectorAll(".result-section").forEach(sec =>
            sec.classList.add("hidden")
          );
  
          if (targetSection) {
            targetSection.classList.remove("hidden");
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 1000);
      });
    });
  });