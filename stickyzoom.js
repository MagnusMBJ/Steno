document.addEventListener("DOMContentLoaded", () => {
  const allVideoSections = document.querySelectorAll(".video-section");
  const notes = document.querySelectorAll(".fakta-container");

  notes.forEach(note => {
    note.addEventListener("click", () => {
      const targetId = note.getAttribute("data-target");
      const targetSection = document.getElementById(targetId + "-section");

      // Hide all video sections
      allVideoSections.forEach(sec => {
        sec.classList.remove("active");
        sec.style.display = "none";
      });

      // Show and slide in the target video section
      targetSection.style.display = "block";
      setTimeout(() => {
        targetSection.classList.add("active");
      }, 10);

      // Play the video
      const video = targetSection.querySelector("video");
      video.currentTime = 0;
      video.play();
    });
  });
});