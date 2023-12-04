import AocLogo from "./assets/aoc-logo.png";
import "./App.css";
import Day1 from "./days/day1/Day1";
import Day2 from "./days/day2/Day2";
import Day3 from "./days/day3/Day3";

function App() {
  return (
    <>
      <div>
        <a href="https://adventofcode.com/2023" target="_blank">
          <img src={AocLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Advent of Code 2023</h1>
      <div className="card-grid">
        <div className="card">
          <Day1 />
        </div>
        <div className="card">
          <Day2 />
        </div>
        <div className="card">
          <Day3 />
        </div>
      </div>
    </>
  );
}

export default App;
