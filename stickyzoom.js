document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".fakta-container");

  notes.forEach(note => {
    note.addEventListener("click", () => {
      const targetId = note.getAttribute("data-target");
      const targetSection = document.getElementById(targetId + "-section");

      // Hide all video sections
      allVideoSections.forEach(sec => {
        sec.classList.remove("active");
        sec.style.display = "none";
      });

      // Hide other containers
      document.querySelectorAll(".fakta-container").forEach(c => {
        if (c !== container) c.style.display = "none";
      });

      // Delay before switch
      setTimeout(() => {
        // Hide all sections
        document.querySelectorAll("section").forEach(sec => {
          sec.style.display = "none";
        });

        // Show correct video section and play
        targetSection.style.display = "block";
        targetVideo.currentTime = 0;
        targetVideo.muted = false;
        targetVideo.play().catch(err => console.error("Playback error:", err));
      }, 1000); // match animation time
    });
  });
});