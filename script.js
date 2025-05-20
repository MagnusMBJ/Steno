"use strict";

const startSection = document.querySelector('.start-section');
const vælgCirkelSection = document.querySelector('.vælg-cirkel-section');

function hideStartScreen() {
    startSection.style.display = 'none';
    vælgCirkelSection.style.display = 'flex'; // vi bruger flex i CSS
}

startSection.addEventListener('click', hideStartScreen);
startSection.addEventListener('touchstart', hideStartScreen);
