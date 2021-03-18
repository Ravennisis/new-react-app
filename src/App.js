import React from "react";
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lyon" />
        <footer>
          This project was coded by Ravenn Annibal-Arnulf and is {" "}
          <a href="https://github.com/Ravennisis/new-react-app" target="_blank" rel="noreferrer">
            open-sourced on GitHub
        </a>
        </footer>
      </div>
    </div>
  );
}