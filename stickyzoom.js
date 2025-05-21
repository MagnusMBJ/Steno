document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".fakta-container");

  containers.forEach(container => {
    container.addEventListener("click", () => {
      const targetId = container.dataset.target;
      const targetVideo = document.getElementById(targetId);
      const targetSection = document.getElementById(`${targetId}-section`);

      if (!targetVideo || !targetSection) return;

      const img = container.querySelector("img");

      if (img) {
        const rect = img.getBoundingClientRect();
        img.style.position = "fixed";
        img.style.left = `${rect.left}px`;
        img.style.top = `${rect.top}px`;
        img.style.width = `${rect.width}px`;
        img.style.height = `${rect.height}px`;
        img.style.zIndex = "1000";
        img.classList.add("zoom-effect");
      }

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
