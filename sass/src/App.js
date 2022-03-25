import "./styles/css/index.css";

function App() {
  function toggleButton() {
    let wrap = document.querySelector(".wrap");

    wrap.classList.contains("theme1")
      ? wrap.classList.replace("theme1", "theme2")
      : wrap.classList.replace("theme2", "theme1");
  }

  return (
    <div className="App">
      <div className="wrap theme1">
        <div className="inner">
          <button className="theme-btn" onClick={toggleButton}>
            Chagen theme
          </button>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quas, quos doloremque, temporibus eveniet sed
            explicabo, reiciendis ea assumenda quam amet vitae. Eveniet repellat ipsam adipisci, nostrum ipsum inventore
            totam?
          </p>
          <ul>
            <li>html</li>
            <li>sass</li>
            <li>javascript</li>
            <li>react</li>
          </ul>
          <span className="message">I am message </span>
        </div>
      </div>
    </div>
  );
}

export default App;
