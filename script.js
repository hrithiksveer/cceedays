const targetDate = new Date(2024, 0, 29); // Change this to your desired date

function updateCountdown() {
    const currentDate = new Date();
    const differenceMs = targetDate - currentDate;

    let seconds = Math.floor(differenceMs / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    document.getElementById('days').innerHTML = days;
    document.getElementById('daysBack').innerHTML = days;

    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('hoursBack').innerHTML = formatTime(hours);

    document.getElementById('minutes').innerHTML = formatTime(minutes);
    document.getElementById('minutesBack').innerHTML = formatTime(minutes);

    document.getElementById('seconds').innerHTML = formatTime(seconds);
    document.getElementById('secondsBack').innerHTML = formatTime(seconds);

    // Toggle flip animation class for each card every second
    const flipCards = document.querySelectorAll('.flip-card-inner');
    flipCards.forEach(card => {
        card.classList.toggle('flip');
    });
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateCountdown, 1000);
updateCountdown();
