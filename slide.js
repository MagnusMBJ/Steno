"use strict";

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

    // Fjern visning af valg-sektionen og top-tekst ved start
    valgSection.classList.remove('show');
    topText.classList.remove('visible');

    video.addEventListener('ended', () => {
      console.log(`✔ Video "${videoId}" ended`);

      // Skjul video-sektionen og vis valg-sektionen
      if (videoSection) {
        videoSection.style.opacity = '0';
        videoSection.style.pointerEvents = 'none';
        setTimeout(() => {
          videoSection.style.display = 'none';
        }, 500);
      }

      valgSection.classList.add('show');

      // Vis top-tekst efter 300ms
      setTimeout(() => {
        topText.classList.add('visible');
      }, 300);
    });
  });
});