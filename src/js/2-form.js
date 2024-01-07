// const STORAGE_KEY = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');
// const textarea = form.querySelector('textarea');
// const input = form.querySelector('input');

// form.addEventListener('submit', onFormSubmit);
// textarea.addEventListener('input', onTextareaInput);
// input.addEventListener('input', onInputChange);

// populateTextarea();

// function onFormSubmit(event) {
//   event.preventDefault();
//   localStorage.removeItem(STORAGE_KEY);
//   event.currentTarget.reset();
// }

// function onTextareaInput(event) {
//   const message = event.target.value;
//   console.log(message);
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea() {
//   const savedMassage = localStorage.getItem(STORAGE_KEY);
//   if (savedMassage) {
//     textarea.value = savedMassage;
//   }
// }

// function onInputChange() {
//   console.log(1);
// }

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);
input.addEventListener('input', onInputChange);

populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function onTextareaInput(event) {
  const prevousStorageState = localStorage.getItem(STORAGE_KEY);
  const message = event.target.value;
  let parsedJSON = {};
  if (prevousStorageState) {
    parsedJSON = JSON.parse(prevousStorageState);
    parsedJSON.textarea = message;
  } else {
    parsedJSON = {
      textarea: message,
    };
  }

  console.log(message);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedJSON));
}

function onInputChange(event) {
  const prevousStorageState = localStorage.getItem(STORAGE_KEY);
  const message = event.target.value;
  let parsedJSON = {};

  if (prevousStorageState) {
    parsedJSON = JSON.parse(prevousStorageState);
    parsedJSON.input = message;
  } else {
    parsedJSON = {
      input: message,
    };
  }

  console.log(message);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedJSON));
}

function populateTextarea() {
  const prevousStorageState = localStorage.getItem(STORAGE_KEY);
  console.log(prevousStorageState);
  if (prevousStorageState) {
    const parsedJSON = JSON.parse(prevousStorageState);
    textarea.value = parsedJSON.textarea || '';
    input.value = parsedJSON.input || '';
  }
}
