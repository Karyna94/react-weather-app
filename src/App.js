
import bgVideo from "./assets/bgVideo.mp4"
import './App.css';


export default function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4"/>
      </video>
      <div className="weather">
        <form className="mb-5">
          <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary
            "/>
            </div>
            </div>
        </form> 
      
        <div className="row">
            <div className="col-6 text-center">
                <h1>New York</h1>
            </div>
            <div className="col-6 text-center">
              
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Clear sky"/> 
             
                <span className="temperature">13</span>
                <span className="unit">°C</span>
            </div>
        </div>
        <div className="row">
          <div className="col-6 text-center">
            <p>Sunday 21:00</p>
          </div>
          <diV className="col-6 text-center">
            <p>Clear sky</p>
          </diV>
        </div>
       <div className="description">
        <div className="row">
            <div className="col-4 text-center">
                <p>Humidity: 84%</p>
            </div>
            <div className="col-4 text-center">
                <p>Wind: 6m/s</p>
            </div>
            <div className="col-4 text-center">
                <p>Presipitation:15%</p>
            </div>
        </div>
        </div>
    </div>
      <footer>
        This project was coded by Karyna Trotsenko <a href="https://github.com/Karyna94/react-weather-app" target="_blank" rel="noreferrer" >open-sourced on GitHub</a> 
      </footer>
    </div>
  );
};
