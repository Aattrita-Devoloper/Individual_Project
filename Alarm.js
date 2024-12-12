
let mode = 'light-mode';
let stopWatchRunning = false;
let stopWatchTime = 0;
let alarmTime = null;

document.getElementById('mode-toggle').addEventListener('click', () => {
    mode = mode === 'light-mode' ? 'dark-mode' : 'light-mode';
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
});

document.getElementById('start-stop').addEventListener('click', () => {
    if (!stopWatchRunning) {
        stopWatchRunning = true;
        startStopWatch();
    } else {
        stopWatchRunning = false;
    }
});

document.getElementById('reset').addEventListener('click', () => {
    stopWatchRunning = false;
    stopWatchTime = 0;
    document.getElementById('stop-watch').textContent = '00:00:00';
});

document.getElementById('set-alarm').addEventListener('click', () => {
    alarmTime = document.getElementById('alarm-time').value;
    setTimeout(() => {
        alert('Alarm!');
    }, getAlarmTime(alarmTime));
});

function startStopWatch() {
    setInterval(() => {
        if (stopWatchRunning) {
            stopWatchTime++;
            document.getElementById('stop-watch').textContent = formatTime(stopWatchTime);
        }
    }, 1000);
}

function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

function getAlarmTime(alarmTime) {
    let [hours, minutes, seconds] = alarmTime.split(':').map(Number);
    return (hours * 3600 + minutes * 60 + seconds) * 1000;
}