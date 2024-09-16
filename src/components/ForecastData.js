import React from "react";

const ForecastData = ({ forecastData, isCelsius, loading }) => (
  <div className="column2_container">
    {forecastData?.forecast?.forecastday.slice(0, 5).map((day, index) => (
      <div className="column2_card" key={index}>
        <p className="forecast_day">
          {loading ? (
            <div className="spinner"></div>
          ) : isCelsius ? (
            `${day.day.avgtemp_c}°C`
          ) : (
            `${day.day.avgtemp_f}°F`
          )}
        </p>
        <p>{loading ? <div className="spinner"></div> : day.date}</p>
        <div className="condition">
          <p>{loading ? <div className="spinner"></div> : day.day.condition?.text}</p>
          <img src={day.day.condition?.icon} alt="condition icon" />
        </div>
        <div className="condition">
          <p className="forecast_temp">Min Temp:</p>
          <p>
            {loading ? (
              <div className="spinner"></div>
            ) : isCelsius ? (
              `${day.day.mintemp_c}°C`
            ) : (
              `${day.day.mintemp_f}°F`
            )}
          </p>
        </div>
        <div className="condition">
          <p className="forecast_temp">Max Temp:</p>
          <p>
            {loading ? (
              <div className="spinner"></div>
            ) : isCelsius ? (
              `${day.day.maxtemp_c}°C`
            ) : (
              `${day.day.maxtemp_f}°F`
            )}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default ForecastData;
