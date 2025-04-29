'use strict'

function bgImage () {
    const body = document.body;
    body.style.cssText = `
        background-image: url("/src/assets/img/mindspace-studio-unsplash.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    `;
}

function updateClock () {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds}`;

    const clockId = document.getElementById('clock');
    clockId.textContent = timeString;
}

updateClock();
bgImage();

// Funciona da mesma forma que o setTimeout, mas com a diferença de que aqui chamamos a callback repetidamente
setInterval(updateClock, 1000);