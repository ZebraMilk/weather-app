import createElement from '../utils/helper';

const inputPane = document.querySelector('.input-pane');

// check for celsius/farenheit/Kelvin (do that math!!)

// capture the input on submission
function captureInput() {
  const userInput = {
    searchParam: document.querySelector('.location-input').value,
    tempMode: document.querySelector('input[name="temperature"]:checked').value,
  };
  return userInput;
}

// exports

export default { captureInput };
