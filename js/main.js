let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);



let hero = document.querySelector('.hero');
let container = document.querySelector('.container');
let icon = document.getElementById('icon');
let dateDisplay = document.querySelector('.date-display');

setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours();

    // Update the time display
    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    // Update the date display
    dateDisplay.innerHTML = `${currentTime.getDate()}. ${currentTime.toLocaleString('no-NO', { month: 'long' })} ${currentTime.getFullYear()}`;

    // Change background, icon, and date color based on the time
    if (hours >= 6 && hours < 18) {
        // Daytime theme (06:00 - 18:00)
        hero.style.background = "linear-gradient(45deg, #f0e68c, #f5deb3)";
        container.style.setProperty('--before-bg-color', '#f4b41a');
        container.style.setProperty('--after-bg-color', '#ff6347');

        // Set sun icon for daytime
        icon.textContent = '☀';
        icon.style.color = '#f39c12';

        // Set date color for daytime
        dateDisplay.style.color = '#000'; // Black color for day
    } else {
        // Nighttime theme (18:00 - 06:00)
        hero.style.background = "linear-gradient(45deg, #08001f, #30197d)";
        container.style.setProperty('--before-bg-color', '#6a0dad');
        container.style.setProperty('--after-bg-color', '#8a2be2');

        // Set moon icon for nighttime
        icon.textContent = '🌙';
        icon.style.color = '#f1c40f';

        // Set date color for nighttime
        dateDisplay.style.color = '#fff'; // White color for night
    }
}, 1000);
