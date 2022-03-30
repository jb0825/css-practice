import "styles/css/slider.css";

function prevBtn(btn, left, wrapWidth) {
  left += wrapWidth;

  if (left >= 0) {
    left = 0;
    btn.classList.add("hidden");
  }
  return left;
}

function nextBtn(btn, left, width, wrapWidth) {
  left -= wrapWidth;

  if ((left - wrapWidth) * -1 >= width) {
    left = wrapWidth - width;
    btn.classList.add("hidden");
  }
  return left;
}

export function handleSlider() {
  let wrapWidth = document.querySelector(".slider_wrap").getBoundingClientRect().width;

  document.querySelectorAll(".arrow").forEach((i) => {
    let slider = i.parentElement.children[1].children[0];
    let width = slider.getBoundingClientRect().width;

    i.addEventListener("click", () => {
      if (width <= wrapWidth) return;

      let hidden = i.parentElement.querySelector(".hidden");
      if (hidden !== null) hidden.classList.remove("hidden");

      let left = slider.getBoundingClientRect().left;
      left = i.classList.contains("prev") ? prevBtn(i, left, wrapWidth) : nextBtn(i, left, width, wrapWidth);

      slider.style.left = left + "px";
    });
  });
}

function Slider(props) {
  let contents = props.contents;

  return (
    <div className="slider_container">
      <a className="arrow prev" href="#"></a>

      <div className="slider_wrap">
        <div className="slider">
          {contents.map((i, idx) => (
            <div key={idx}>
              <div className="content">
                <div className="image">
                  <img alt={i.alt} src={i.src} />
                </div>
                <div className="description">
                  <span className="title">
                    {i.title} <br /> {i.sub}
                  </span>
                  <span className="date">{i.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a className="arrow next" href="#"></a>
    </div>
  );
}

export default Slider;
