const videoToValgMap = [
  { videoId: 'angst-video', targetSectionId: 'valg-angst' },
  { videoId: 'depression-video', targetSectionId: 'valg-depression' },
  { videoId: 'stress-video', targetSectionId: 'valg-stress' },
];

videoToValgMap.forEach(({ videoId, targetSectionId }) => {
  const video = document.getElementById(videoId);
  const targetSection = document.getElementById(targetSectionId);

  if (video && targetSection) {
    video.addEventListener('ended', () => {
      // Scroll to target
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Reveal text (after small delay to allow scroll to finish)
      setTimeout(() => {
        const topText = targetSection.querySelector('.valg-toptekst');
        if (topText) {
          topText.classList.add('visible');
        }
      }, 1000); // Adjust delay if needed
    });
  }
});
