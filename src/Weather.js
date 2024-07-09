import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

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

iconUrl:"https://ssl.gstatic.com/onebox/weather/64/cloudy.png",             
        })
  
        }

        console.log();
        function search(){
            const apiKey="5c66e1504d0c5d9739b46ec3d9635cb4"; 
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
   
        </div>)
    }else{

   search();
   
    return "Loading..."

}
} 