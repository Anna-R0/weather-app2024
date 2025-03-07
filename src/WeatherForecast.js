import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props){

function handleResponse(response){
    console.log(props)
}

let apiKey="2b6fdad0cbd018949c50c70f72250726";
let longitude= props.coordinates.lon;
let latitude= props.coordinates.lat;
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);


    return(
        <div className ="WeatherForecast">
<div className="row">

<div className="col">
    <div className="WeatherForecast-day">Thu</div>
    <WeatherIcon code="01d"
    size={36} />
    <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">19°</span>
        <span className="WeatehrForecast-temperature-min">10° </span>
    </div>
</div>
</div>        </div>
    )
}