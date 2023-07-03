import createElement from '../utils/helper';

const inputPane = document.querySelector('.input-pane');

// create basic form

function loadInputPane() {
  const formFields = document.querySelector('.input-form');

  const newInput = createElement('input', ['location-input'], {
    type: 'text',
    value: 'Saint Paul',
  });

  const newSubmitButton = createElement(
    'button',
    ['submit-form'],
    { type: 'submit' },
    'See Weather'
  );

  formFields.appendChild(newInput);
  formFields.appendChild(addOptions());
  formFields.appendChild(newSubmitButton);
}

// create form options
function addOptions() {
  const formOptions = createElement('div', ['radio-options'], {});
  const fInput = createElement('input', ['temp-option'], {
    type: 'radio',
    id: 'fahrenheit',
    name: 'temperature',
    value: 'F',
    checked: true,
  });
  const fLabel = createElement(
    'label',
    ['label-option'],
    {
      for: 'fahrenheit',
    },
    'Fahrenheit'
  );
  const cInput = createElement('input', ['temp-option'], {
    type: 'radio',
    id: 'celsius',
    name: 'temperature',
    value: 'C',
  });
  const cLabel = createElement(
    'label',
    ['label-option'],
    { for: 'celsius' },
    'Celsius'
  );
  const kInput = createElement('input', ['temp-option'], {
    type: 'radio',
    id: 'kelvin',
    name: 'temperature',
    value: 'K',
  });
  const kLabel = createElement(
    'label',
    ['label-option'],
    { for: 'kelvin' },
    'Kelvin'
  );

  formOptions.append(fInput, fLabel, cInput, cLabel, kInput, kLabel);
  return formOptions;
}
// check for celsius/farenheit/Kelvin (do that math!!)

// capture the input on submission
function captureInput() {
  const userInput = {
    searchParam: document.querySelector('.location-input').value,
    tempMode: document.querySelector('input[name="temperature"]:checked').value,
  };
  console.log('Input Captured!');
  console.table(userInput);
  return userInput;
}

// exports

export default { loadInputPane, captureInput };
