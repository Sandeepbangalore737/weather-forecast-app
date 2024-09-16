import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/ForecastData";
import WeatherHighlights from "./components/WeatherHighlights";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

 // Fetching weather data based on the city name or geolocation
 useEffect(() => {
  const savedCity = localStorage.getItem("savedCity");
  if (savedCity) {
    fetchWeatherData(savedCity);
    setCity(savedCity);
  } else {
    fetchWeatherByGeolocation();
  }
}, []);

const fetchWeatherData = async (query) => {
  setLoading(true);
  setError(null); 
  try {
    const queryParam = typeof query === "string" ? `q=${query}` : `q=${query.lat},${query.lon}`;

    const weatherResponse = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&${queryParam}`
    );

    if (!weatherResponse.data || !weatherResponse.data.location) {
      throw new Error("Invalid API response. No weather data found.");
    }

    setWeatherData(weatherResponse.data);

    const forecastResponse = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&${queryParam}&days=5`
    );

    setForecastData(forecastResponse.data);
  } catch (error) {
    if (error.response) {
      setError("City not found or API limit exceeded. Please try again.");
    } else if (error.request) {
      setError("Network error. Please check your connection.");
    } else {
      setError("Something went wrong. Please try again.");
    }
  }
  setLoading(false);
};

// Fetch weather by user's geolocation
const fetchWeatherByGeolocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData({ lat: latitude, lon: longitude });
      },
      (error) => {
        setError("Unable to retrieve your location.");
      }
    );
  } else {
    setError("Geolocation is not supported by your browser.");
  }
};

// Handle search submission
const handleSearch = (city) => {
  setCity(city);
  if (city) fetchWeatherData(city);
};

// Handle temperature unit switch
const handleTempUnitClick = (unit) => {
  setIsCelsius(unit === "C");
};


  return (
    <div className="container">
      <div className="column1">
        <SearchBar onSearch={handleSearch} city={city} setCity={setCity} />
        {error && <p className="error-message">{error}</p>}
        <div class="weather_img">
          <img src="/weather.png" width="100%" alt="" />
        </div>
        {weatherData && (
          <CurrentWeather
            weatherData={weatherData}
            isCelsius={isCelsius}
            loading={loading}
          />
        )}
      </div>
      <div className="column2">
        <header className="column2_header">
          <h1>Weather Forecast Application</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "40px",
            }}
          >
            <div className="temp-toggle-buttons">
              <button
                className={`temp-button ${isCelsius ? "active" : ""}`}
                onClick={() => handleTempUnitClick("C")}
              >
                °C
              </button>
              <button
                className={`temp-button ${!isCelsius ? "active" : ""}`}
                onClick={() => handleTempUnitClick("F")}
              >
                °F
              </button>
            </div>
            <div>
              <img
                src="./profile.jpg"
                alt="Profile"
                className="profile_image"
              />
            </div>
          </div>
        </header>

        {forecastData && (
          <Forecast
            forecastData={forecastData}
            isCelsius={isCelsius}
            loading={loading}
          />
        )}
        {weatherData && (
          <WeatherHighlights
            weatherData={weatherData}
            forecastData={forecastData}
            isCelsius={isCelsius}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default App;
