import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather (props){
 
    const [weatherData, setWeatherData]= useState({ready:false});
    function handleResponse(response){
        setWeatherData({
            temperature: response.data.main.temp,
            wind:response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            date: "Wednesday, 07:00",
            ready:true,

iconUrl:"https://ssl.gstatic.com/onebox/weather/64/cloudy.png",             
        })

        
       
    }
    if(weatherData.ready){
        return(<div className="Weather">
            <form>
                <div className="row">
            <div className= "col-9">
            
                <input type="search"
                placeholder="Enter a city"
                className="form-control"></input>
                </div>
                <div className="col-3">
    
    <input type="submit" 
    value="Search"
    className="btn btn-primary w-100"
    autoFocus="on">
        
    </input>
    </div>
    </div>
            </form>
    <h1>{weatherData.city}</h1>
    <ul>
        <li>
            {weatherData.date}
        </li>
        <li className="text-capitalize">
           {weatherData.description}
        </li>
    </ul>
    <div className="row mt-3">
        
    <div className= "col-6">
    <div className="d-flex">
        <img src= {weatherData.iconUrl}
        alt={weatherData.description}
        className="float-left"/>
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
        <span className="unit">°C</span>
        </div>
    </div>
    <div className="col-6">
    
    <ul>
        
        <li>
            Humidity: {weatherData.humidity}%
        </li>
        <li>
            Wind:{weatherData.wind} km/h
        </li>
    </ul>
    
    </div>
    
    </div>
        </div>)
    }else{

   
    const apiKey="5c66e1504d0c5d9739b46ec3d9635cb4"; 
    let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."

}
} 