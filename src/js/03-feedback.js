import throttle from 'lodash.throttle';

STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', throttle(onFormSubmit, 500));

const formData = {};

getStorageInputs();

function onFormInput(e) {
  e.preventDefault();
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function getStorageInputs() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parseSaveData = JSON.parse(savedData);

  if (savedData) {
    input.value = parseSaveData.email;
    textarea.value = parseSaveData.message;
  }
}
