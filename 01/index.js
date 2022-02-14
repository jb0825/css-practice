const playIcon = document.querySelector(".icon-play");
const pauseIcon = document.querySelector(".icon-pause");

/* play-pause button */
function toggleIcon(active, inactive) {
  active.style.display = "inline-block";
  inactive.style.display = "none";
}

document.querySelector(".circle-button").onclick = function () {
  if (document.querySelector(".back-1").classList.toggle("pause")) toggleIcon(playIcon, pauseIcon);
  else toggleIcon(pauseIcon, playIcon);
};

/* range slider */
const rangeBox = document.querySelector(".range-box");
const rangeBar = document.querySelector(".range-bar");
const rangeBtn = document.querySelector(".range-btn");
const rangeTooltip = document.querySelector(".range-tooltip");
const boxRect = rangeBox.getBoundingClientRect();

function handleRangeSlider(e) {
  window.addEventListener("mousemove", onMouseMove);
  window.onmouseup = function (e) {
    window.removeEventListener("mousemove", onMouseMove);
  };
  onMouseMove(e);
}

function onMouseMove(e) {
  if (e.pageX < boxRect.left || e.pageX > boxRect.left + boxRect.width) return false;
  const x = e.pageX - boxRect.left;

  rangeBar.style.width = x + "px";
  rangeBtn.style.left = x - rangeBtn.getBoundingClientRect().width / 2 + "px";
  rangeTooltip.style.left = x - rangeTooltip.getBoundingClientRect().width / 2 + "px";
  rangeTooltip.innerText = Math.ceil((x / boxRect.width) * 100) + "%";
}

rangeBtn.onmousedown = handleRangeSlider;
rangeBox.onclick = onMouseMove;

/* clock */
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function setClock() {
  const date = new Date();
  console.log(date.getHours());
  hours.style.transform = `rotate(${date.getHours() * 30}deg)`;
  minutes.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
  seconds.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
}
setClock();

setInterval(setClock, 1000);
