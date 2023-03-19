import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Krakow" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.instagram.com/neveykina_nastya"
            target="_blank"
            rel="noreferrer"
          >
            Anastasiia Tatarchenko
          </a>{" "}
          and is{" "}
          <a
            href="https://luminous-zuccutto-8a4069.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
