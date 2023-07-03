// entry point for various files
import './style.css';
import inputStuff from './ui/input';
import refreshDisplay from './ui/display';
import getWeather from './request/fetch';
const submitBtn = document.querySelector('.submit-form');
// const locationInput = document.querySelector('.location-input');

// const weatherDisplay = document.querySelector('.weather-display');

submitBtn.addEventListener('click', handleWeather);

function handleWeather(e) {
  e.preventDefault();
  const rawWeatherData = fetchWeather(e);
  rawWeatherData.weather
    .then((weatherData) => weatherData.json())
    .then((weatherJSON) => {
      const weatherData = getWeather.parseWeatherData(weatherJSON);
      weatherData.tempChoice = rawWeatherData.tempChoice;
      displayWeather(weatherData);
    })
    .catch((err) => console.log(`Error! ${err}`));
}

function displayWeather(data) {
  console.table(data);
  refreshDisplay(data);
}

function fetchWeather(e) {
  e.preventDefault();
  const userInput = inputStuff.captureInput();
  const location = userInput.searchParam;
  const tempChoice = userInput.tempMode;
  const weather = fetch(
    `https://api.weatherapi.com/v1/current.json?key=b91461b4bca744b199d24721232904&q=${location}&aqi=no`,
    { mode: 'cors' }
  );

  return { weather, tempChoice };
}
