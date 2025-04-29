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

// Funciona da mesma forma que o setTimeout, mas com a diferença de que aqui chamamos a callback repetidamente
setInterval(updateClock, 1000);