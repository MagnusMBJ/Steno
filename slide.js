document.addEventListener('DOMContentLoaded', function () {
  const setups = [
    { videoId: 'angst-video', videoSectionClass: 'angst-section', valgSectionId: 'valg-angst' },
    { videoId: 'depression-video', videoSectionClass: 'depri-section', valgSectionId: 'valg-depression' },
    { videoId: 'stress-video', videoSectionClass: 'stress-section', valgSectionId: 'valg-stress' }
  ];

  setups.forEach(({ videoId, videoSectionClass, valgSectionId }) => {
    const video = document.getElementById(videoId);
    const videoSection = document.querySelector(`.${videoSectionClass}`);
    const valgSection = document.getElementById(valgSectionId);
    const topText = valgSection.querySelector('.valg-toptekst');

    // Start med at skjule valg-sektion
    valgSection.classList.remove('show');
    topText.classList.remove('visible');

    // Debug: Vis om video slutter
    video.addEventListener('ended', () => {
      console.log(`✔ Video "${videoId}" ended`);

      // Skjul videoens sektion
      if (videoSection) {
        videoSection.style.opacity = '0';
        videoSection.style.pointerEvents = 'none';
        setTimeout(() => {
          videoSection.style.display = 'none';
        }, 500); // Give fade tid til at virke
      }

      // Vis valg-sektion
      valgSection.classList.add('show');

      // Fade tekst ind lidt efter
      setTimeout(() => {
        topText.classList.add('visible');
      }, 300);
    });
  });
});
