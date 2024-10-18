import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather (props){
 
    const [weatherData, setWeatherData]= useState({ready:false});
    const [city, setCity]=useState (props.defaultCity);
    function handleResponse(response){
     
        setWeatherData({
            temperature: response.data.main.temp,
            wind:response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt*1000),
            ready:true,
            coordinates: response.data.coord,

icon:response.data.weather[0].icon,             
        })
  
        }

        console.log();
        function search(){
            const apiKey="2b6fdad0cbd018949c50c70f72250726"; 
            let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
        }
        function handleSubmit(event){
            event.preventDefault();
            search();
        }
        function handleCityChange(event){
            setCity(event.target.value);
        }
    if(weatherData.ready){
        return(<div className="Weather">
            <form onSubmit= {handleSubmit}>
                <div className="row">
            <div className= "col-9">
            
                <input type="search"
                placeholder="Enter a city"
                onChange={handleCityChange}
                className="form-control">

                </input>
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
            <WeatherInfo data= {weatherData} />
            <WeatherForecast coordinates= {weatherData.coordinates}/>
   
        </div>)
    }else{

   search();
   
    return "Loading..."

}
} 