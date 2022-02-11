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

const rangeBar = document.querySelector(".range-bar");
const rangeBtn = document.querySelector(".range-btn");
const rangeTooltip = document.querySelector(".range-tooltip");

rangeBtn.onmousedown = function (e) {};

window.onmousemove = function (e) {
  e.preventDefault();
};
