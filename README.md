## Weather Forecast Application

This is a simple weather forecast application built with React, using WeatherAPI to fetch real-time weather data. The app allows users to search for the weather in different cities and displays current conditions along with a 5-day forecast.

### Features
- Current weather and forecast based on city search or user geolocation
- Toggle between Celsius and Fahrenheit
- Error handling for invalid API responses and network issues
- Dynamic user interface with weather highlights and forecasts


### Table of Contents
- [Project Setup](#project-setup)
- [APIs Used](#apis-used)
- [Running the Project](#running-the-project)
- [Error Handling](#error-handling)
- [Important Notes](#important-notes)


### Project Setup

Follow these steps to set up and run the project on your local machine:

1. Clone the Repository:
  
   git clone https://github.com/your-username/weather-forecast-app.git
   cd weather-forecast-app
   

2. Install Dependencies:
   After cloning the repository, you need to install the project dependencies. Run the following command:
   npm install

3. Configure Environment Variables**:
   Create a `.env` file in the project root and add the following environment variable:
   env
   REACT_APP_WEATHER_API_KEY=your_api_key_here

   Replace `your_api_key_here` with your actual WeatherAPI key (see [APIs Used](#apis-used) for details).

4. Run the Application:
   Once everything is set up, start the development server:
   npm start
   The app will be available at `http://localhost:3000`.


### APIs Used

This application utilizes the [WeatherAPI](https://www.weatherapi.com/) to retrieve weather data. You need an API key to use this service.

- **WeatherAPI**: Fetches real-time weather information, including current weather, forecasts, and weather conditions for a specific location.
   - **Endpoint**: `https://api.weatherapi.com/v1/`
   - **API Key**: You need to sign up for a free API key [here](https://www.weatherapi.com/signup.aspx).



### Running the Project

Once you've completed the setup, you can interact with the app in the following ways:

1. **Search for a City**: Type the name of a city in the search bar, and press Enter or click the search button. The app will display the current weather and forecast for the entered city.

2. **Geolocation-Based Weather**: If the user doesn't search for a city, the app will automatically fetch weather data based on the user's geolocation (if supported and permitted by the browser).

3. **Temperature Unit Toggle**: Switch between Celsius (°C) and Fahrenheit (°F) by clicking the toggle buttons at the top of the forecast section.


### Error Handling

The application includes error handling mechanisms to provide a smooth user experience:

- **Invalid City Name**: If the user searches for a city that cannot be found, an error message will be displayed, asking them to try again.
- **Network Errors**: If there is a network issue or the API cannot be reached, a friendly error message is shown, suggesting the user check their internet connection.
- **Retry Mechanism**: The user can try fetching the data again using the retry button when an error occurs.



### Important Notes

- **API Limits**: The free version of the WeatherAPI has a rate limit. Be cautious of exceeding this limit during development or production use.
- **Geolocation Permissions**: When using geolocation to fetch weather data, ensure that the user's browser has geolocation permissions enabled.
- **CORS Issues**: If you face any Cross-Origin Resource Sharing (CORS) issues while working in development mode, make sure to set up the appropriate headers or use a proxy.

