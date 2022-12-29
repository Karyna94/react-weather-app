import React, { useState } from "react"
import "./Weather.css"
import axios from "axios"
import FormattedDate from "./FormattedDate"

export default function Weather(props){
    const [ready, setReady] = useState(false)
    const [weatherData, setWeatherData] = useState({})

    function handleResponse(response) {
        console.log(response.data)
        setWeatherData({
            temperature: response.data.main.temp,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
            date: new Date(response.data.dt * 1000),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        })
        setReady(true)
    }
    if (ready) { 
        return(
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
                  <h1>{weatherData.city}</h1>
              </div>
              <div className="col-6 text-center">
                
                  <img src={weatherData.iconUrl} alt={weatherData.description}/> 
               
                  <span className="temp">{Math.round(weatherData.temperature)}</span>
                  <span className="unit">°C</span>
              </div>
          </div>
          <div className="row">
            <div className="col-6 text-center">
              <p><FormattedDate date={weatherData.date} /></p>
            </div>
            <diV className="col-6 text-center">
              <p className="text-capitalize">{weatherData.description}</p>
            </diV>
          </div>
         <div className="description">
          <div className="row">
              <div className="col-4 text-center">
                  <p>Humidity: {weatherData.humidity}%</p>
              </div>
              <div className="col-4 text-center">
                  <p>Wind: {Math.round(weatherData.wind)}m/s</p>
              </div>
              <div className="col-4 text-center">
                  <p>Presipitation:{weatherData.presipitation}%</p>
              </div>
          </div>
          </div>
      </div>
           )

    } else {
    const apiKey = "f4d469c4b3b9e80a5dbe2929f15736c5"
  
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
    
    return "loading..."
    }
    
}