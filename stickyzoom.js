document.addEventListener('DOMContentLoaded', () => {
  const stickyNotes = document.querySelectorAll('.valg-container');

  stickyNotes.forEach(note => {
    note.addEventListener('click', () => {
      const targetVideoId = note.dataset.target;
      const targetVideo = document.getElementById(targetVideoId);
      const targetSection = document.getElementById(`${targetVideoId}-section`);

      if (!targetVideo || !targetSection) return;

      // Zoom note (valgfri)
      note.classList.add('zoom-effect');

      const valgSlide = note.closest('.valg-slide');

      // Fade hele valg-slide væk
      valgSlide.style.opacity = '0';
      valgSlide.style.pointerEvents = 'none';

      // Fjern fra DOM layout lidt efter
      setTimeout(() => {
        valgSlide.style.display = 'none';
        valgSlide.classList.remove('show');
      }, 600);

      // Vis og afspil video
      targetSection.classList.add('active');
      setTimeout(() => {
        targetVideo.currentTime = 0;
        targetVideo.muted = false;
        targetVideo.play().catch(err => console.error('Video play error:', err));
      }, 400);
    });
  });
});
