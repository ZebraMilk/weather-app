import createElement from '../utils/helper';

const display = document.querySelector('.display-pane');

// update the display with the relevant information from the weather object

// check for f/c? Maybe have that information appended to the weather data first.

// default display appearance creator
function makeDefaultDisplay() {
  // name of location + region
  const locationLabel = createElement(
    'p',
    ['weather-location-label'],
    {},
    'Location and Region:'
  );
  // local time of request
  const timeLabel = createElement('p', ['local-time-label'], {}, 'Local Time:');
  // temperature
  const tempLabel = createElement('p', ['temp-label'], {}, 'Temperature:');
  // condition - text and image icon
  const conditionLabel = createElement(
    'p',
    ['condition-label'],
    {},
    'Conditions:'
  );
  display.append(locationLabel, timeLabel, tempLabel, conditionLabel);
}

// clear display
function clearDisplay() {
  // while (display.lastElementChild) {
  //   display.removeChild(lastChild);
  // }

  // try newer method
  display.replaceChildren();
}

// update display with additional column of weather Data
function populateDisplay(weatherData) {
  console.log('Data logged, display updated!');
  const location = createElement(
    'p',
    ['location-data', 'result'],
    {},
    `${weatherData.placeInfo.location}, ${weatherData.placeInfo.region}`
  );
  const localTime = createElement(
    'p',
    ['time-data', 'result'],
    {},
    `${weatherData.placeInfo.localTime}`
  );
  const temperature = createElement(
    'p',
    ['temp-data', 'result'],
    {},
    `${weatherData.weatherInfo.tempF}`
  );
  const conditions = createElement(
    'p',
    ['condition-data', 'result'],
    {},
    `${weatherData.weatherInfo.condition.text}`
  );
  display.append(location, localTime, temperature, conditions);
}

export default function refreshDisplay(weatherData) {
  clearDisplay();
  makeDefaultDisplay();
  populateDisplay(weatherData);
}
