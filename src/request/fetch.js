// does anything else need to happen?
import inputStuff from '../ui/input';

function fetchWeather(e) {
  e.preventDefault();
  const location = inputStuff.captureInput().searchParam;
  const weather = fetch(
    `https://api.weatherapi.com/v1/current.json?key=b91461b4bca744b199d24721232904&q=${location}&aqi=no`,
    { mode: 'cors' }
  );

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

export default { fetchWeather, parseWeatherData };
