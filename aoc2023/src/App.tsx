import AocLogo from "./assets/aoc-logo.png";
import "./App.css";
import { default as Day1 } from "./days/day1/Day1";
import { default as Day2 } from "./days/day2/Day2";

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
      </div>
    </>
  );
}

export default App;
