import React from "react";
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lyon" />
        <footer>
          Coded by <a href="https://www.linkedin.com/in/ravenn-annibal-91811b201/" target="_blank" rel="noreferrer">
          Ravenn Annibal-Arnulf
        </a> and is {" "}
          <a href="https://github.com/Ravennisis/new-react-app" target="_blank" rel="noreferrer">
            open-sourced on GitHub
        </a>
        </footer>
      </div>
    </div>
  );
}