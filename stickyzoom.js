document.addEventListener('DOMContentLoaded', () => {
  const stickyNotes = document.querySelectorAll('.valg-container');

  stickyNotes.forEach(note => {
    note.addEventListener('click', () => {
      const targetVideoId = note.dataset.target;
      const targetVideo = document.getElementById(targetVideoId);
      const targetSection = document.getElementById(`${targetVideoId}-section`);

      if (!targetVideo || !targetSection) return;

      // Zoom effekt
      note.classList.add('zoom-effect');
      const valgSlide = note.closest('.valg-slide');
      valgSlide.style.opacity = '0';
      valgSlide.style.pointerEvents = 'none';

      setTimeout(() => {
        valgSlide.style.display = 'none';
        valgSlide.classList.remove('show');
      }, 600);

      // Vis video og afspil
      targetSection.classList.add('active');
      targetVideo.currentTime = 0;
      targetVideo.muted = false;
      targetVideo.load();

      const playPromise = targetVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log(`▶️ Video ${targetVideoId} started`))
          .catch(error => console.error('Video play error:', error));
      }

      // Tilføj ended event HVER GANG video starter
      targetVideo.onended = () => {
        console.log(`✅ Video ${targetVideoId} ended`);

        // Fjern video-sektion
        targetSection.classList.remove('active');

        // Vis tilhørende fakta-sektion
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

  // Hjælpefunktion til at vise fakta
  function showFakta(sectionClass) {
    document.querySelectorAll('.fakta-sektion').forEach(sec => {
      sec.classList.remove('active');
    });
    const el = document.querySelector(`.${sectionClass}`);
    if (el) {
      el.classList.add('active');
      el.scrollIntoView({ behavior: 'smooth' });
      console.log(`📘 Viser sektion: ${sectionClass}`);
    } else {
      console.warn(`⚠️ Sektion ikke fundet: ${sectionClass}`);
    }
  }
});
