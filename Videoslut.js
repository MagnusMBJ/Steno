"use strict";

document.addEventListener('DOMContentLoaded', () => {
  // Funktion til at vise fakta-sektion med fade-in
  function showFaktaSection(sectionClass) {
    // Skjul alle fakta-sektioner
    document.querySelectorAll('.fakta-sektion').forEach(section => {
      section.classList.remove('visible');
      section.style.display = 'none';
    });

    const target = document.querySelector(`.${sectionClass}`);
    if (target) {
      target.style.display = 'flex';

      // Brug timeout til at aktivere fade-in
      setTimeout(() => {
        target.classList.add('visible');
      }, 20);

      // Vis pilen hvis den bruges andre steder
      const tilbageKnap = document.querySelector('.tilbage-knap');
      if (tilbageKnap) tilbageKnap.style.display = 'block';
    } else {
      console.warn(`Sektion ikke fundet: ${sectionClass}`);
    }
  }

  // Video-grupper og deres tilhørende fakta-sektion
  const videoGroups = {
    angst: ['video1', 'video2', 'video3'],
    depri: ['video4', 'video5', 'video6'],
    stress: ['video7', 'video8', 'video9']
  };

  // Når video slutter → vis relevant fakta-sektion
  Object.entries(videoGroups).forEach(([groupName, videoIds]) => {
    videoIds.forEach(videoId => {
      const video = document.getElementById(videoId);
      if (!video) {
        console.warn(`Video ikke fundet: ${videoId}`);
        return;
      }

      video.addEventListener('ended', () => {
        console.log(`🎬 Video ${videoId} sluttede – viser fakta-${groupName}`);
        showFaktaSection(`fakta-${groupName}`);
      });
    });
  });
});
