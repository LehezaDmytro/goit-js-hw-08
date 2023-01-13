const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea')

form.addEventListener('input', saveFormValues)

const formValues = { email: "", message: "",}

function saveFormValues(event) {
    const { elements: { email, message } } = event.currentTarget;
    formValues.email = email.value;
    formValues.message = message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
}

const parseLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'))
input.value = parseLocalStorage.email;
textarea.value = parseLocalStorage.message;

form.addEventListener('click', throttle(handleSubmit, 500));

function handleSubmit(event) {
    if (event.target.nodeName !== "BUTTON") {
        return
    } else {
        // const { elements: { email, message } } = event.currentTarget;
        console.log(parseLocalStorage);
    // console.log(message.value);
        form.reset();
        localStorage.removeItem('feedback-form-state')
    }
}

