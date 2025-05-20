"use strict";
// script til at håndtere tap to start funktion - modtage class fra html
const startSection = document.querySelector('.start-section');
const mainContent = document.querySelector('.main-content');

// Funktion til at gemme start-section og vise main content
function hideStartScreen() {
    startSection.style.display = 'none'; // skjul 
    mainContent.style.display = 'block'; // vis 
}
//touch og click to start event
startSection.addEventListener('click', hideStartScreen);
startSection.addEventListener('touchstart', hideStartScreen);
