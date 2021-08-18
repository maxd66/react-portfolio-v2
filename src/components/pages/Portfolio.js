import bitcoin from "../../images/bitcoin.jpg";
import kodeKeepers from "../../images/kode-keepers.png";
import calendar from "../../images/calendar.jpg";
import questionMarks from "../../images/question-marks.jpg";
import weather from "../../images/weather.jpg";

function Portfolio() {
  return (
    <div class="figure" id="work">
      <h2>Work</h2>
      <div class="container">
        <section class="img1">
          <a
            href="https://kode-keeper.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="main-img" src={kodeKeepers} alt="kode keeper logo" />
          </a>
          <figcaption>
            <h3>Kode Keeper</h3>
          </figcaption>
        </section>
        <section class="img2">
          <a
            href="https://maxd66.github.io/code-quiz-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={questionMarks} alt="colorful question marks" />
          </a>
          <figcaption>
            <h3>Coding Quiz</h3>
          </figcaption>
        </section>
        <section class="img3">
          <a
            href="https://m-car.github.io/crypto-launchpad/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={bitcoin} alt="Bitcoin logo with geometric design" />
          </a>
          <figcaption>
            <h3>Crypto Launch</h3>
          </figcaption>
        </section>
        <section class="img4">
          <a
            href="https://maxd66.github.io/weather-dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={weather} alt="ocean and clouds" />
          </a>
          <figcaption>
            <h3>Weather Dashboard</h3>
          </figcaption>
        </section>
        <section class="img5">
          <a
            href="https://maxd66.github.io/day-planner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={calendar} alt="calendar" />
          </a>
          <figcaption>
            <h3>Day Planner</h3>
          </figcaption>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
