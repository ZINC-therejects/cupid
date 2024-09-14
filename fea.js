let calcDisplay = document.getElementById('calc-display');
let calcValue = '';

function calcInput(value) {
    calcValue += value;
    calcDisplay.value = calcValue;
}

function calcEquals() {
    try {
        calcDisplay.value = eval(calcValue);
        calcValue = calcDisplay.value;
    } catch (error) {
        calcDisplay.value = 'Error';
        calcValue = '';
    }
}

function calcClear() {
    calcDisplay.value = '';
    calcValue = '';
}
function saveNote() {
    const note = document.getElementById('note-area').value;
    localStorage.setItem('savedNote', note);
    alert('Note Saved!');
}

function clearNote() {
    localStorage.removeItem('savedNote');
    document.getElementById('note-area').value = '';
    alert('Notes Cleared!');
}

document.addEventListener('DOMContentLoaded', function() {
    const savedNote = localStorage.getItem('savedNote');
    if (savedNote) {
        document.getElementById('note-area').value = savedNote;
    }
});
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
let pomodoroTimer;
let timeLeft = 1500; // 25 minutes in seconds

function startPomodoro() {
    if (!pomodoroTimer) {
        pomodoroTimer = setInterval(updatePomodoro, 1000);
    }
}

function updatePomodoro() {
    if (timeLeft > 0) {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById('pomodoro-timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
        clearInterval(pomodoroTimer);
        pomodoroTimer = null;
        alert("Time's up! Take a break.");
    }
}

function resetPomodoro() {
    clearInterval(pomodoroTimer);
    pomodoroTimer = null;
    timeLeft = 1500; // Reset to 25 minutes
    document.getElementById('pomodoro-timer').textContent = '25:00';
}
