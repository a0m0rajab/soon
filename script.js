const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let showTime;

let countDown = new Date(2021, 03, 30, 19).getTime(),
  x = setInterval(function () {

    let now = new Date().getTime(),
      distance = countDown - now;
    showTime = new Date(2021, 3, 30, 17, 40).getTime() - now;

    if (showTime <= 0) {
      document.getElementById('workshopLink').disabled = false;
    }
    document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
  }, second)

