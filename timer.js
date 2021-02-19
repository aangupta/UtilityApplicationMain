const start = document.querySelector('#start');
const reset = document.querySelector('#reset');

let h = document.querySelector('#hour');
let m = document.querySelector('#minute');
let s = document.querySelector('#second');

let startTimer;

function stopTimer() {
    clearInterval(startTimer);
}
start.addEventListener('click', () => {
    startTimer = setInterval(() => {
        if (s.value === 0) {
            if (m.value > 0) {
                s.value = 59;
                m.value -= 1;
            }
        } else {
            s.value -= 1;
            if (s.value === 0) {
                stopTimer();
            }
        }
    }, 1000);
});

reset.addEventListener('click', () => {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer();
});
