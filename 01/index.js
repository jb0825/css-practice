document.querySelector(".circle-button").onclick = function () {
  let target = document.querySelector(".back-1");
  let state = target.getAttribute("state");

  if (target.classList.toggle(state)) {
    document.querySelector(".icon-play").style.display = "inline-block";
  }
};
