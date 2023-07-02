import createElement from '../utils/helper';

const inputPane = document.querySelector('.input-pane');

// create basic form

function loadInputPane() {
  const newForm = createElement('form', [], { action: '' });

  const newInput = createElement('input', ['location'], {
    type: 'text',
    value: 'Saint Paul',
  });

  const newSubmitButton = createElement(
    'button',
    ['submit-form'],
    { type: 'button' },
    'See Weather'
  );

  newForm.appendChild(newInput);
  newForm.appendChild(newSubmitButton);
  newForm.appendChild(addOptions());
  inputPane.appendChild(newForm);
}

// create form options
function addOptions() {
  const formOptions = createElement('div', ['radio-options'], {});
  const fInput = createElement('input', ['input-option'], {
    type: 'radio',
    id: 'fahrenheit',
    name: 'temperature',
    value: 'fahrenheit',
  });
  const fLabel = createElement(
    'label',
    ['label-option'],
    {
      for: 'fahrenheit',
    },
    'Fahrenheit'
  );
  const cInput = createElement('input', ['input-option'], {
    type: 'radio',
    id: 'celsius',
    name: 'temperature',
    value: 'celsius',
  });
  const cLabel = createElement(
    'label',
    ['label-option'],
    { for: 'celsius' },
    'Celsius'
  );
  const kInput = createElement('input', ['input-option'], {
    type: 'radio',
    id: 'kelvin',
    name: 'temperature',
    value: 'kelvin',
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

// exports

export default { loadInputPane };
