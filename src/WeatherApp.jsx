import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Ranchi",
        feelslike: 16.1,
        humidity: 55,
        temp: 16.92,
        tempmax: 16.92,
        tempmin: 16.92,
        weather: "haze",
    });
    let updateWeather = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <>
        <div style={{textAlign : "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateWeather}/>
            <InfoBox info={weatherInfo}/>
        </div>
        </>
    )
}