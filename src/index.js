import './CSS/style.css';
import './images/todo-removebg-preview.png';
import {signUpPage} from './javascript/signup.js';
import {loginPage} from './javascript/login.js';

const signupPage = signUpPage();
document.body.appendChild(signupPage);

const loginPage1= loginPage();
document.body.appendChild(loginPage1);

const body = document.querySelector('body');    

const mainLandingPage = document.querySelector('main');
const buttons = document.querySelectorAll('.buttonsSignUP');

const loginButton = document.querySelector('.buttonsLogIn');

const submitButton = document.querySelector('.submitButton');

const submitButtonLogIn = document.querySelector('.submitButtonLogin');
const inputsLogIn = document.querySelectorAll('.inputLogin');

const inputsSingUp = document.querySelectorAll('.inputSingUp');


submitButtonLogIn.addEventListener('click', () => {
    const isEmpty = Array.from(inputsLogIn).some(input => input.value === '');
    
    if (isEmpty) {
        alert('Please fill in all the fields');
    } else {
        loginPage1.style.display = 'none';
        
        // Clear all inputs
        inputsLogIn.forEach(input => input.value = '');
    }

}
);

submitButton.addEventListener('click', () => {
    const isEmpty = Array.from(inputsSingUp).some(input => input.value === '');
    
    if (isEmpty) {
        alert('Please fill in all the fields');
    } else {
        signupPage.style.display = 'none';
        
        // Clear all inputs
        inputsSingUp.forEach(input => input.value = '');
    }

}
);

loginButton.addEventListener('click', () => {
    mainLandingPage.style.display = 'none';
    signupPage.style.display = 'none';
    loginPage1.style.display = 'block';
}
);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Sign Up' || button.textContent === 'Start Now') {
            mainLandingPage.style.display = 'none';
            loginPage1.style.display = 'none';
            signupPage.style.display = 'block';
        }  
    });
});