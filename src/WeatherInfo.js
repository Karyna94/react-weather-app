import React from "react"
import FormattedDate from "./FormattedDate"

export default function WeatherInfo(props) {
return( <div className="WeatherInfo">
    <div className="row">
<div className="col-6 text-center">
    <h1>{props.data.city}</h1>
</div>
<div className="col-6 text-center">
  
    <img src={props.data.iconUrl} alt={props.data.description}/> 
 
    <span className="temp">{Math.round(props.data.temperature)}</span>
    <span className="unit">°C</span>
</div>
</div>
<div className="row">
<div className="col-6 text-center">
<p><FormattedDate date={props.data.date} /></p>
</div>
<diV className="col-6 text-center">
<p className="text-capitalize">{props.data.description}</p>
</diV>
</div>
<div className="description">
<div className="row">
<div className="col-4 text-center">
    <p>Humidity: {props.data.humidity}%</p>
</div>
<div className="col-4 text-center">
    <p>Wind: {Math.round(props.data.wind)}m/s</p>
</div>
<div className="col-4 text-center">
    <p>Presipitation:{props.data.presipitation}%</p>
</div>
</div>
</div>
</div>)
}