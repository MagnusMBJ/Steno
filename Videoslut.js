document.addEventListener('DOMContentLoaded', () => {
    function showFaktaSection(sectionClass) {
      // Fjern alle tidligere aktive sektioner
      document.querySelectorAll('.fakta-sektion').forEach(section => {
        section.classList.remove('active');
      });
  
      const target = document.querySelector(`.${sectionClass}`);
      if (target) {
        target.classList.add('active');
        console.log(`Viser sektion: ${sectionClass}`);
      } else {
        console.warn(`Sektion ikke fundet: ${sectionClass}`);
      }
    }
  
    const videoGroups = {
      angst: ['video1', 'video2', 'video3'],
      depri: ['video4', 'video5', 'video6'],
      stress: ['video7', 'video8', 'video9']
    };
  
    Object.entries(videoGroups).forEach(([groupName, videoIds]) => {
      videoIds.forEach(videoId => {
        const video = document.getElementById(videoId);
        if (!video) {
          console.warn(`Video ikke fundet: ${videoId}`);
          return;
        }
  
        video.addEventListener('ended', () => {
          console.log(`Video ${videoId} sluttede. Viser fakta-${groupName}`);
          showFaktaSection(`fakta-${groupName}`);
        });
      });
    });
  });
  