import Slider, { handleSlider } from "components/Slider";
import { useEffect } from "react";

let contents = [
  {
    src: "https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "title",
    sub: "subtitle",
    date: "2022-02-22",
  },
  {
    src: "https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "titlef sdafsafasdfsdfsdfasdfasfsdaff",
    date: "2022-02-22",
  },
  {
    src: "https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "title",
    date: "2022-02-22",
  },
  {
    src: "https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "title",
    date: "2022-02-22",
  },
  {
    src: "https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "title",
    date: "2022-02-22",
  },
];

function App() {
  useEffect(() => handleSlider(), []);

  return (
    <div className="App">
      <Slider contents={contents} />
      <Slider contents={contents} />
    </div>
  );
}

export default App;
