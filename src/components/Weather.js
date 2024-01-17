import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'f5ba940a65ee3f63d133ef936ea47725';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Jyvaskyla,fi&units=metric&appid=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div className='items-center'>
        {weatherData ? (
          <>
            <div className="font-semibold">jyväskylä</div>
            <div>{weatherData.main.temp}°C</div>
            <div className='text-gray-600'>feels like {weatherData.main.feels_like}°C</div>
            <div>{weatherData.weather[0].description}</div>
            <div>wind {weatherData.wind.speed} m/s</div>
          </>
        ) : (
          <div>Loading weather data...</div>
        )}
      </div>
  );
};

export default Weather;
