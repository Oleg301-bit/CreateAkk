'use strict';

const form = document.createElement('form');
form.classList.add('form-container');

const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');

const heading = document.createElement('h1');
heading.classList.add('main-title');
heading.textContent = 'Create an account';

const headerDescription = document.createElement('p');
headerDescription.classList.add('header-description');
headerDescription.textContent =
  'We always keep your name and email address private';

headerContainer.appendChild(heading);
headerContainer.appendChild(headerDescription);
form.appendChild(headerContainer);

const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');

function createInputFields(inputData) {
  const inputField = document.createElement('div');
  inputField.classList.add('input-field');

  inputData.forEach((data) => {
    const input = document.createElement('input');
    input.type = data.type;
    input.id = data.id;
    input.placeholder = data.placeholder;
    inputField.appendChild(input);
  });
  return inputField;
}

inputContainer.appendChild(
  createInputFields([
    { type: 'text', id: 'fname', placeholder: 'First name' },
    { type: 'text', id: 'lname', placeholder: 'Last name' },
  ])
);
inputContainer.appendChild(
  createInputFields([
    { type: 'text', id: 'dname', placeholder: 'Display Name' },
    { type: 'email', id: 'email', placeholder: 'Email Address' },
  ])
);
inputContainer.appendChild(
  createInputFields([
    { type: 'password', id: 'passw', placeholder: 'Password' },
    { type: 'password', id: 'cpassw', placeholder: 'Password Confirm' },
  ])
);

form.appendChild(inputContainer);

const radioContainer = document.createElement('div');
radioContainer.classList.add('radio-container');

function createRadioChoice({ id, labelText, descriptionText }) {
  const choice = document.createElement('div');
  choice.classList.add('choice');

  const pointPlace = document.createElement('div');
  pointPlace.classList.add('point-place');

  const radioInput = document.createElement('input');
  radioInput.type = 'radio';
  radioInput.id = id;
  radioInput.name = 'choose';

  pointPlace.appendChild(radioInput);

  const text = document.createElement('div');
  const label = document.createElement('label');
  label.classList.add('radio-title');
  label.textContent = labelText;

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = descriptionText;

  text.appendChild(label);
  text.appendChild(description);

  choice.appendChild(pointPlace);
  choice.appendChild(text);
  return choice;
}

radioContainer.appendChild(
  createRadioChoice({
    id: 'buy',
    labelText: 'Join As a Buyer',
    descriptionText:
      'I am looking for a Name, Logo or Tagline for my business, brand or product.',
  })
);
radioContainer.appendChild(
  createRadioChoice({
    id: 'create',
    labelText: 'Join As creative or Marketplace Seller',
    descriptionText:
      ' I plan to submit name ideas,Logo designs or sell names in Domain Marketplace.',
  })
);
form.appendChild(radioContainer);

const checkboxContainer = document.createElement('div');
checkboxContainer.classList.add('checkbox-container');

const pointPlace = document.createElement('div');
pointPlace.classList.add('point-place');

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'check';

pointPlace.appendChild(checkbox);

const checkDescription = document.createElement('label');
checkDescription.setAttribute('for', 'check');
checkDescription.classList.add('description');
checkDescription.textContent =
  'Allow Squadhelp to send marketing/promotional offers from time to time';

checkboxContainer.appendChild(pointPlace);
checkboxContainer.appendChild(checkDescription);

form.appendChild(checkboxContainer);

const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Create account';

form.appendChild(button);

document.body.appendChild(form);
