import AocLogo from "./assets/aoc-logo.png";
import "./App.css";
import Day1 from "./days/day1/Day1";
import Day2 from "./days/day2/Day2";
import Day3 from "./days/day3/Day3";
import Day4 from "./days/day4/Day4";
import Day5 from "./days/day5/Day5";
import Day6 from "./days/day6/Day6";
import Day7 from "./days/day7/Day7";
import Day8 from "./days/day8/Day8";
import Day9 from "./days/day9/Day9";
import Day11 from "./days/day11/Day11";

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
        <div className="card">
          <Day4 />
        </div>
        <div className="card">
          <Day5 />
        </div>
        <div className="card">
          <Day6 />
        </div>
        <div className="card">
          <Day7 />
        </div>
        <div className="card">
          <Day8 />
        </div>
        <div className="card">
          <Day9 />
        </div>
        <div className="card">
          <Day11 />
        </div>
      </div>
    </>
  );
}

export default App;
