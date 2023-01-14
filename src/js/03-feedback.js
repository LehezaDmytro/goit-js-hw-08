const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea')

let parseLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'))

form.addEventListener('input', saveFormValues)

function saveFormValues(event) {
    const formValues = { email: "", message: "", }
    const { elements: { email, message } } = event.currentTarget;

    formValues.email = email.value;
    formValues.message = message.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
    parseLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'))
}

if (parseLocalStorage) {
    input.value = parseLocalStorage.email;
    textarea.value = parseLocalStorage.message;
} else {
    input.value = "";
    textarea.value = "";
}

form.addEventListener('click', throttle(handleSubmit, 500));

function handleSubmit(event) {
    if (event.target.nodeName !== "BUTTON" || !parseLocalStorage) {
        return
    } else if (input.value === "" || textarea.value === "") {
        alert("Please fill in all the fields!")
    } else {
        console.log(parseLocalStorage);
        form.reset();
        localStorage.removeItem('feedback-form-state') 
        parseLocalStorage = undefined;
    }
}

