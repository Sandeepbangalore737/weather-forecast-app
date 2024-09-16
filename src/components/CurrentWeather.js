import React from "react";

const CurrentWeather = ({ weatherData, isCelsius, loading }) => (
  <div className="current-weather">
    {weatherData?.current && (
      <>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <h1 className="c_font">
            {isCelsius
              ? `${weatherData?.current?.temp_c}°C`
              : `${weatherData?.current?.temp_f}°F`}
          </h1>
        )}
        <h2 className="day_font">
          {new Date().toLocaleDateString("en-US", { weekday: "long" })}
        </h2>
        <p className="time_font">
          {new Date().toLocaleDateString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
        <h1 className="c_font">
          {loading ? <div className="spinner"></div> : weatherData?.location?.name}
        </h1>
        <div className="condition">
          <img src={weatherData?.current?.condition?.icon} alt="weather condition" />
          <p className="condition_font">
            {loading ? <div className="spinner"></div> : weatherData?.current?.condition?.text}
          </p>
        </div>
      </>
    )}
  </div>
);

export default CurrentWeather;
