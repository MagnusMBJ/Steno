"use strict";
// script til at håndtere tap to start funktion - modtage class fra html
const startSection = document.querySelector('.start-section');
const vælgCirkelSection = document.querySelector('.vælg-cirkel-section');

function hideStartScreen() {
    startSection.style.display = 'none';
    vælgCirkelSection.style.display = 'flex';
}

startSection.addEventListener('click', hideStartScreen);
startSection.addEventListener('touchstart', hideStartScreen);

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