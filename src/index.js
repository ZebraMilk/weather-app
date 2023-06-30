// entry point for various files
import './style.css';

const submitBtn = document.querySelector('.submit-form');
const locationInput = document.querySelector('.location');

const weatherDisplay = document.querySelector('.weather-display');

submitBtn.addEventListener('click', handleWeather);

function fetchWeather(e) {
  e.preventDefault();
  console.log('Clicked!');
  const location = locationInput.value;
  const weather = fetch(
    `https://api.weatherapi.com/v1/current.json?key=b91461b4bca744b199d24721232904&q=${location}&aqi=no`,
    { mode: 'cors' }
  );
  return weather;
}

function handleWeather(e) {
  const weatherReport = fetchWeather(e);
  weatherReport
    .then((weatherReport) => weatherReport.json())
    .then((weather) => {
      console.log(weather);
    })
    .catch((err) => console.log(`Error! ${err}`));
}
