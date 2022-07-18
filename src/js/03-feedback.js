import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

let savedInputs;
// const formData = {};

getStorageInputs();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(
    savedInputs
  ); /* Подскажите как вывести в консоль обьект инпутов при сабмите не вынося  let savedInputs глобально из функции function onFormInput(e)*/
}

function onFormInput(e) {
  // e.preventDefault();
  // formData[e.target.name] = e.target.value;
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

  /* Чтобы избавиться от const formData = {};  ИЗ ЗАПИСИ КУРСА JS39*/

  savedInputs = localStorage.getItem(STORAGE_KEY);
  savedInputs = savedInputs ? JSON.parse(savedInputs) : {};
  savedInputs[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedInputs));
}

function getStorageInputs() {
  let savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    savedData = JSON.parse(savedData);
    Object.entries(savedData).forEach(([name, value]) => {
      // formData[name] = value;
      form.elements[name].value = value;
    });
  }
}
