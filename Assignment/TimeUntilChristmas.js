const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const dday = new Date("2021-12-24 00:00:00+0900");
  const today = new Date();
  const gap = dday - today;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minute = Math.floor(((gap / 1000) * 60) % 60);
  const second = Math.floor((gap / 1000) % 60);
  clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}
function init() {
  getClock();
  setInterval(getClock, 1000);
}
init();
