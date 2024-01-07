const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);

populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function onTextareaInput(event) {
  const message = event.target.value;
  console.log(message);
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMassage = localStorage.getItem(STORAGE_KEY);
  if (savedMassage) {
    textarea.value = savedMassage;
  }
}
