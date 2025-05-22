"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const stickyNotes = document.querySelectorAll('.valg-container');

  stickyNotes.forEach(note => {
    note.addEventListener('click', () => {
      const targetVideoId = note.dataset.target;
      const targetVideo = document.getElementById(targetVideoId);
      const targetSection = document.getElementById(`${targetVideoId}-section`);

      // Hvis videoen eller sektionen ikke findes, gør ikke noget
      if (!targetVideo || !targetSection) return;

      note.classList.add('zoom-effect');
      const valgSlide = note.closest('.valg-slide');
      valgSlide.style.opacity = '0';
      valgSlide.style.pointerEvents = 'none';

      // Skjul valg-slide
      setTimeout(() => {
        valgSlide.style.display = 'none';
        valgSlide.classList.remove('show');
      }, 600);

      targetSection.classList.add('active');
      targetVideo.currentTime = 0;
      targetVideo.muted = false;
      targetVideo.load();

      // Forsøg at afspille videoen og log fejl, hvis der er nogen
      const playPromise = targetVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log(`▶️ Video ${targetVideoId} started`))
          .catch(error => console.error('Video play error:', error));
      }

      // Når videoen er færdig, fjern aktiv sektion og vis fakta
      targetVideo.onended = () => {
        console.log(` Video ${targetVideoId} ended`);
        targetSection.classList.remove('active');

        if (['video1', 'video2', 'video3'].includes(targetVideoId)) {
          showFakta('fakta-angst');
        } else if (['video4', 'video5', 'video6'].includes(targetVideoId)) {
          showFakta('fakta-depri');
        } else if (['video7', 'video8', 'video9'].includes(targetVideoId)) {
          showFakta('fakta-stress');
        }
      };
    });
  });
});
