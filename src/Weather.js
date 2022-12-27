import React from "react"

export default function Weather(){
    return(
        <div className="Weather">
        <form>
            <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city" className="form-control"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/>
            </div>
            </div></form>
        <div className="row">
            <div className="col-6">
                <h1>New York</h1>
                <ul>
                    <li>Sunday 22:43</li>
                    <li>Clear sky</li>
                </ul>
            </div>
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Clear sky"/> 13C
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <p>Humidity: 84%</p>
            </div>
            <div className="col-4">
                <p>Wind: 6m/s</p>
            </div>
            <div className="col-4">
                <p>Presipitation:15%</p>
            </div>
        </div>
    </div>
    
    )
}