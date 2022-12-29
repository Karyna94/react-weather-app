import React, { useState } from "react"
import "./Weather.css"
import axios from "axios"

import WeatherInfo from "./WeatherInfo"

export default function Weather(props){
    const [ready, setReady] = useState(false)
    const [weatherData, setWeatherData] = useState({})
    const [city, setCity] = useState(props.defaultCity)

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
    function search() {
    const apiKey = "f4d469c4b3b9e80a5dbe2929f15736c5"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
    }


    function handleSubmit(event) {
    event.preventDefault()
    search()
}
 
    function handleCityChange(event) {
        setCity(event.target.value)


    }
    if (ready) { 
        return(
        <div className="weather">
          <form className="mb-5" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
              <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange}/>
              </div>
              <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
              </div>
              </div>
          </form> 
        <WeatherInfo data={weatherData}/>
      </div>
           )

    } else {
    search()
    return "loading..."
    }
    
}