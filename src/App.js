
import bgVideo from "./assets/bgVideo.mp4"
import './App.css';

import Weather from "./Weather"


export default function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4"/>
      </video>
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by Karyna Trotsenko <a href="https://github.com/Karyna94/react-weather-app" target="_blank" rel="noreferrer" >open-sourced on GitHub</a> 
      </footer>
    </div>
  );
};
