import React, { useState, useEffect } from 'react'
import "./WeatherApp.css"
import Axios from 'axios';
import Search from "../Images/search.png"
import Humidity from "../Images/humidity.png"
import Wind from "../Images/wind.png"

const WeatherApp = () => {

    let [input, setInput] = useState();
    let [location, setLocation] = useState("Bangalore")

    let [weatherdata, setWeatherData] = useState();

    useEffect(() => {
        Axios.get(`http://api.weatherapi.com/v1/current.json?key=68dc38c3529c40689cf60524230104&q=${location.toLowerCase()}&aqi=no`)
            .then(a => setWeatherData(a.data))
    }, [location])

    const handleSubmit = (event) => {
        event.preventDefault();
        setLocation(input);
    }

    return (
        <div className='card'>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="enter city name" spellcheck="false" onChange={(e) => { setInput(e.target.value) }} />
                    <button type='submit'>
                        <img src={Search} alt="search" />
                    </button>
                </form>
            </div>
            <div className="weather">
                <img src={weatherdata ? weatherdata.current.condition.icon : "Wait"} alt="icon" className="weather-icon" />
                <h1 className="temp">{weatherdata ? weatherdata.current.temp_c : "Wait"}°c</h1>
                <h2 className="city">{weatherdata ? weatherdata.location.name : "Wait"}</h2>
                <div className="details">
                    <div className="col">
                        <img src={Humidity} alt="humidity" />
                        <div>
                            <p className="humidity">{weatherdata ? weatherdata.current.humidity : "Wait"}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={Wind} alt="humidity" />
                        <div>
                            <p className="wind">{weatherdata ? weatherdata.current.wind_kph : "Wait"}km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp