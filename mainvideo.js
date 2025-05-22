"use strict";
let selectedVideoId = null;

function enableAudio(videoId) {
  selectedVideoId = videoId;

  document.querySelectorAll("video").forEach(v => {
    v.pause();
    v.currentTime = 0;
    v.muted = true;
  });

  const video = document.getElementById(videoId);
  video.muted = false;

  setTimeout(() => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => console.error("Playback error:", error));
    }
  }, 2000);
}
function startTopic(topic) {
  sessionStorage.setItem('lastTopic', topic);

  document.querySelector('.vælg-cirkel-section').style.display = 'none';

  const sections = {
    angst: '.angst-section',
    depression: '.depri-section',
    stress: '.stress-section'
  };

  Object.values(sections).forEach(sel => {
    const sec = document.querySelector(sel);
    if (sec) sec.style.display = 'none';
  });

  const selectedSection = document.querySelector(sections[topic]);
  if (selectedSection) {
    selectedSection.style.display = 'block';

    const video = selectedSection.querySelector('video');
    if (video) {
      video.loop = true;
      video.currentTime = 0;
      video.play();
    }
  }
}
document.querySelector('.tilbage-knap').addEventListener('click', () => {

  document.querySelector('.vælg-cirkel-section').style.display = 'flex';

  document.querySelectorAll('.angst-section, .depri-section, .stress-section, .valg-slide, .video-section, .fakta-sektion')
    .forEach(sec => sec.style.display = 'none');

  const lastTopic = sessionStorage.getItem('lastTopic');
  const sections = {
    angst: '.angst-section',
    depression: '.depri-section',
    stress: '.stress-section'
  };
  const sectionId = sections[lastTopic];

  if (sectionId) {
    const section = document.querySelector(sectionId);
    section.style.display = 'block';

    const video = section.querySelector('video');
    if (video) {
      video.loop = true;
      video.play();
    }
  }
});

