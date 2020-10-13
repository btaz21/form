const form = document.getElementById('form');
const password1Element = document.getElementById('password1');
const password2Element = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatches = false;

const validateForm = () => {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = 'Please fill out all fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  if (password1Element.value === password2Element.value) {
    passwordMatches = true;
    password1Element.style.borderColor = 'green';
    password2Element.style.borderColor = 'green';
  } else {
    passwordMatches = false;
    message.textContent = 'Passwords do not match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1Element.style.borderColor = 'red';
    password2Element.style.borderColor = 'red';
  }
  if (isValid && passwordMatches) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
};

const storeFormData = () => {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
};

const processFormData = (e) => {
  e.preventDefault();
  validateForm();
  if (isValid && passwordMatches) {
    storeFormData();
  }
};

// Event Listeners
form.addEventListener('submit', processFormData);
