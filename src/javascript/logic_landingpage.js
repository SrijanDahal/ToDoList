import {signUpPage} from './signup.js';
import {loginPage} from './login.js';

// Importing the functions from the signup.js and login.js files
const signupPage = signUpPage();
document.body.appendChild(signupPage);

const loginPage1= loginPage();
document.body.appendChild(loginPage1);

// Selecting the elements
const body = document.querySelector('body');    // Selecting the body element
const landingPage = document.querySelector('.landing-page');  // Selecting the landing page
const mainLandingPage = document.querySelector('.heading-landing-page');   // Selecting the main element
const buttons = document.querySelectorAll('.buttonsSignUP');  // Selecting the buttons
const loginButton = document.querySelector('.buttonsLogIn'); // Selecting the login button
const submitButtonSingUp = document.querySelector('.submitButtonSingUp'); // Selecting the singup page submit button
const submitButtonLogIn = document.querySelector('.submitButtonLogin'); // Selecting the login page submit button
const inputsLogIn = document.querySelectorAll('.inputLogin'); // Selecting the login page input fields
const inputSingUp = document.querySelectorAll('.inputSingUp'); // Selecting the signup page input fields
const mainpage = document.querySelector('.main-page-todolist'); // Selecting the main page of the todo list

// calling the functions 
bodyStyle();


// Creating the styles of the body based on the page the user in
function bodyStyle() {
    if(window.getComputedStyle(landingPage).display === 'block') {
        body.style.backgroundColor = 'rgba(244, 122, 0, 0.854)';
    }

    else {
        body.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        }
}

// Creating a Event Listener in the submit button of the login page
submitButtonLogIn.addEventListener('click', () => {
    // Checking if the input fields are empty
    const isEmpty = Array.from(inputsLogIn).some(input => input.value === '');
    // Checking if the input fields are empty
    if (isEmpty) {
        alert('Please fill in all the fields');

    } 
    else {
        mainpage.style.display = 'block';
        landingPage.style.display = 'none';
        loginPage1.style.display = 'none';
        body.style.backgroundColor = '#ffd8a5';
        body.style.margin = '0';
        body.style.padding = '0';
        // Clear all inputs
        inputsLogIn.forEach(input => input.value = '');
    }

});

// Creating a Event Listener in the submit button of the signup page
submitButtonSingUp.addEventListener('click', () => {
    // Checking if the input fields are empty
    const isEmpty = Array.from(inputSingUp).some(input => input.value === '');

    // Checking if the input fields are empty
    if (isEmpty) {
        alert('Please fill in all the fields');
    } 

    else {
        mainpage.style.display = 'block';
        landingPage.style.display = 'none';
        signupPage.style.display = 'none';
        body.style.backgroundColor = '#ffd8a5';
        body.style.margin = '0';
        body.style.padding = '0';
        // Clear all inputs
        inputSingUp.forEach(input => input.value = '');
    }
});



// Creating a Event Listener in the login button that would direct the user to the login page
loginButton.addEventListener('click', () => {
    mainLandingPage.style.display = 'none';
    signupPage.style.display = 'none';
    loginPage1.style.display = 'block';
}
);

// Creating a Event Listener in the buttons that would direct the user to the signup page
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Sign Up' || button.textContent === 'Start Now') {
            mainLandingPage.style.display = 'none';
            loginPage1.style.display = 'none';
            signupPage.style.display = 'block';
        }  
    });
});

