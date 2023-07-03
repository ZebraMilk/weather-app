// entry point for various files
import './style.css';
import inputStuff from './ui/input';
import refreshDisplay from './ui/display';

inputStuff.loadInputPane();

const submitBtn = document.querySelector('.submit-form');
// const locationInput = document.querySelector('.location-input');

// const weatherDisplay = document.querySelector('.weather-display');

submitBtn.addEventListener('click', handleWeather);

function fetchWeather(e) {
  e.preventDefault();
  const location = inputStuff.captureInput().searchParam;
  const weather = fetch(
    `https://api.weatherapi.com/v1/current.json?key=b91461b4bca744b199d24721232904&q=${location}&aqi=no`,
    { mode: 'cors' }
  );
  // try to log the response object returned from fetch()
  // .then((resp) => {
  //   if (resp.ok === false) {
  //     console.log(`${resp.status}: ${resp.statusText}`);
  //     console.log(`URL: ${resp.u
  //   }
  // });
  return weather;
}

function parseWeatherData(data) {
  const parsedData = {
    placeInfo: {
      location: data.location.name,
      region: data.location.region,
      localTime: data.location.localtime,
    },
    weatherInfo: {
      tempF: data.current.temp_f,
      tempC: data.current.temp_c,
      condition: data.current.condition,
    },
  };
  parsedData.weatherInfo.tempK =
    Math.floor((parsedData.weatherInfo.tempC + 273.15) * 10) / 10;
  return parsedData;
}

function handleWeather(e) {
  e.preventDefault();
  const rawWeatherData = fetchWeather(e);
  rawWeatherData
    .then((weatherData) => weatherData.json())
    .then((weatherJSON) => {
      const weatherData = parseWeatherData(weatherJSON);
      displayWeather(weatherData);
    })
    .catch((err) => console.log(`Error! ${err}`));
}

function displayWeather(data) {
  console.table(data);
  refreshDisplay(data);
}
