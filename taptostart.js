"use strict";
// script til at håndtere tap to start funktion - modtage class fra html
const startSection = document.querySelector('.start-section');
const vælgCirkelSection = document.querySelector('.vælg-cirkel-section');

// Funktion til at gemme start-section og vise main content
function hideStartScreen() {
    startSection.style.display = 'none';
    vælgCirkelSection.style.display = 'flex';
}
//touch og click to start med event listener der tjekker efter tryk/klik
startSection.addEventListener('click', hideStartScreen);
startSection.addEventListener('touchstart', hideStartScreen);

// Loading skærm - viser at der sker noget i baggrunden
function hideStartScreen() {
    startSection.textContent = "Indlæser...";
    startSection.style.fontSize = "3rem";
    startSection.style.color = "#000000";
    startSection.style.textAlign = "center";
    startSection.style.fontFamily = "'Delicious Handrawn', cursive";
    setTimeout(() => {
        startSection.style.display = 'none';
        vælgCirkelSection.style.display = 'flex';
    }, 900); 
}