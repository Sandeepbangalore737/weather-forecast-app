import React from "react";

const WeatherHighlights = ({
  weatherData,
  forecastData,
  isCelsius,
  loading,
}) => (
  <div className="todays-highlights" style={{ padding: "20px 0px" }}>
    <h1>Today's Highlights</h1>
    <div className="todays_container">
      <div className="todays_column2_card">
        <h1 class="main_heading">City & Weather Condition</h1>
        <p className="c_font">
          {loading ? (
            <div className="spinner"></div>
          ) : (
            weatherData?.location?.name
          )}
        </p>
        <div className="condition">
          <p className="humidity_condition">
            {loading ? (
              <div className="spinner"></div>
            ) : (
              weatherData?.current?.condition?.text
            )}
          </p>
          <img
            src={weatherData?.current?.condition?.icon}
            alt="Weather Condition"
          />
        </div>
      </div>
      <div className="todays_column2_card">
        <h1 class="main_heading">Temperature</h1>
        <br /><br/>
        <h1 className="c_font">
          {" "}
          {loading ? (
            <div className="spinner"></div>
          ) : isCelsius ? (
            `${weatherData?.current?.temp_c}°C`
          ) : (
            `${weatherData?.current?.temp_f}°F`
          )}
        </h1>
        <div class="condition">
          <p className="forecast_temp">Min Temp:</p>
          <p>
            {isCelsius ? (
              loading ? (
                <div className="spinner"></div>
              ) : (
                `${forecastData?.forecast?.forecastday[0]?.day?.mintemp_c}°C`
              )
            ) : loading ? (
              <div className="spinner"></div>
            ) : (
              `${forecastData?.forecast?.forecastday[0]?.day?.mintemp_f}°F`
            )}{" "}
          </p>
        </div>
        <div class="condition">
          <p className="forecast_temp">Max Temp:</p>
          <p>
            {isCelsius ? (
              loading ? (
                <div className="spinner"></div>
              ) : (
                `${forecastData?.forecast?.forecastday[0]?.day?.maxtemp_c} °C`
              )
            ) : loading ? (
              <div className="spinner"></div>
            ) : (
              `${forecastData?.forecast?.forecastday[0]?.day?.maxtemp_f}°F`
            )}{" "}
          </p>
        </div>
      </div>
      <div class="todays_column2_card">
        <h1 class="main_heading">Humidity</h1><br />
        <div class="humidity_value">
          <p className="c_font">
            {loading ? (
              <div className="spinner"></div>
            ) : (
              `${weatherData?.current?.humidity} %`
            )}
          </p>
          <i
            class="fas fa-tint humidity_icon"
            style={{ fontSize: "40px", color: "#00bfff" }}
          ></i>
        </div>
        <h3 class="humidity_condition">
          {loading ? (
            <div className="spinner"></div>
          ) : weatherData?.current?.humidity < 30 ? (
            "Low Humidity"
          ) : weatherData?.current?.humidity > 70 ? (
            "High Humidity"
          ) : (
            "Moderate Humidity"
          )}
        </h3>
      </div>
      <div class="todays_column2_card">
        <h1 class="main_heading">Wind Speed</h1><br />
        <p className="c_font">
          {loading ? (
            <div className="spinner"></div>
          ) : (
            `${weatherData?.current?.wind_kph} km/h`
          )}{" "}
        </p>
        <div class="humidity_value">
          <p className="humidity_condition">
            {loading ? (
              <div className="spinner"></div>
            ) : (
              weatherData?.current?.wind_dir
            )}
          </p>
          <i
            class="fas fa-wind wind_icon"
            style={{ fontSize: "40px", color: "#32a852" }}
          ></i>
        </div>
      </div>
    </div>
  </div>
);

export default WeatherHighlights;
