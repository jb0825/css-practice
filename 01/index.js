function iconToggle(state) {}

document.querySelector(".circle-button").onclick = function () {
  let target = document.querySelector(".back-1");
  let state = target.getAttribute("state");

  iconToggle(state);
};
