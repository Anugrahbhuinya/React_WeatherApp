import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [err, setError] = useState(false);

    const GEOCODING_API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "2bdf5a6b6b196c1afba48e7615f5ca08";

    let getWeatherInfo = async () => {
        try {

            const geoResponse = await fetch(`${GEOCODING_API_URL}?q=${city}&appid=${API_KEY}`);
            const geoData = await geoResponse.json();

            const { lat, lon } = geoData[0];
            console.log(`Latitude: ${lat}, Longitude: ${lon}`);

            const weatherResponse = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            const weather = await weatherResponse.json();
            console.log(weather);
            let result = {
                city: city,
                temp: weather.main.temp,
                tempmin: weather.main.temp_min,
                tempmax: weather.main.temp_max,
                humidity: weather.main.humidity,
                feelslike: weather.main.feels_like,
                weather: weather.weather[0].description,
            }
            console.log(result);
            return result;

            //getWeatherInfo(weather);

        } catch (err) {
            throw err;
        }

    }



    let handleChange = (event) => {
        setCity(event.target.value);
    };
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }

    return (
        <>
            <div className='SearchBox'>
                <h3>Search for City</h3>
                <form action="" onSubmit={handleSubmit}>
                    <TextField id="city" label="City" variant="outlined" value={city} onChange={handleChange} required />
                    <br /><br />
                    <Button variant="contained" type='submit'>Search </Button>
                    {err && <p style={{color:"red"}}>No Such Place Exists!</p>}
                </form>
            </div>
        </>
    )
}